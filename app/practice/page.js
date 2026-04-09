'use client';

import { useState,useEffect } from 'react';
import ZunoCharacter from "../../components/ZunoCharacter";
import { questions } from "../../utils/questions";
import { supabase } from "../../lib/supabase";

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

setMsg("Wait… think.");
setTimeout(()=>setMsg("Now try."),1500);
setTimeout(()=>setPhase("question"),2500);
};

const submit=async ()=>{
const correct = Number(input)===q.a;

await supabase.from('attempts').insert([{
user_id:"demo",
question:q.q,
concept:q.concept,
correct
}]);

if(correct){
setMsg("Good. You took your time.");
setTimeout(loadQ,1500);
}else{
setMsg("Too quick. Try again.");
}
};

if(!q) return null;

return(
<main style={{
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
height:'100vh',
textAlign:'center'
}}>
<ZunoCharacter/>

{phase==="question" && (
<>
<div style={{
background:'#0f172a',
padding:24,
borderRadius:16,
marginBottom:16
}}>
<h2>{q.q}</h2>
</div>

<button onClick={()=>setPhase("commit")}>
I’ve written it
</button>
</>
)}

{phase==="commit" && (
<>
<input
value={input}
onChange={(e)=>setInput(e.target.value)}
style={{padding:10,borderRadius:10}}
/>

<button onClick={submit}>Submit</button>
</>
)}

<p style={{marginTop:20,opacity:0.7}}>{msg}</p>

</main>
);
}