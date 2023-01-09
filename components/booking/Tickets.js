import { useContext} from "react";
import { AppContext } from "../context/AppContext";



export default function Tickets() {

  const {handleChange, totalTickets, tickets, regularAmount, vipAmount, regularPrice, vipPrice}=useContext(AppContext)
  
  return (

    <div className="tickets-div">
          <h3>Tickets:</h3>
    <div className="tickets-container">

    <div>
    <label>
    <span>REG : </span>
        <input className="input" onChange={handleChange} 
        name="regular" 
        type="number" 
        min= {tickets.vip <= 0 ? 1 : 0}
        required= {tickets.vip <= 0 ? true : false}
        max="10" 
        maxLength={3} 
        placeholder="0"/>
        <span> x ${regularPrice}</span>
    </label>
        <output>
          <span> = ${regularAmount}</span>
        </output>
        <ul>
        <li>5 different camping areas to choose</li>
        <li>3 stages with music 24/7 </li>
        <li>The electronic actors of the moment</li>
        <li>and much more</li>
        </ul>
    </div>
    <div>  
    <label>
      <span>VIP: </span>
   
        <input className="input" onChange={handleChange} 
        name="vip" 
        type="number" 
        min= {tickets.regular <= 0 ? 1 : 0}
        required= {tickets.regular <= 0 ? true : false}
        max="10" 
        maxLength={3} 
        placeholder="0"/>
        <span> x ${vipPrice}</span>
    </label> 
        <output>
          <span> = ${vipAmount}</span>
        </output>
        <ul>
        <li>Exclusive VIP entrance & exit points</li>
        <li>Area with unobstructed view close to the stages </li>
        <li>Special Bar services</li>
        <li>and much more</li>
          
        </ul>
    </div>
    </div>
   
    <h4>Total Tickets: {totalTickets >= 0 ? totalTickets : " "}</h4>

</div>
  )
}

