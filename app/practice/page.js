'use client';
import { useState, useEffect } from 'react';
import { questions } from '../../utils/questions';

export default function Practice(){

  const [q,setQ]=useState(null);
  const [input,setInput]=useState('');
  const [msg,setMsg]=useState("");

  useEffect(()=>{
    loadQ();
  },[]);

  const loadQ = ()=>{
    setQ(questions[Math.floor(Math.random()*questions.length)]);
    setInput('');
  };

  const submit=()=>{
    const correct = Number(input)===q.a;

    const logs = JSON.parse(localStorage.getItem("zuno_logs")||"[]");
    logs.push({correct, concept:q.concept});
    localStorage.setItem("zuno_logs", JSON.stringify(logs));

    setMsg(correct ? "Nice 😏" : "Try again 👀");

    setTimeout(loadQ, 1200);
  };

  if(!q) return null;

  return(
    <main style={{padding:24,maxWidth:400,margin:'auto',textAlign:'center'}}>

      <h2 style={{fontSize:32}}>🤔 {q.q}</h2>

      <input 
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        style={{marginTop:20,padding:12,width:'100%',borderRadius:10}}
      />

      <button 
        onClick={submit}
        style={{marginTop:10,padding:12,width:'100%',background:'#22c55e',borderRadius:10}}>
        Submit
      </button>

      <p style={{marginTop:15}}>{msg}</p>

    </main>
  );
}
