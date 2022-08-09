import { Line } from '@ant-design/plots';
import {useEffect, useState} from "react";

const FinancialChart = () => {
    const data = [
        {
            name: "Pemasukan",
            month: 'Januari',
            value: 3000,
        },
        {
            name: "Pemasukan",
            month: 'Februari',
            value: 6000,
        },
        {
            name: "Pemasukan",
            month: 'Maret',
            value: 9000,
        },
        {
            name: "Pemasukan",
            month: 'April',
            value: 1000,
        },
        {
            name: "Pemasukan",
            month: 'Mei',
            value: 5000,
        },
        {
            name: "Pemasukan",
            month: 'Juni',
            value: 7000,
        },
        {
            name: "Pemasukan",
            month: 'Juli',
            value: 3000,
        },
        {
            name: "Pemasukan",
            month: 'Agustus',
            value: 7000,
        },
        {
            name: "Pemasukan",
            month: 'September',
            value: 9000,
        },
        {
            name: "Pemasukan",
            month: 'Oktober',
            value: 3000,
        },
        {
            name: "Pemasukan",
            month: 'November',
            value: 6000,
        },
        {
            name: "Pemasukan",
            month: 'Desember',
            value: 8000,
        },
        {
            name: "Pengeluaran",
            month: 'Januari',
            value: 2000,
        },
        {
            name: "Pengeluaran",
            month: 'Februari',
            value: 7000,
        },
        {
            name: "Pengeluaran",
            month: 'Maret',
            value: 4000,
        },
        {
            name: "Pengeluaran",
            month: 'April',
            value: 7000,
        },
        {
            name: "Pengeluaran",
            month: 'Mei',
            value: 2000,
        },
        {
            name: "Pengeluaran",
            month: 'Juni',
            value: 1000,
        },
        {
            name: "Pengeluaran",
            month: 'Juli',
            value: 7000,
        },
        {
            name: "Pengeluaran",
            month: 'Agustus',
            value: 4000,
        },
        {
            name: "Pengeluaran",
            month: 'September',
            value: 6000,
        },
        {
            name: "Pengeluaran",
            month: 'Oktober',
            value: 9000,
        },
        {
            name: "Pengeluaran",
            month: 'November',
            value: 5000,
        },
        {
            name: "Pengeluaran",
            month: 'Desember',
            value: 6000,
        },
    ]

    const config = {
        data,
        xField: 'month',
        yField: 'value',
        seriesField: 'name',
        legend: false,
        smooth: true,

        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return (
        <>
            <div className="card bg-white border-white p-2"
                 style={{width: "18 rem", overflow: "hidden", borderRadius: 10}}>
                <div className="card-body bg-white">
                    <div className="d-flex justify-content-between bg-white mb-4">
                        <div className="bg-white">
                            <h5 className="card-title bg-white fw-bold m-0" style={{fontSize: 18}}>Arus Keuangan</h5>
                        </div>
                        <div className="bg-white">
                            <div className="d-flex justify-content-between bg-white">
                                <div className="bg-white mx-2">
                                    <h5 className="card-title bg-white fw-normal m-0 mt-1"
                                        style={{fontSize: 12, color: "#1B212D"}}>
                                        <img className="bg-white mx-1 my-auto " src="/income-dot.png" alt=""/>Pemasukan
                                    </h5>
                                </div>
                                <div className="bg-white mx-2">
                                    <h5 className="card-title bg-white fw-normal m-0 mt-1"
                                        style={{fontSize: 12, color: "#1B212D"}}>
                                        <img className="bg-white mx-1 my-auto" src="/expense-dot.png" alt=""/>Pengeluaran
                                    </h5>
                                </div>
                                <div className="bg-white mx-2">
                                    <select className="form-select form-select-sm border-0"
                                            style={{backgroundColor: "#F8F8F8"}} aria-label="2022">
                                        <option value="1">2022</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Line {...config} />
                </div>
            </div>
        </>
    )
}

export default FinancialChart