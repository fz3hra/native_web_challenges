import React, {useRef, useEffect} from 'react'
import Chart from 'chart.js/auto';

const Statistics = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
        const myChart = new Chart(chartRef.current, {
            type: 'bar',
            data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Earnings',
                data: [500, 600, 800, 200, 900, 700],
                backgroundColor: 'rgb(59, 124, 246)',
                borderWidth: 1,
                borderRadius: 6,
            }, {
                label: 'Spendings',
                data: [300, 400, 500, 700, 600, 500],
                backgroundColor: 'rgb(149, 225, 250)',
                borderWidth: 1,
                borderRadius: 6,
            }]
            },
            options: {
            scales: {
                y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 200,
                }
                }
            },
            plugins: {
                tooltip: {
                // Custom tooltip configuration goes here
                }
            }
            }
        });
        return () => {
            myChart.destroy();
        };
    }
  }, []);
  return <>
    <div className='m-4 p-3 rounded-lg bg-white w-8/12'>
        <canvas ref={chartRef} />
    </div>
  </>;
}

export default Statistics