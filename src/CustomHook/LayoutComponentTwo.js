import React, { useEffect, useState } from 'react'

export default function LayoutComponentTwo() {
    const [onSmallScreen, setOnSmallScreen]=useState(false);
    const checkScreenSize = ()=>{
        setOnSmallScreen(window.innerWidth < 786);
    }
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener('resize',checkScreenSize);
        return ()=> window.removeEventListener('resize',checkScreenSize);
    },[]);
  return (
    <div className={onSmallScreen?'small':'large'}>
        <h2>This is an another component</h2>
    </div>
  )
}
