'use client';
import { useState, useEffect } from 'react';
import ZunoCharacter from "../../components/ZunoCharacter";
import { questions } from "../../utils/questions";
import { supabase } from "../../lib/supabase";

export default function Practice(){

  const [q,setQ]=useState(null);
  const [phase,setPhase]=useState("intro");
  const [input,setInput]=useState('');
  const [msg,setMsg]=useState('');
  const [mood,setMood]=useState("idle");

  useEffect(()=>{ loadQ(); },[]);

  const loadQ = ()=>{
    const next = questions[Math.floor(Math.random()*questions.length)];
    setQ(next);
    setPhase("intro");
    setInput('');
    setMood("idle");
    setMsg("Wait...");
    setTimeout(()=>setMsg("Don’t rush."),1000);
    setTimeout(()=>setMsg("Take a paper. Try this."),2000);
    setTimeout(()=>setPhase("question"),3200);
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
      setMood("correct");
      setMsg("That was clean 😏");
      setTimeout(loadQ,1500);
    }else{
      setMood("wrong");
      setMsg("You rushed… didn’t you?");
    }
  };

  if(!q) return null;

  return(
    <main style={{padding:20,maxWidth:420,margin:'auto',textAlign:'center'}}>
      <ZunoCharacter mood={mood}/>

      {phase==="question" && (
        <>
          <div style={{
            background:'#0f172a',
            padding:24,
            borderRadius:20,
            marginTop:10
          }}>
            <h2>{q.q}</h2>
          </div>

          <button onClick={()=>setPhase("commit")} style={btn}>
            I’ve written it
          </button>
        </>
      )}

      {phase==="commit" && (
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
