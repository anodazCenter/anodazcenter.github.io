import React from 'react';
import { Pie } from 'react-chartjs-2';

// Reward pool
// 20,000,000
// 20%
// Play to Earn
// 30,000,000
// 30%
// Public Sale
// 9,000,000
// 9%
// Private Sale
// 3,000,000
// 3%
// Copyright Holder
// 7,000,000
// 7%
// 3rd Party team
// 10,000,000
// 10%
// Core team
// 13,000,000
// 13%
// Ecosystem Fund
// 8,000,000
// 8%

let option =  {
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 18
                }
            }
        }
    }
}

const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [20000000, 30000000, 9000000, 3000000, 7000000, 10000000 , 13000000 , 8000000],
      backgroundColor: [
        '#f9d801',
        '#f69125',
        '#f05f96',
        '#745ea7',
        '#0481c4',
        '#2aa8e2',
        '#75c5ac',
        '#cee52e',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 0,
    },
  ],
};

const PieChart = () => (
  <>

    
    <Pie options={option} data={data}  />

  </>
);

export default PieChart;