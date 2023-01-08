import Link from 'next/link'
import React from 'react'

export default function TicketsDiv() {
  return (
    <>
    <div className='flex-container '>
        <div className='tickets-div'>
            <p className='regular'>Regular Pass</p>
            <p className='vip'>VIP Pass</p>
        </div>

        <div className='tickets-info'>
            <h2>Tickets</h2>
            <h4 className='accent1'>WHAT DO YOU NEED TO KNOW</h4>
             <p>Cosmo Festival is one of the most popular music festivals in Europe. Every year the event gathers the best artists and biggest DJs in electronic music.
            This in an event that never ends, with music 24/7  and vibes of the greatests faces with the best electronic music in our 3 stages.</p>
             <p>Cosmo Festival is an event for 18 and older.  Your name is going to be printed in the ticket so your name should coincide with your name on your ID.</p>

           <Link className='button-link border2 accent1' href={"https://cosmo-festival-completed.netlify.app/schedule"}>BOOK NOW</Link>
    </div>
    </div>
    </>
  )
}
