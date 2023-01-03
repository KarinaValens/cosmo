import {useRef, useContext} from 'react'
import { AppContext } from '../context/AppContext';


const url="localhost:8080/"
//const url= "rough-snowflake-4981.fly.dev/"


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
    .catch((err) => console.error(err));
    
    /*  Making the second request POST to supabase */

    const data={}
  
    const tickets_guess = Array.from(form.current.elements).reduce((arr, element, i) => {
      if (i % 3 === 0) {
        arr.push({
          fullname: form.current.elements[i].value,
          email: form.current.elements[i + 1].value,
          kind_ticket: form.current.elements[i + 2].value,
        });
      }
      return arr;
    }, []);
    
    //here the reduce function creates an array of objects from the form element.
    //the reduce() itinerates over the form elements and accumulates a result in an array.
    //the result is initialized to an empty array and the function is passed the current element and its index as argument of each intineration
    // If the current element is the first element in a set of three (if it is multiple of 3 then the function creates an object) 
    
 
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



 
  return (
    <>
    <h3>Ticket Holder Info</h3>
    <form ref={form}>
      <>
      
      {/* The Array(totalTickets) creates an array with totalTickets number of elements, and the 
  ...spreads the elements of this array into individual arguments for the map function. 
 */}
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

