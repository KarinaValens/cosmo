import { useContext} from "react";
import { AppContext } from "../context/AppContext";




export default function Accommodation({spots}) {

  const {handleChange , checkbox, checked, setChecket, totalTickets}=useContext(AppContext);
 
  
  return (
    <div>   
    <h3>Camping Area:</h3>
    
        <label key="index">Svartheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[0].area} 
                   type="radio"
                   disabled={spots[0].available < totalTickets}
                   />
        </label>

        <label>Nilfheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[1].area}
                   type="radio"
                   disabled={spots[1].available < totalTickets}

                    />
        </label>

        <label>Helheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[2].area} 
                   type="radio"
                   disabled={spots[2].available < totalTickets}

                  />
        </label>

        <label>Muspelheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[3].area} 
                   type="radio"
                   disabled={spots[3].available < totalTickets}

                   />
            </label>

        <label>Alfheim: 
            <input onChange={handleChange} 
            name="accommodation" 
            value={spots[4].area} 
            type="radio"
            disabled={spots[4].available < totalTickets}
            />
        </label>  

        <label>Green Camping: 
        <input onChange={handleChange} 
        onClick={()=>{setChecket(!checked)}}
        name="greenCamping" 
        value=" "  
        type="checkbox"
        ref={checkbox}
        checked={checked}
        />
      </label>      
        
    </div>
  )
}

