import Header from '../../components/Header'
import Head from 'next/head'
import Filtering from '../../components/app/Filtering'
import Days from '../../components/app/Days'
import Midgard from '../../components/app/Midgard'
import Vanaheim from '../../components/app/Vanaheim'
import Jotunheim from '../../components/app/Jotunheim'
import Stages from '../../components/app/Stages'
import Acomodation from '../../components/app/Acomodation'
import Lineup from '../../components/app/Lineup'
import BandsCards from '../../components/app/BandsCards'
import TicketsDiv from '../../components/app/TicketsDiv'
import { useState } from 'react'


export default function Schedule({schedule, bands}) {

  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
   const [filter, setFilter] = useState("mon");
   const [search, setSearch] = useState("");
   const[ genre, setGenre]=useState("");

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
        <Filtering setSearch={setSearch} setGenre={setGenre}/>
        <Days schedule={schedule} setFilter={setFilter}/> 
        <Midgard schedule={schedule} filter={filter} search={search} bands={bands} genre={genre}/>
        <Vanaheim schedule={schedule} filter={filter} search={search}/>
        <Jotunheim schedule={schedule} filter={filter} search={search}/>
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