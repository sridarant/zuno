export default function Home(){
  return(
    <main style={{padding:30,textAlign:'center'}}>
      <h1 style={{fontSize:42}}>⚡ Zuno</h1>
      <p style={{opacity:0.7}}>Let’s see what you’ve got 😏</p>
      <a href="/practice" style={btn}>Start Challenge</a>
    </main>
  );
}

const btn = {
  display:'block',
  margin:'20px auto',
  padding:'14px',
  width:'220px',
  background:'#38bdf8',
  borderRadius:'12px',
  color:'#000',
  textDecoration:'none',
  fontWeight:'bold'
};
