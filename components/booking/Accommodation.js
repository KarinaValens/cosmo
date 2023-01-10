import { useContext} from "react";
import { AppContext } from "../context/AppContext";




export default function Accommodation({spots}) {

  const {handleChange , checkbox, checked, setChecket, totalTickets}=useContext(AppContext);

  
  return (
    
    <div className="container">  
              <h3>Camping Area:</h3>

    <div className="grid">    
         
        <label className={`card border1 ${spots[0].available < totalTickets ? 'disabled' : ''}` }  
>Svartheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[0].area} 
                   type="radio"
                   disabled={spots[0].available < totalTickets}
                   />
        </label>

        <label className={`card border1 ${spots[1].available < totalTickets ? 'disabled' : ''}`}>Nilfheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[1].area}
                   type="radio"
                   disabled={spots[1].available < totalTickets}
                    />
        </label>
     
       
       <label className={`card border1 ${spots[2].available < totalTickets ? 'disabled' : ''}`}>Helheim:            
            <input onChange={handleChange} 
                   required
                   name="accommodation" 
                   value={spots[2].area} 
                   type="radio"
                   disabled={spots[2].available < totalTickets}
                  />
        </label>

        <label className={`card border1 ${spots[3].available < totalTickets ? 'disabled' : ''}`}>Muspelheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[3].area} 
                   type="radio"
                   disabled={spots[3].available < totalTickets}
                   />
            </label>

        <label className={`card border1 ${spots[4].available < totalTickets ? 'disabled' : ''}`}>Alfheim: 
            <input onChange={handleChange} 
            name="accommodation" 
            value={spots[4].area} 
            type="radio"
            disabled={spots[4].available < totalTickets}
            />
        </label>           
        
    </div>
    <div className="green-container">
      <h3>Green Camping Option</h3>
    
     <label className="card acomodation green-camping">Green Camping: 
        <input onChange={handleChange} 
        onClick={()=>{setChecket(!checked)}}
        name="greenCamping" 
        value=" "  
        type="checkbox"
        ref={checkbox}
        checked={checked}
        />
      </label> 
      <ul>
      <li>Give you ecological food options.</li>
      <li>Contributes with our effort in water conservation.</li> 
      <li>Reduce the waste using reusable utensils like cutlery, bottles, plates, etc.</li>
      <li>Just for 249,- more.</li>
      </ul>
      </div>
    </div>
  )
}

