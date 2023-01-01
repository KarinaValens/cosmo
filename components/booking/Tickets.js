import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";



export default function Tickets() {

  const {handleChange, regular}=useContext(AppContext)


  return (
    <div>        
    <label>Regular Ticket: 
        <input onChange={handleChange} 
        name="regular" 
        type="number" 
        min="1" 
        max="15" 
        placeholder="1"/>
    <output>{regular}</output>
    </label>

    <label>VIP Ticket: 
        <input onChange={handleChange} 
        name="vip" 
        type="number" 
        min="1" max="15" 
        placeholder="1"/>
    <p>1299,-</p>
    </label>  
    
</div>
  )
}

