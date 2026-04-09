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
  const [weakConcept,setWeakConcept]=useState(null);

  useEffect(()=>{
    loadWeakConcept();
  },[]);

  const loadWeakConcept = async ()=>{
    const { data } = await supabase
      .from('attempts')
      .select('concept, correct');

    if(!data || data.length===0){
      loadQ(null);
      return;
    }

    const stats = {};
    data.forEach(d=>{
      if(!stats[d.concept]) stats[d.concept]={total:0,correct:0};
      stats[d.concept].total++;
      if(d.correct) stats[d.concept].correct++;
    });

    let weakest=null, lowest=1;
    Object.keys(stats).forEach(c=>{
      const acc = stats[c].correct / stats[c].total;
      if(acc < lowest){
        lowest = acc;
        weakest = c;
      }
    });

    setWeakConcept(weakest);
    loadQ(weakest);
  };

  const loadQ = (concept)=>{
    let pool = questions;
    if(concept){
      const filtered = questions.filter(q=>q.concept===concept);
      if(filtered.length>0) pool = filtered;
    }

    const selected = pool[Math.floor(Math.random()*pool.length)];
    setQ(selected);

    setPhase("think");
    setInput('');
    setHint('');
    setHintLevel(0);
    setMsg("Try this one ✍️");
    setReady(false);

    setTimeout(()=>setReady(true),2000);
  };

  const start = ()=>{
    if(!ready) return;
    setPhase("input");
    setMsg("Your answer?");
  };

  const submit=async ()=>{
    const correct = Number(input)===q.a;

    await supabase.from('attempts').insert([{
      question: q.q,
      concept: q.concept,
      correct
    }]);

    if(correct){
      setMsg("Nice 😏");
      setTimeout(()=>loadWeakConcept(),1200);
    }else{
      const level = hintLevel + 1;
      setHintLevel(level);
      setHint(getHint(q.concept, level));
      setMsg("Try again 👀");
    }
  };

  if(!q) return null;

  return(
    <main style={{padding:24,maxWidth:420,margin:'auto',textAlign:'center'}}>

      <h2>{q.q}</h2>

      {weakConcept && (
        <p style={{opacity:0.6}}>Focusing on: {weakConcept}</p>
      )}

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
            style={{marginTop:20,padding:12,width:'100%'}}
          />
          <button onClick={submit} style={btn}>Submit</button>

          {hint && <div style={{marginTop:10}}>💡 {hint}</div>}
        </>
      )}

      <p>{msg}</p>

    </main>
  );
}

const btn = {
  marginTop:10,
  padding:'12px',
  width:'100%'
};
