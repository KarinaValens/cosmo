import Head from 'next/head'
import Days from '../components/Days'
import Header from '../components/Header'
import Stages from '../components/Stages'
import Filtering from '../components/Filtering'
import Acomodation from '../components/Acomodation'
import Lineup from '../components/Lineup'
import BandsCards from '../components/BandsCards'
import { useState, useEffect } from 'react'
import TicketsDiv from '../components/TicketsDiv'
import Midgard from '../components/Midgard'
import Vanaheim from '../components/Vanaheim'
import Jotunheim from '../components/Jotunheim'

export default function Home({schedule, bands}) {

  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
   const [filter, setFilter] = useState("mon");

  return (
    <>
     <Header />

    <div className="container">
      <Head>
      <title>The Festival | Schedule</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
      </Head>       
      <main className='main'>
        <Filtering/>
        <Days schedule={schedule} setFilter={setFilter}/> 
        <Midgard schedule={schedule} filter={filter}/>
        <Vanaheim schedule={schedule} filter={filter}/>
        <Jotunheim schedule={schedule} filter={filter}/>
        <Stages/>
        <Acomodation/>
        <Days setFilter={setFilter}/>
        <Lineup bands={bands} schedule={schedule} filter={filter}/>
        <BandsCards bands={bands}/>
        <TicketsDiv/>
                  
      </main>
    </div>
    </>
  )
}



export async function getServerSideProps(){
const [scheduleRes, bandsRes] = await Promise.all([
  fetch(`http://localhost:8080/schedule`),
  //fetch("https://rough-snowflake-4981.fly.dev/schedule"), //karina URL:  (just in case)

  fetch(`http://localhost:8080/bands#`)
  //fetch("https://rough-snowflake-4981.fly.dev/bands") //karina URL:  (just in case)

]);
const [schedule, bands]= await Promise.all([
  scheduleRes.json(),
  bandsRes.json()
])

return { props:{schedule, bands}}

}