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
  const [face,setFace]=useState("😏");

  useEffect(()=>{ loadQ(); },[]);

  const loadQ = ()=>{
    setQ(questions[Math.floor(Math.random()*questions.length)]);
    setPhase("think");
    setInput('');
    setHint('');
    setHintLevel(0);
    setMsg("Try it properly… I’m watching 😏");
    setFace("😏");
    setReady(false);
    setTimeout(()=>setReady(true),2500);
  };

  const start = ()=>{
    if(!ready) return;
    setPhase("input");
    setMsg("Alright… show me");
  };

  const submit=async ()=>{
    const correct = Number(input)===q.a;

    try{
      await supabase.from('attempts').insert([{
        user_id:"demo_user",
        question:q.q,
        concept:q.concept,
        correct
      }]);
    }catch(e){
      console.log("Supabase error", e);
    }

    if(correct){
      setFace("😎");
      setMsg("Hmm… not bad");
      setTimeout(loadQ,1200);
    }else{
      const lvl = hintLevel+1;
      setHintLevel(lvl);
      setHint(getHint(q.concept,lvl));
      setFace("😏");
      setMsg("Nope… think again");
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

      {/* Zuno Character */}
      <div style={{
        fontSize:60,
        transition:'0.3s'
      }}>
        {face}
      </div>

      {/* Question Card */}
      <div style={{
        background:'#0f172a',
        padding:24,
        borderRadius:20,
        marginTop:10,
        boxShadow:'0 10px 30px rgba(0,0,0,0.4)'
      }}>
        <h2 style={{fontSize:28}}>{q.q}</h2>
      </div>

      {phase==="think" && (
        <>
          <p style={{marginTop:12,opacity:0.8}}>{msg}</p>
          <button disabled={!ready} onClick={start} style={btn}>
            {ready ? "I wrote it" : "Thinking..."}
          </button>
        </>
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
              borderRadius:12,
              border:'none'
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

      <p style={{marginTop:10,opacity:0.7}}>{msg}</p>

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
