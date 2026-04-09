'use client';

import { useState,useEffect } from 'react';
import ZunoCharacter from "../../components/ZunoCharacter";
import { questions } from "../../utils/questions";

export default function Practice(){

  const [q,setQ]=useState(null);
  const [phase,setPhase]=useState("intro");
  const [input,setInput]=useState('');
  const [msg,setMsg]=useState('');

  useEffect(()=>{loadQ();},[]);

  const loadQ=()=>{
    const next=questions[Math.floor(Math.random()*questions.length)];
    setQ(next);
    setPhase("intro");

    setMsg("Wait...");
    setTimeout(()=>setMsg("Don’t rush."),1000);
    setTimeout(()=>setMsg("Take a paper. Try this."),2000);
    setTimeout(()=>setPhase("question"),3000);
  };

  if(!q) return null;

  return(
    <main style={{padding:20,height:'100vh',position:'relative'}}>
      <ZunoCharacter/>

      {phase==="question" && (
        <>
          <h2>{q.q}</h2>
          <button onClick={()=>setPhase("commit")}>I’ve written it</button>
        </>
      )}

      {phase==="commit" && (
        <>
          <input value={input} onChange={(e)=>setInput(e.target.value)} />
        </>
      )}

      <p>{msg}</p>
    </main>
  )
}
