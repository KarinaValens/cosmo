import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

function Home() {
  return (
    <>
      <Header />
    <div className="container">
        <Head>
        <title>The Festival | Schedule</title>
          <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
          <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
        </Head> 
    </div>
    
    </>
  )
}

export default Home