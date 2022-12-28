
export default function Midgard({schedule , filter, search, genre, bands}) {

  const stageName = Object.keys(schedule);
  //the following line is destructuring nested object and it gives me back the content from Midgar
  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
  const midgard = schedule.Midgard[filter];//dynamic [] gives me every data after Midgard in this case the obj days with their object shows
  
  //filtering by genre I am looping into the bands with find this is a feature in development
  const gen = bands.find(band=>band.genre === genre)

  return (
    <>    
      <h3 className="accent2">{stageName[0]}</h3>
       <div className="show-table">  
            {midgard.map((show=>{
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

           }))}
      
      </div> 
         
      </>
  )
}

 