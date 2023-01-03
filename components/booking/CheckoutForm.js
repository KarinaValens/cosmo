import {useRef, useContext, useState} from 'react'
import { AppContext } from '../context/AppContext';


const url="localhost:8080/"
//const url= "rough-snowflake-4981.fly.dev/"

/* Sending the info-data to  supabse */



export default function CheckoutForm({id}) {

  const {totalTickets, tickets, checked}= useContext(AppContext);

  const form=useRef();
  let i= 0;

  function fullfillReservation(e){
    
  e.preventDefault()
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({id: id})
    };
    
    fetch(`http://${url}fullfill-reservation`, options)
    .then((res) => res.json())
    //.then((res) => console.log(res))
    .catch((err) => console.error(err));
    
    /*  Making the second request POST to supabase */

    const data={}
    //console.log(data)

    const tickets_guess=
    //creates an array of objects and push it into the tickets_guess const to itinerate in the post request
    Array.from(form.current.elements).map((element) => 
    ({ [element.name]: element.value }));
 
    data.regular_tickets= parseInt(tickets.regular),
    data.vip_tickets= parseInt(tickets.vip),
    data.tickets_guess= tickets_guess,
    data.camping_area= tickets.accommodation,
    data.tent2per= tickets.tents2per,
    data.tent3per= tickets.tents3per,
    data.green_camping= (checked ? true : false)
        
        const options2={
          method: 'POST',
          headers: {
            apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dXBmaGRmenBldXRzbnd3dnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMDgxMTIsImV4cCI6MTk4Njg4NDExMn0.BdXYKUMwc0jBPYDHPgW0CyTcpAUlZGBsZC_NcdyVs6Y',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dXBmaGRmenBldXRzbnd3dnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMDgxMTIsImV4cCI6MTk4Njg4NDExMn0.BdXYKUMwc0jBPYDHPgW0CyTcpAUlZGBsZC_NcdyVs6Y',
            'Content-Type': 'application/json',
            Prefer: 'return=representation'
          },
          body: JSON.stringify(data),
        }
  
  fetch ("https://uyupfhdfzpeutsnwwvra.supabase.co/rest/v1/booking_info", options2)    
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }


  /* The Array(totalTickets) creates an array with totalTickets number of elements, and the ... 
  spreads the elements of this array into individual arguments for the map function. */

 
  return (
    <>
    <h3>Ticket Holder Info</h3>
    <form ref={form}>
      <>

         {[...Array(totalTickets)].map((i)=>(
         <div key={i++}>
         <label> <span>Fullname</span> 
         <input  type="text" name="fullname" id={i} placeholder="John Doe"/>
         </label>
         <label><span>emain</span> 
         <input  type="email" name="email" id={i} placeholder="johndoe@mail.com"/>
         <label><span>emainkind of ticket</span> 
         <input  type="text" name="kind_ticket" id={i} placeholder="vip"/>
         </label>
         </label>
       </div>       
       ))}
       </>
      
    </form>
    <button name="button" onClick={fullfillReservation}>Continue to Payment</button>
    </>
  )
}

