"use client";

import { useEffect, useState } from 'react';

export default function ZunoCharacter({ mood="idle" }){
const [pos,setPos]=useState({top:'60%',left:'20%'});

useEffect(()=>{
const interval=setInterval(()=>{
const positions=[
{top:'10%',left:'10%'},
{top:'20%',left:'70%'},
{top:'70%',left:'15%'},
{top:'60%',left:'75%'}
];
setPos(positions[Math.floor(Math.random()*positions.length)]);
},4000);
return()=>clearInterval(interval);
},[]);

const eye={width:20,height:14,background:'#0f172a',borderRadius:'50%',margin:'0 5px',animation:'blink 4s infinite'};

return(
<div style={{position:'absolute',top:pos.top,left:pos.left,transition:'all 1s ease',
width:140,height:110,borderRadius:'60% 40% 55% 45%',
background:'linear-gradient(135deg,#7c3aed,#a78bfa)',
display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
boxShadow:'0 20px 50px rgba(124,58,237,0.6)',animation:'float 3s ease-in-out infinite'}}>
<div style={{display:'flex'}}>
<div style={eye}></div>
<div style={eye}></div>
</div>
{mood==="correct" && <div style={{width:26,height:4,background:'#0f172a',borderRadius:4,transform:'rotate(10deg)'}}></div>}
{mood==="wrong" && <div style={{width:26,height:4,background:'#0f172a',borderRadius:4}}></div>}
</div>
);
}