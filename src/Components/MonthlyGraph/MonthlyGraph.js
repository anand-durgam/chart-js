import './MonthlyGraph.css'
import { Chart } from 'chart.js/auto';
import chartData from '../Data/Data'
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

const MonthlyGraph = () => {

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const [monthGrowthData , setMonthGrowthData] = useState([])
    const labels = chartData.map(row => row.year)

    const lineData = {
    labels,
    datasets: [
        {
        label: 'Product Analytics',
        data: monthGrowthData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

    // show "select a month to view analytics"
    const [isMonthSelected, setIsMonthSelected] = useState(false)
    // on change month option
    const onChangeMonth = (e) => {
        const monthlyYearData = []
        const selectedMonth = e.target.value
        if(selectedMonth === "Month"){
            return setIsMonthSelected(false)
        }
        for(let i of chartData){
            const monthlyData = i.monthlyData
            for(let j of monthlyData){
                if(j.month === selectedMonth){
                    monthlyYearData.push(j.growth)
                }
            }
        }
        setMonthGrowthData(monthlyYearData)
        setIsMonthSelected(true)
    }


    return(
        <>
             <div className='chart-page'>

                <div className='year-container'>
                
                    <a href='/analytics/compare'><button className='monthly-button'>COMPARE</button></a>
                    <button className='monthly-button'>VIEW MONTH WISE</button>

                    <select className='year-select-tag' onChange={onChangeMonth}>
                        <option key='month' value='Month'>Month</option>
                        {monthNames.map(item => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select> 

                </div>

                {isMonthSelected && (
                    <div className='chart-container'>     
                        <Line data={lineData} />
                    </div>
                )}
                {!isMonthSelected && (
                    <div className='chart-container data-container'>     
                        Select a month to view analytics
                    </div>
                )}

            </div>
        </>
    )
}

export default MonthlyGraph 