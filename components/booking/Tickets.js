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
   
    <h4>Total Tickets: {totalTickets >= 0 ? totalTickets : " "}</h4>

</div>
  )
}

