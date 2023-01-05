import { useContext} from "react";
import { AppContext } from "../context/AppContext";




export default function Accommodation({spots}) {

  const {handleChange , checkbox, checked, setChecket, totalTickets}=useContext(AppContext);
 
  
  return (
    
    <div className="container">  
              <h3>Camping Area:</h3>

    <div className="grid">    
         
        <label className="card border1">Svartheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[0].area} 
                   type="radio"
                   disabled={spots[0].available < totalTickets}
                   />
        </label>

        <label className="card border1">Nilfheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[1].area}
                   type="radio"
                   disabled={spots[1].available < totalTickets}

                    />
        </label>

        

        
        <label className="card border1">Helheim:            
            <input onChange={handleChange} 
                   required
                   name="accommodation" 
                   value={spots[2].area} 
                   type="radio"
                   disabled={spots[2].available < totalTickets}
                  />
        </label>

        <label className="card border1">Muspelheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value={spots[3].area} 
                   type="radio"
                   disabled={spots[3].available < totalTickets}
                   />
            </label>

        <label className="card border1">Alfheim: 
            <input onChange={handleChange} 
            name="accommodation" 
            value={spots[4].area} 
            type="radio"
            disabled={spots[4].available < totalTickets}
            />
        </label>           
        
    </div>
    <label className="card acomodation">Green Camping: 
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

