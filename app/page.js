'use client';

import Logo from "../components/Logo";
import ZunoCharacter from "../components/ZunoCharacter";

export default function Home(){
  return(
    <main style={{textAlign:'center',paddingTop:'120px',height:'100vh',position:'relative'}}>
      <ZunoCharacter/>
      <Logo/>
      <h1 style={{marginTop:20,fontSize:32}}>
        Most kids rush.<br/>You won’t 😏
      </h1>
      <a href="/practice" style={{
        display:'inline-block',
        marginTop:30,
        padding:'16px 28px',
        borderRadius:18,
        background:'linear-gradient(90deg,#7c3aed,#a78bfa)',
        color:'#fff',
        textDecoration:'none',
        fontWeight:'bold'
      }}>
        Start Challenge
      </a>
    </main>
  )
}
