export default function ZunoCharacter({ mood="idle" }){

  const eye = {
    width:20,
    height:16,
    background:'#0f172a',
    borderRadius:'50%',
    margin:'0 6px',
    animation:'blink 4s infinite'
  };

  let anim = 'float 3s ease-in-out infinite';
  if(mood==="wrong") anim = 'shake 0.3s';

  return(
    <div style={{
      width:170,
      height:130,
      borderRadius:'60% 40% 55% 45%',
      background:'linear-gradient(135deg,#7c3aed,#a78bfa)',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      margin:'20px auto',
      animation:anim,
      boxShadow: mood==="correct"
        ? '0 0 40px rgba(124,58,237,0.8)'
        : '0 20px 50px rgba(124,58,237,0.5)'
    }}>

      <div style={{display:'flex',marginBottom:6}}>
        <div style={eye}></div>
        <div style={eye}></div>
      </div>

      {mood==="correct" && <div style={{width:28,height:4,background:'#0f172a',borderRadius:4,transform:'rotate(10deg)'}}></div>}
      {mood==="wrong" && <div style={{width:28,height:4,background:'#0f172a',borderRadius:4}}></div>}

    </div>
  )
}
