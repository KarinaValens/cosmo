import { useState} from "react"




export default function Accommodation({handleChange , checkbox}) {

  return (
    <div>
    <h3>Camping Area:</h3>
        <label>Svartheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Svartheim" 
                   type="radio"/>
        </label>

        <label>Nilfheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Nilfheim"
                   type="radio"/>
        </label>

        <label>Helheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Helheim" 
                   type="radio"
                  />
        </label>

        <label>Muspelheim: 
            <input onChange={handleChange} 
                   name="accommodation" 
                   value="Muspelheim" 
                   type="radio"/>
            </label>

        <label>Alfheim: 
            <input onChange={handleChange} 
            name="accommodation" 
            value="Alfheim" 
            type="radio"/>
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

