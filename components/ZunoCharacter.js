'use client';

import { motion } from 'framer-motion';

export default function ZunoCharacter({ mood="idle" }){

const eye={
width:18,height:12,background:'#0f172a',
borderRadius:'50%',margin:'0 6px'
};

return(
<motion.div
initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}
transition={{type:'spring',stiffness:120}}
style={{
width:120,
height:100,
borderRadius:'60% 40% 55% 45%',
background:'linear-gradient(135deg,#7c3aed,#a78bfa)',
display:'flex',
alignItems:'center',
justifyContent:'center',
margin:'0 auto',
marginBottom:20
}}>
<div style={{display:'flex'}}>
<div style={eye}></div>
<div style={eye}></div>
</div>
</motion.div>
);
}