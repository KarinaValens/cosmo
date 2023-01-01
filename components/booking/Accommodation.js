import { useContext, useEffect, useState} from "react";
import { AppContext } from "../context/AppContext";




export default function Accommodation({spots}) {

  const {handleChange , checkbox, totalTickets}=useContext(AppContext);

  return (
    <div>   
    <h3>Camping Area:</h3>
    
        <label key="index">Svartheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Svartheim" 
                   type="radio"
                   disabled={spots[0].available < totalTickets}
                   />
        </label>

        <label>Nilfheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Nilfheim"
                   type="radio"
                   disabled={spots[1].available < totalTickets}

                    />
        </label>

        <label>Helheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Helheim" 
                   type="radio"
                   disabled={spots[2].available < totalTickets}

                  />
        </label>

        <label>Muspelheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Muspelheim" 
                   type="radio"
                   disabled={spots[3].available < totalTickets}

                   />
            </label>

        <label>Alfheim: 
            <input onChange={handleChange} 
            name="accommodation" 
            value="Alfheim" 
            type="radio"
            disabled={spots[4].available < totalTickets}
            />
        </label>  

        <label>Green Camping: 
        <input onChange={handleChange} 
        name="greenCamping" 
        value=" "  
        type="checkbox"
        ref={checkbox}
        />
      </label>      
        
    </div>
  )
}

