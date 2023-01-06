import { useContext} from "react";
import { AppContext } from "../context/AppContext";



export default function Tickets() {

  const {handleChange, totalTickets, tickets, regularAmount, vipAmount, regularPrice, vipPrice}=useContext(AppContext)
  
  return (
    <div className="tickets-div">
          <h3>Tickets:</h3>
    <div className="tickets-container">
    <label>
    <span>Regular : </span>
        <input className="input" onChange={handleChange} 
        name="regular" 
        type="number" 
        min= {tickets.vip <= 0 ? 1 : 0}
        max="10" 
        maxLength={3} 
        placeholder="0"/>
        <span> x ${regularPrice}</span>
        <output>
          <span> = ${regularAmount}</span>
        </output>
    </label>
<div>
    <span>  If your are looking for the bigwig experience, our VIP ticket is for you! Enjoy extra services as VIP
     
     <ul>
             <li>Exlucive VIP entrance & exit points</li>
             <li>Area with unobstructed view close to the stages</li> 
             <li>Reserved VIP zones and tables </li>
             <li>Special Bar services. And much more</li>            
             </ul>
    </span>
    <label>
    <span>VIP: </span>
   
        <input className="input" onChange={handleChange} 
        name="vip" 
        type="number" 
        min= {tickets.regular <= 0 ? 1 : 0}
        max="10" 
        maxLength={3} 
        placeholder="0"/>
        <span> x ${vipPrice}</span>
        <output>
          <span> = ${vipAmount}</span>
        </output>
    </label> 
    </div>
    </div>
    <h4>Total Tickets: {totalTickets >= 0 ? totalTickets : " "}</h4>

</div>
  )
}

