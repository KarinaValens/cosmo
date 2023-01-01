import { useContext} from "react";
import { AppContext } from "../context/AppContext";




export default function Accommodation({spots}) {

  const {handleChange , checkbox, cart}=useContext(AppContext);
  //console.log(spots[0].available<=0)

/*   let totalTickets = 0;

cart.map((item)=>{
  totalTickets+=item.regular + item.vip}
  ) */
  


  return (
    <div>   
    <h3>Camping Area:</h3>
        <label>Svartheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Svartheim" 
                   type="radio"
                   disabled={spots[0].available <= 0}
                   />
        </label>

        <label>Nilfheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Nilfheim"
                   type="radio"
                   disabled={spots[1].available <= 0}
                    />
        </label>

        <label>Helheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Helheim" 
                   type="radio"
                   disabled={spots[2].available <= 0}
                  />
        </label>

        <label>Muspelheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Muspelheim" 
                   type="radio"
                   disabled={spots[3].available <= 0}
                   />
            </label>

        <label>Alfheim: 
            <input onChange={handleChange} 
            name="accommodation" 
            value="Alfheim" 
            type="radio"
            disabled={spots[4].available <= 0}
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

