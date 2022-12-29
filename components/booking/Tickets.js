
export default function Tickets({handleChange}) {
  return (
    <div>        
    <label>Regular Ticket: 
        <input onChange={handleChange} 
        name="regular" 
        type="number" 
        min="1" 
        max="15" 
        placeholder="1"/>
    <p>799,-</p>
    <output name="x" forhtml="regular regtick"/>
    </label>

    <label>VIP Ticket: 
        <input onChange={handleChange} 
        name="vip" 
        type="number" 
        min="1" max="15" 
        placeholder="1"/>
    <p>1299,-</p>
    </label>  
    
</div>
  )
}

