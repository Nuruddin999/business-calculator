import React from "react";
import {GITHUB_COLORS} from "@/components/GithubChart/colors";
import {PieChart} from "@mui/x-charts/PieChart";
import styles from "./achart.module.scss"

type ParticipantProps = {
    data: Array<any>
}
const DataChart: React.FC<ParticipantProps> = ({data}) => {
    return <div className={styles.chartSideBlock}>
        <PieChart
            colors={Object.values(GITHUB_COLORS).map(el=>el.color || "")}
            series={[
                {
                    data: data.map(el => ({value: el.sum, label: el.name})),
                },
            ]}
        />
    </div>
}

export default DataChart;
