import Head from 'next/head'
import Basket from '../components/booking/Basket'
import Header from '../components/Header'
import { useState } from 'react';
import Accommodation from '../components/booking/Accommodation';
import Tickets from '../components/booking/Tickets';
import Tents from '../components/booking/Tents';


export default function Home() {

/* ------- // Booking // ------- */
const [tickets, setTickets]=useState({
    regular:"",
    vip:"",
    greenCamping:"",
    accommodation:"",
    tents2per:"",
    tents3per:"",
});

const handleChange = (e) => {
const name = e.target.name
const value = e.target.value
setTickets((previous)=>{
    return{...previous, [name]: value}
})
}
console.log(tickets)

/* -------- //  */

  return (
    <>
      <Header />
        <div className="container">
        <Head>
        <title>The Festival | Schedule</title>
          <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
          <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
        </Head> 
    
    <form>
        <Tickets handleChange={handleChange}/>
        <Accommodation handleChange={handleChange}/>
        <Tents handleChange={handleChange}/>
        <button>Add to Basket</button>        
    </form>
    
   
    <Basket/>
    </div>
    
    </>
  )
}

