
export default  function Days({ setFilter}) {
  //if(!schedule){return null}//When the component was first loaded, schedule.midgard does not exist, so we return nothing from the component, when it does we destructure. better?
  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
// after changing the setFinter to the index and passing it as a props the 2 lines of code are not necesary


  return (
<>
    <div className="grid">
    <button type="button" onClick={()=>setFilter("mon")} className="button border0 accent1 active">Monday</button>
    <button type="button" onClick={()=>setFilter("tue")} className="button border0 accent1">Thuesday</button>
    <button type="button" onClick={()=>setFilter("wed")} className="button border0 accent1">Wednesday</button>
    <button type="button" onClick={()=>setFilter("thu")} className="button border0 accent1">Thursday</button>
    <button type="button" onClick={()=>setFilter("fri")} className="button border0 accent1">Friday</button>
    <button type="button" onClick={()=>setFilter("sat")} className="button border0 accent1">Saturaday</button>
    <button type="button" onClick={()=>setFilter("sun")} className="button border0 accent1">Sunday</button>
    </div>
    </>)
  
}

