import React, { useEffect, useContext, useRef} from 'react'
import { AppContext } from '../context/AppContext'

const formatTime= (time)=>{
  let minutes  = Math.floor(time / 60)
  let seconds  = Math.floor(time - minutes * 60)

  if(minutes <= 10) minutes ="0" + minutes;
  if(seconds <= 10) seconds ="0" + minutes;

  return minutes + ":" + seconds
}

export default function Countdown() {

const {countdown, setCountdown} = useContext(AppContext)


const timerId = useRef()

useEffect(()=>{ 
     timerId.current=setInterval(() => {
        setCountdown(prev => prev -1)
     }, 1000);

     return ( )=> clearInterval(timerId.current)

},[setCountdown])

useEffect(()=> {

if (countdown <= 0 ){
    clearInterval(timerId.current)
    alert("Your reservation has expired")
}
},[countdown])

console.log("countdown",countdown)

  return (
    <h3 className='accent3'>Your reservation expires in <span className='accent2'>{formatTime(countdown)}s</span> </h3>
  )
}

 