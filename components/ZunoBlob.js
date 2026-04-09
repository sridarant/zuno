export default function ZunoBlob({ mood="idle" }){

  const eyeStyle = {
    width:14,
    height:18,
    background:'#0f172a',
    borderRadius:'50%',
    margin:'0 6px'
  };

  return(
    <div style={{
      width:150,
      height:120,
      borderRadius:'60% 40% 55% 45%',
      background:'linear-gradient(135deg,#7c3aed,#a78bfa)',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      margin:'20px auto',
      boxShadow:'0 20px 40px rgba(124,58,237,0.4)',
      transition:'0.3s'
    }}>

      <div style={{display:'flex',marginBottom:6}}>
        <div style={eyeStyle}></div>
        <div style={eyeStyle}></div>
      </div>

      {mood==="wrong" && <div style={{width:20,height:3,background:'#0f172a'}}></div>}
      {mood==="correct" && <div style={{width:20,height:3,background:'#0f172a',transform:'rotate(10deg)'}}></div>}

    </div>
  )
}
