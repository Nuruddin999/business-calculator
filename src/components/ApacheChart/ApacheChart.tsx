// import {useRef, useEffect, CSSProperties} from "react";
// import { CanvasRenderer } from "echarts/renderers";
// import { init, getInstanceByDom, use } from "echarts/core";
// import {PieChart} from "echarts/charts";
// import {
//     LegendComponent,
//     GridComponent,
//     TooltipComponent,
//     ToolboxComponent,
//     TitleComponent,
//     DataZoomComponent,
// } from "echarts/components";
// import type { ECharts, ComposeOption, SetOptionOpts } from "echarts/core";
// import type {
//     BarSeriesOption,
//     LineSeriesOption,
//     ScatterSeriesOption,
//     PieSeriesOption
// } from "echarts/charts";
// import type { TitleComponentOption, GridComponentOption } from "echarts/components";
// import styles from "./achart.module.scss"
//
// use([
//     LegendComponent,
//     PieChart,
//     GridComponent,
//     TooltipComponent,
//     TitleComponent,
//     ToolboxComponent,
//     DataZoomComponent,
//     CanvasRenderer,
// ]);
//
// // Combine an Option type with only required components and charts via ComposeOption
// export type EChartsOption = ComposeOption<
//     | BarSeriesOption
//     | LineSeriesOption
//     | TitleComponentOption
//     | GridComponentOption
//     | ScatterSeriesOption
//     | PieSeriesOption
// >;
//
// export interface ReactEChartsProps {
//     option: EChartsOption;
//     style?: CSSProperties;
//     settings?: SetOptionOpts;
//     loading?: boolean;
//     theme?: "light" | "dark";
// }
//
// export function ReactECharts({
//                                  option,
//                                  style,
//                                  settings,
//                                  loading,
//                                  theme,
//                              }: ReactEChartsProps): JSX.Element {
//     const chartRef = useRef<HTMLDivElement>(null);
//
//     useEffect(() => {
//
//         let chart: ECharts | undefined;
//         if (chartRef.current !== null) {
//             chart = init(chartRef.current, theme);
//         }
//
//         function resizeChart() {
//             chart?.resize();
//         }
//         window.addEventListener("resize", resizeChart);
//
//         return () => {
//             chart?.dispose();
//             window.removeEventListener("resize", resizeChart);
//         };
//     }, [theme]);
//
//     useEffect(() => {
//
//         if (chartRef.current !== null) {
//             const chart = getInstanceByDom(chartRef.current);
//             chart?.setOption(option, settings);
//         }
//     }, [option, settings, theme]);
//
//     useEffect(() => {
//         if (chartRef.current !== null) {
//             const chart = getInstanceByDom(chartRef.current);
//             loading === true ? chart?.showLoading() : chart?.hideLoading();
//         }
//     }, [loading, theme]);
//
//     return <div ref={chartRef} className={styles.chartSideBlock} style={{ width: "100%", height: "70vh",...style }} />;
// }
