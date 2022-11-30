import './ChartJS.css'
// import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip } from 'chart.js';
import { Chart } from 'chart.js/auto';
import chartData from '../Data/Data'
import { Bar } from "react-chartjs-2";
import { useState } from 'react';

const ChartJS = () => {
    
    const [yearIndex, setYearIndex] = useState(0)
    const monthlyData = chartData[yearIndex].monthlyData

    // on Changing the Year 
    const onChangeYear = (e) => {
        const selectedYear = e.target.value
        for(let i of chartData){
            if(i.year === parseInt(selectedYear)){  
                setYearIndex(chartData.indexOf(i))
            }
        }
    }
   
    const data = {
        labels: monthlyData.map(row => row.month),
        datasets: [
          {
            label: "Product Analytics",
            data: monthlyData.map(row => row.growth),
          },
        ],
      };



    return(
        <>
            <div className='chart-page'>

                <div className='year-container'>

                    {/* <a href='/analytics/compare'><button className='monthly-button'>COMPARE</button></a> */}
                    <a href='/analytics/line'><button className='monthly-button'>VIEW MONTH WISE</button></a> 

                    <select className='year-select-tag' onChange={onChangeYear}>
                        {chartData.map(row => (
                            <option key={row.year} value={row.year}>{row.year}</option>
                        ))}
                    </select>
                </div>

                <div className='chart-container'>
                    <Bar data={data} />
                </div>
            </div> 
        </>
    )
}

export default ChartJS