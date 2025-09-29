import React from 'react';
import { Line, LineChart } from 'recharts';


const resultData = [
  { id: 1, name: "Rahim", physics: 78, chemistry: 82, math: 90 },
  { id: 2, name: "Karim", physics: 85, chemistry: 76, math: 88 },
  { id: 3, name: "Sumi", physics: 92, chemistry: 89, math: 95 },
  { id: 4, name: "Anik", physics: 70, chemistry: 75, math: 80 },
  { id: 5, name: "Mitu", physics: 88, chemistry: 84, math: 91 },
  { id: 6, name: "Hasan", physics: 64, chemistry: 72, math: 68 },
  { id: 7, name: "Tania", physics: 90, chemistry: 93, math: 96 },
  { id: 8, name: "Nadim", physics: 77, chemistry: 81, math: 85 },
  { id: 9, name: "Lamia", physics: 83, chemistry: 86, math: 89 },
  { id: 10, name: "Rakib", physics: 69, chemistry: 74, math: 72 },
];

const Resultcharts = () => {
    return (
      
            <LineChart width={800} height={400} data={resultData}>
                <Line type="monotone" dataKey='math'></Line>
                {/* <Line dataKey='physics'></Line>
                <Line dataKey='chemistry'></Line> */}
            </LineChart>
    
    );
};

export default Resultcharts;