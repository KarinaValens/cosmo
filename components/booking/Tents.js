import { useContext} from "react";
import { AppContext } from "../context/AppContext";

function Tents() {

  const {handleChange, tents2perPrice,tent2Amount, tents3perPrice, tent3Amount}=useContext(AppContext)


  return (
    <div>
      <h3>Help setting tents</h3>
        <label> 2 pax: 
            <input type="number"
            onChange={handleChange}
            name="tents2per" 
            min= "0"
            max="10" 
            /* maxLength={3} */
            placeholder="0"/>
            <span> x ${tents2perPrice}</span>
            <output>
            <span> = ${tent2Amount}</span>
            </output>
        </label>
    

    <label> Tent 3 pax: 
        <input   type="number"
        onChange={handleChange}
        name="tents3per"
        min= "0"
        max="10" 
        /* maxLength={3} */
        placeholder="0"/>
        <span> x ${tents3perPrice}</span>
            <output>
            <span> = ${tent3Amount}</span>
            </output>
    </label>
    </div>
  )
}

export default Tents