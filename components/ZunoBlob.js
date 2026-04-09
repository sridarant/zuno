export default function ZunoBlob({ face="😏" }){
  return(
    <div style={{
      width:140,
      height:120,
      borderRadius:'60% 40% 55% 45%',
      background:'linear-gradient(135deg,#7c3aed,#a78bfa)',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      fontSize:40,
      margin:'20px auto',
      boxShadow:'0 20px 40px rgba(124,58,237,0.4)'
    }}>
      {face}
    </div>
  )
}
