'use client';
import { useEffect, useState } from 'react';

export default function Dashboard(){

  const [data,setData]=useState([]);

  useEffect(()=>{
    const logs = JSON.parse(localStorage.getItem("zuno_logs")||"[]");
    setData(logs);
  },[]);

  const total = data.length;
  const correct = data.filter(d=>d.correct).length;

  return(
    <main style={{padding:24,textAlign:'center'}}>
      <h2>📊 Dashboard</h2>

      <p>Total Attempts: {total}</p>
      <p>Accuracy: {total? Math.round((correct/total)*100):0}%</p>
    </main>
  );
}
