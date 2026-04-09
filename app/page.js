'use client';

import Logo from "../components/Logo";
import ZunoCharacter from "../components/ZunoCharacter";

export default function Home(){
return(
<main style={{
display:'flex',
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
height:'100vh',
textAlign:'center'
}}>
<Logo/>
<ZunoCharacter/>
<h1>Most kids rush.<br/>You won’t 😏</h1>
<a href="/practice" style={{
marginTop:20,
padding:'14px 24px',
borderRadius:14,
background:'#7c3aed',
color:'#fff',
textDecoration:'none'
}}>
Start Challenge
</a>
</main>
);
}