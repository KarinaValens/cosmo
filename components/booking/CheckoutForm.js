import {useRef, useContext, useState} from 'react'
import { AppContext } from '../context/AppContext';

export default function CheckoutForm() {

  const {totalTickets}= useContext(AppContext);

  
  const [inputField, setInputField]= useState([
    {fullname:"", email:""}
  ])

  const form=useRef();
  let i= 0;

  /* The Array(totalTickets) creates an array with totalTickets number of elements, and the ... 
  spreads the elements of this array into individual arguments for the map function. */
  return (
    <>
    <h3>Ticket Holder Info</h3>
    <form ref={form}>
      <>
         {[...Array(totalTickets)].map((i)=>(
         <div key={i++}>
         <label> Fullname
         <input type="text" name="fullname" id={i} placehodelr="John Doe"/>
         </label>
         <label> email
         <input type="email" name="email" id={i} placehodelr="johndoe@mail.com"/>
         </label>
       </div>       
       ))}
       </>
       <h3>Payment Info</h3>

       <input type="text" required maxLength="16"  placeholder="number" name="card_num" id="number"/>
       <input type="text" maxLength="2" placeholder="exp-month" name="month" id="date"/>
       <input type="text" maxLength="2" placeholder="exp-year " name="exp_year" id="year"/>
       <input type="text" maxLength="3" placeholder="segurity-number " name="svc" id="svc"/>
       <button name="button">Summit</button>
    </form>
    </>
  )
}

