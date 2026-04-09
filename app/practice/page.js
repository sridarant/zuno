'use client';
import { useState, useEffect } from 'react';
import { questions } from '../../utils/questions';
import { getHint } from '../../utils/hints';
import { supabase } from '../../lib/supabase';

export default function Practice(){

  const [q,setQ]=useState(null);
  const [phase,setPhase]=useState("intro");
  const [input,setInput]=useState('');
  const [msg,setMsg]=useState('');
  const [hint,setHint]=useState('');
  const [hintLevel,setHintLevel]=useState(0);
  const [face,setFace]=useState("😏");

  useEffect(()=>{ loadQ(); },[]);

  const loadQ = ()=>{
    const next = questions[Math.floor(Math.random()*questions.length)];
    setQ(next);
    setPhase("intro");
    setInput('');
    setHint('');
    setHintLevel(0);
    setFace("😏");
    setMsg("Got one for you… ready?");

    setTimeout(()=>{
      setPhase("question");
      setMsg("Try it properly… don’t rush");
    },1000);
  };

  const startThink = ()=>{
    setPhase("think");
    setTimeout(()=>{
      setPhase("input");
      setMsg("Alright… show me");
    },1500);
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
      const lvl = hintLevel+1;
      setHintLevel(lvl);
      setHint(getHint(q.concept,lvl));
      setFace("😏");
      setMsg("You rushed… didn’t you?");
    }
  };

  if(!q) return null;

  return(
    <main style={{
      padding:20,
      maxWidth:420,
      margin:'auto',
      textAlign:'center'
    }}>

      <div style={{fontSize:60,transition:'0.3s'}}>{face}</div>

      {(phase==="question" || phase==="think" || phase==="input") && (
        <div style={{
          background:'#0f172a',
          padding:24,
          borderRadius:20,
          marginTop:10
        }}>
          <h2 style={{fontSize:28}}>{q.q}</h2>
        </div>
      )}

      {phase==="question" && (
        <button onClick={startThink} style={btn}>
          I’ll try it
        </button>
      )}

      {phase==="input" && (
        <>
          <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            style={{
              marginTop:20,
              padding:14,
              width:'100%',
              borderRadius:12
            }}
          />
          <button onClick={submit} style={btn}>Submit</button>

          {hint && (
            <div style={{
              marginTop:12,
              padding:12,
              background:'#020617',
              borderRadius:12
            }}>
              💡 {hint}
            </div>
          )}
        </>
      )}

      <p style={{marginTop:12,opacity:0.8}}>{msg}</p>

    </main>
  );
}

const btn = {
  marginTop:14,
  padding:'14px',
  width:'100%',
  background:'#22c55e',
  borderRadius:'12px',
  fontWeight:'bold'
};
