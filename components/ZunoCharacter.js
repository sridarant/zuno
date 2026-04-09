export default function ZunoCharacter({ mood="idle" }){

  const eye = {
    width:18,
    height:22,
    background:'#0f172a',
    borderRadius:'50%',
    margin:'0 6px'
  };

  return(
    <div style={{
      width:160,
      height:130,
      borderRadius:'60% 40% 55% 45%',
      background:'linear-gradient(135deg,#7c3aed,#a78bfa)',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      margin:'20px auto',
      boxShadow:'0 20px 60px rgba(124,58,237,0.6)',
      animation:'float 3s ease-in-out infinite'
    }}>

      <div style={{display:'flex',marginBottom:8}}>
        <div style={eye}></div>
        <div style={eye}></div>
      </div>

      {mood==="correct" && <div style={{width:30,height:4,background:'#0f172a',borderRadius:4,transform:'rotate(10deg)'}}></div>}
      {mood==="wrong" && <div style={{width:30,height:4,background:'#0f172a',borderRadius:4}}></div>}

    </div>
  )
}
