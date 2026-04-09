import Logo from "../components/Logo";
import ZunoBlob from "../components/ZunoBlob";

export default function Home(){
  return(
    <main style={{textAlign:'center',padding:'40px'}}>

      <Logo/>

      <ZunoBlob/>

      <h1 style={{marginTop:20,fontSize:30}}>
        Most kids rush.<br/>You won’t
      </h1>

      <a href="/practice" style={{
        display:'inline-block',
        marginTop:30,
        padding:'16px 28px',
        borderRadius:16,
        background:'linear-gradient(90deg,#7c3aed,#a78bfa)',
        color:'#fff',
        textDecoration:'none',
        fontWeight:'bold'
      }}>
        Start Challenge
      </a>

      <p style={{opacity:0.6,marginTop:20}}>Write it. Then answer.</p>

    </main>
  )
}
