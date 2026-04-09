'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import blinkAnim from '../public/zuno-blink.json';

export default function ZunoCharacter({ mood="idle" }){

  const [pos,setPos]=useState({top:'50%',left:'50%'});

  useEffect(()=>{
    const interval=setInterval(()=>{
      const positions=[
        {top:'10%',left:'10%'},
        {top:'20%',left:'70%'},
        {top:'70%',left:'20%'},
        {top:'60%',left:'75%'}
      ];
      setPos(positions[Math.floor(Math.random()*positions.length)]);
    },3000);

    return()=>clearInterval(interval);
  },[]);

  return(
    <motion.div
      animate={{top:pos.top,left:pos.left}}
      transition={{type:'spring',stiffness:120}}
      style={{
        position:'absolute',
        width:120,
        height:100,
        borderRadius:'60% 40% 55% 45%',
        background:'linear-gradient(135deg,#7c3aed,#a78bfa)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Lottie animationData={blinkAnim} loop={true} style={{width:60}}/>
    </motion.div>
  )
}
