'use client';
import { useState, useEffect } from 'react';
import ZunoBlob from "../../components/ZunoBlob";
import { questions } from "../../utils/questions";
import { supabase } from "../../lib/supabase";

export default function Practice(){

  const [q,setQ]=useState(null);
  const [phase,setPhase]=useState("intro");
  const [input,setInput]=useState('');
  const [msg,setMsg]=useState('');
  const [face,setFace]=useState("😏");

  useEffect(()=>{ loadQ(); },[]);

  const loadQ = ()=>{
    const next = questions[Math.floor(Math.random()*questions.length)];
    setQ(next);
    setPhase("intro");
    setInput('');
    setFace("😏");
    setMsg("Got one for you… ready?");

    setTimeout(()=>{
      setPhase("question");
      setMsg("Try it properly… don’t rush");
    },1000);
  };

  const submit=async ()=>{
    const correct = Number(input)===q.a;

    await supabase.from('attempts').insert([{
      user_id:"demo_user",
      question:q.q,
      concept:q.concept,
      correct
    }]);

    if(correct){
      setFace("😎");
      setMsg("That was clean");
      setTimeout(loadQ,1500);
    }else{
      setFace("😏");
      setMsg("You rushed… didn’t you?");
    }
  };

  if(!q) return null;

  return(
    <main style={{padding:20,maxWidth:420,margin:'auto',textAlign:'center'}}>

      <ZunoBlob face={face}/>

      {phase!=="intro" && (
        <div style={{
          background:'#0f172a',
          padding:24,
          borderRadius:20,
          marginTop:10
        }}>
          <h2>{q.q}</h2>
        </div>
      )}

      {phase==="question" && (
        <button onClick={()=>setPhase("input")} style={btn}>I’ll try it</button>
      )}

      {phase==="input" && (
        <>
          <input value={input} onChange={(e)=>setInput(e.target.value)} style={inputStyle}/>
          <button onClick={submit} style={btn}>Submit</button>
        </>
      )}

      <p style={{marginTop:15,opacity:0.7}}>{msg}</p>

    </main>
  )
}

const btn = {
  marginTop:14,
  padding:'14px',
  width:'100%',
  background:'#7c3aed',
  borderRadius:'12px',
  color:'#fff',
  fontWeight:'bold'
};

const inputStyle = {
  marginTop:20,
  padding:14,
  width:'100%',
  borderRadius:12
};
