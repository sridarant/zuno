export default function Home(){
  return(
    <main style={{padding:30,textAlign:'center'}}>
      <h1 style={{fontSize:42}}>⚡ Zuno</h1>
      <p style={{opacity:0.7}}>Think. Solve. Win 😏</p>

      <div style={{marginTop:30}}>
        <a href="/practice" style={btn}>Practice</a>
        <a href="/dashboard" style={btn}>Dashboard</a>
      </div>
    </main>
  );
}

const btn = {
  display:'block',
  margin:'10px auto',
  padding:'14px',
  width:'200px',
  background:'#38bdf8',
  borderRadius:'12px',
  color:'#000',
  textDecoration:'none'
};
