import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";



export default function Tickets() {

  const {handleChange, totalTickets, regularAmount, vipAmount}=useContext(AppContext)
  
  return (
    <div>        
    <label>Regular Ticket: 
        <input onChange={handleChange} 
        name="regular" 
        type="number" 
        min="1" 
        max="15" 
        placeholder="1"/>
        <output><span>{regularAmount}</span></output>
    </label>

    <label>VIP Ticket: 
        <input onChange={handleChange} 
        name="vip" 
        type="number" 
        min="1" max="15" 
        placeholder="1"/>
        <output><span>{vipAmount}</span></output>
    </label>  
    
    <p>Total tickets: {totalTickets >= 0 ? totalTickets : " "}</p>
</div>
  )
}

