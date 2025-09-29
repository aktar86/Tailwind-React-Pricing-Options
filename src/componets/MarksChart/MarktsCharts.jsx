import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarktsCharts = ({marksPromise}) => {

    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data;
    // console.log(marksData);

    // data processing for the chart 
    const marksChartsData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics:studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = Math.ceil(avg);

        return student
    })


    // console.log(marksChartsData);
    return (
        <div>
            <BarChart width={1000} height={400} data={marksChartsData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="physics" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='red'></Bar>
                <Bar dataKey="math" fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarktsCharts;