import Header from '../../components/layout/Header'
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
import Basket from '../../components/booking/Basket'
import { useContext} from "react";
import { AppContext } from '../../components/context/AppContext' 

//const url="localhost:8080/"
const url= "rough-snowflake-4981.fly.dev/"


export default function Schedule({schedule, bands}) {
  
  const {show}=useContext(AppContext)

  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
   const [filter, setFilter] = useState("mon");
   const [search, setSearch] = useState("");
   const[ genre, setGenre]=useState("");

  return (
    <>
  <Head>
      <title>The Festival | Schedule</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
      </Head>  
      <Header />
    <div className="container">
     

      {show ? <Basket/> : true}     
     
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
  fetch(`http://${url}schedule`),

  fetch(`http://${url}bands#`)

]);
const [schedule, bands]= await Promise.all([
  scheduleRes.json(),
  bandsRes.json()
])

return { props:{schedule, bands}}

}