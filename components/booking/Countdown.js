import React, { useEffect, useContext, useRef} from 'react'
import { AppContext } from '../context/AppContext'



export default function Countdown({seconds}) {

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
    <h3 className='accent3'>Your reservation expires in <span className='accent2'>{countdown}s</span> </h3>
  )
}

 