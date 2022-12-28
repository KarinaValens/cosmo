
export default function Vanaheim({schedule, filter, search}) {

    const stageName = Object.keys(schedule);
  
  const vanaheim = schedule.Vanaheim[filter];//dynamic [] gives me every data after Vanaheim in this case the obj days with their object shows
  
    return (
      <>
        <h3 className="accent2">{stageName[1]}</h3>
         <div className="show-table">  
          {vanaheim.map((show=>{
          //getting the data for just Monday (one day) destructuring object inside objects
          if(search===" ") {
            return <ul key={`${Math.random()} + ${Date.now()}`}>
            <li className="accent2">Act: {show.act}</li> 
            <li>starts: {show.start}</li> 
            <li>ends:{show.end}</li> 
        </ul>
          } else if(show.act.includes(search)){
            return <ul key={`${Math.random()} + ${Date.now()}`}>
            <li className="accent2">Act: {show.act}</li> 
            <li>starts: {show.start}</li> 
            <li>ends:{show.end}</li>  
          </ul> 
          } 
          
          }))}</div> 
   
      </>
    )
  }
  
   