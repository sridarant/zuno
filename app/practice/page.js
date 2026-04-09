'use client';
import { useState, useEffect } from 'react';
import { questions } from '../../utils/questions';
import { getHint } from '../../utils/hints';
import { supabase } from '../../lib/supabase';

export default function Practice(){

  const [q,setQ]=useState(null);
  const [phase,setPhase]=useState("think");
  const [input,setInput]=useState('');
  const [msg,setMsg]=useState('');
  const [hint,setHint]=useState('');
  const [hintLevel,setHintLevel]=useState(0);
  const [ready,setReady]=useState(false);

  useEffect(()=>{
    loadQ();
  },[]);

  const loadQ = ()=>{
    setQ(questions[Math.floor(Math.random()*questions.length)]);
    setPhase("think");
    setInput('');
    setHint('');
    setHintLevel(0);
    setMsg("Try this… I’ll wait 👀");
    setReady(false);
    setTimeout(()=>setReady(true),2000);
  };

  const start = ()=>{
    if(!ready) return;
    setPhase("input");
    setMsg("What did you get?");
  };

  const submit=async ()=>{
    const correct = Number(input)===q.a;

    await supabase.from('attempts').insert([{
      user_id: "demo_user",
      question: q.q,
      concept: q.concept,
      correct
    }]);

    if(correct){
      setMsg("That was clean 😏");
      setTimeout(loadQ,1200);
    }else{
      const lvl = hintLevel+1;
      setHintLevel(lvl);
      setHint(getHint(q.concept,lvl));
      setMsg("Not quite… try again 👀");
    }
  };

  if(!q) return null;

  return(
    <main style={{
      padding:24,
      maxWidth:420,
      margin:'auto',
      textAlign:'center'
    }}>

      <div style={{fontSize:50}}>😏</div>

      <div style={{
        background:'#0f172a',
        padding:20,
        borderRadius:20,
        marginTop:10
      }}>
        <h2>{q.q}</h2>
      </div>

      {phase==="think" && (
        <>
          <p>{msg}</p>
          <button disabled={!ready} onClick={start} style={btn}>
            {ready ? "I tried it" : "Thinking..."}
          </button>
        </>
      )}

      {phase==="input" && (
        <>
          <input 
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            style={{marginTop:20,padding:12,width:'100%',borderRadius:10}}
          />
          <button onClick={submit} style={btn}>Submit</button>

          {hint && (
            <div style={{
              marginTop:10,
              background:'#020617',
              padding:10,
              borderRadius:10
            }}>
              💡 {hint}
            </div>
          )}
        </>
      )}

      <p>{msg}</p>

    </main>
  );
}

const btn = {
  marginTop:12,
  padding:'12px',
  width:'100%',
  background:'#22c55e',
  borderRadius:'10px'
};
