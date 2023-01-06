import { useContext} from "react";
import { AppContext } from "../context/AppContext";

function Tents() {

  const {handleChange, tents2perPrice,tent2Amount, tents3perPrice, tent3Amount}=useContext(AppContext)


  return (
    <>    
    
      <h3>Help setting tents</h3>
    <div className="tents">
        <label> 
        <span> for 2  pax $ {tents2perPrice} each </span>
            <input className="accent2" type="number"
            onChange={handleChange}
            name="tents2per" 
            min= "0"
            max="10" 
            placeholder="0"/>
            
            <output>
            = $ {tent2Amount}
            </output>            
        </label>
    

        <label>for 3 pax
        <span> $ {tents3perPrice} each </span>
        <input className="accent2" type="number"
        onChange={handleChange}
        name="tents3per"
        min= "0"
        max="10" 
        placeholder="0"/>
        
            <output>
            <span> = $ {tent3Amount}</span>
            </output>
            
    </label>
    </div>
    </>

  )
}

export default Tents