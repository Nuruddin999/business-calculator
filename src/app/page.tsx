"use client"

import styles from "./main.module.scss";
import React, {useState} from "react";
import InputField from "@/components/ui/InputField";
import CustomButton from "@/components/ui/button";
import {getActualColors, GithubChart} from "@/components/GithubChart";
import Participant from "@/components/Participant";
import DataChart from "@/components/ApacheChart/ApacheChart";


type SharesData = Array<{ name: string, sum: number, share: string }>

export default function Home() {
    const [name, setName] = useState('');
    const [sum, setSum] = useState('');
    const [data, setData] = useState<SharesData>([]);

    const handleNameChange = (e: any) => setName(e.target.value);

    const handleSumChange = (e: any) => {
        setSum(e.target.value);
    };

    const handleDelete = (id: string) => {
        let filteredData = data.filter(el => el.name !== id)
        calculate(filteredData)
    }

    const calculate = (data: SharesData) => {
        const newTotalShare = data.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.sum;
        }, 0);

        const finalData = data.map(item => ({
            ...item,
            share: ((item.sum / newTotalShare) * 100).toFixed(2),
        }));

        setData(finalData);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (data.find(el => el.name === name)) {
            return
        }
        let current = parseInt(sum)
        const updatedData = [...data, {name, sum: current, share: "0"}];
        calculate(updatedData)
        setName("");
        setSum("");
    }


    return (
        <div className={styles.mainsec}>
            <div className={styles.textBlock}>
                <h1>Узнай долю в % от общей суммы</h1>
                <p>Например: у вас 100 тыс руб, у друга 300 тыс. руб - общая сумма 400 тыс. нужно узнать у кого какие
                    доли в процентах</p>
            </div>
            <div className={styles.contentBlock}>
                <div className={styles.dataSide}>
                    <form className={styles.inpts} onSubmit={handleSubmit}>
                        <InputField
                            placeholder="Введи имя участника"
                            required
                            onChange={handleNameChange}
                            value={name}
                            type={"text"}/>
                        <InputField
                            placeholder="Введи сумму участника"
                            required
                            onChange={handleSumChange}
                            value={sum}
                            className={styles.sumInp}
                            type={"number"}/>
                        <div className={styles.calcButton}>
                            <CustomButton type={"submit"}>+</CustomButton>
                        </div>
                    </form>
                    <div className={styles.horizontalChart}>
                        <GithubChart data={data}/>
                    </div>
                    <div className={styles.dataWrapper}>
                        {data.sort((a, b) => b.sum - a.sum).map((el,index) => {
                            const actualColors = getActualColors(data)
                            return <Participant person={el} handleDelete={handleDelete} actualColor={actualColors[index]} />
                        })}
                    </div>
                </div>
                {data.length > 0 && <DataChart data={data}  />}
            </div>
        </div>
    );
}
