import './CompareChart.css'
import { Chart } from 'chart.js/auto';
import chartData from '../Data/Data'
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

const CompareChart = () => {
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const [monthOneGrowthData , setMonthOneGrowthData] = useState([])
    const [monthTwoGrowthData , setMonthTwoGrowthData] = useState([])
    const [monthOne,setMonthOne] = useState("Month 1")
    const [monthTwo,setMonthTwo] = useState("Month 2")
    const labels = chartData.map(row => row.year)

    const lineData = {
    labels,
    datasets: [
        {
        label: monthOne,
        data: monthOneGrowthData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: monthTwo,
        data: monthTwoGrowthData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

    // on change month 1 option
    const onChangeMonthOne = (e) => {
        const monthlyYearData = []
        const selectedMonth = e.target.value
        setMonthOne(e.target.value)
        for(let i of chartData){
            const monthlyData = i.monthlyData
            for(let j of monthlyData){
                if(j.month === selectedMonth){
                    monthlyYearData.push(j.growth)
                }
            }
        }
        setMonthOneGrowthData(monthlyYearData)
    }

    // on change month 2 option
    const onChangeMonthTwo = (e) => {
        const monthlyYearData = []
        const selectedMonth = e.target.value
        setMonthTwo(e.target.value)
        for(let i of chartData){
            const monthlyData = i.monthlyData
            for(let j of monthlyData){
                if(j.month === selectedMonth){
                    monthlyYearData.push(j.growth)
                }
            }
        }
        setMonthTwoGrowthData(monthlyYearData)
    }


    return(
        <>
             <div className='chart-page'>

                <div className='year-container'>

                    <button className='monthly-button'>COMPARE</button>

                {/* First Month */}
                    <select className='year-select-tag' onChange={onChangeMonthOne}>
                        <option key='month' value='Month'>Month 1</option>
                        {monthNames.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select> 

                    <div style={{marginRight: "10px", color: "red"}} >
                        VS
                    </div>

                {/* Second Month */}
                    <select className='year-select-tag' onChange={onChangeMonthTwo}>
                        <option key='month' value='Month'>Month 2</option>
                        {monthNames.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>

                </div>

    
                <div className='chart-container'>     
                    <Line data={lineData} />
                </div>
        

            </div>
        </>
    )
}

export default CompareChart