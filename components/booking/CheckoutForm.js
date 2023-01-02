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
    </form>
    </>
  )
}

