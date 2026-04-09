export default function Logo(){
  return(
    <div style={{
      fontSize:44,
      fontWeight:900,
      letterSpacing:2,
      transform:'skewX(-5deg)',
      background:'linear-gradient(90deg,#7c3aed,#c4b5fd)',
      WebkitBackgroundClip:'text',
      color:'transparent',
      position:'relative'
    }}>
      Zun<span style={{position:'relative'}}>o
        <span style={{
          position:'absolute',
          top:-8,
          right:-10,
          width:6,
          height:6,
          background:'#0f172a',
          borderRadius:'50%'
        }}></span>
      </span>
    </div>
  )
}
