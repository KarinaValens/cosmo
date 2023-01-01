import Head from 'next/head'
import { useContext } from 'react';
import { AppContext } from '../components/context/AppContext';
import Basket from '../components/booking/Basket'
import Header from '../components/Header'
import Accommodation from '../components/booking/Accommodation';
import Tickets from '../components/booking/Tickets';
import Tents from '../components/booking/Tents';


export default function Home({spots}) {
//console.log(spots)
const {show, addToCart} = useContext(AppContext);

  return (
    <>
        <Head>
        <title>The Festival | Schedule</title>
          <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
          <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
        </Head> 
        <Header/>
        <div className="container">
        {show ? <Basket/> : true}
    <form>
        <Tickets />
        <Accommodation spots={spots}/>
        <Tents />
        <button onClick={addToCart}>Add to Basket</button>        
    </form>
    </div>    
    </>
  )
}

export async function getServerSideProps(){
  
    const res = await fetch("http://localhost:8080/available-spots");
    //const res = await fetch("https://rough-snowflake-4981.fly.dev/available-spots"); 
   
     const data = await res.json();
  
     //console.log(data)
   
     return{
         props: { 
          spots : data } 
     }
   }