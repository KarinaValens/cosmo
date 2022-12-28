
function Tents({handleChange}) {
  return (
    <div>
        <label>Help setting 2 person tent: 
            <input type="number"
            onChange={handleChange}
            name="tents2per" 
            min="1" 
            max="15" 
            placeholder="0"/>
        </label>
    <p>299,-</p>

    <label>Help setting 3 person tent: 
        <input   type="number"
        onChange={handleChange}
        name="tents3per"
        min="1" max="15" 
        placeholder="0"/>
    </label>
    <p>399,-</p></div>
  )
}

export default Tents