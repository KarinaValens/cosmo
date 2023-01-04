import Head from 'next/head'
import { useContext, useRef, useState } from 'react';
import { AppContext } from '../components/context/AppContext';
import Basket from '../components/booking/Basket'
import Header from '../components/layout/Header'
import Accommodation from '../components/booking/Accommodation';
import Tickets from '../components/booking/Tickets';
import Tents from '../components/booking/Tents';


const url="localhost:8080/"
  //const url= "rough-snowflake-4981.fly.dev/"

export default function Home({spots}) {

const {show,  addToCart, showForm} = useContext(AppContext);


  return (
    <>
        <Head>
        <title>The Festival | Schedule</title>
          <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
          <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
        </Head> 

        <Header/>

        <div className="container">

        {show ? 
        
        <Basket/> :  
        
        <form>
            <Tickets />
            <Accommodation spots={spots}/>
            <Tents />
            <button onClick={addToCart}>Add to Basket</button>        
        </form> }
      
    </div>
    </>
  )
}

export async function getServerSideProps(){
  
    const res = await fetch(`http://${url}available-spots`);
   
     const data = await res.json();

     return{
         props: { 
          spots : data } 
     }
   }