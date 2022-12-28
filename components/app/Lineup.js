import Link from 'next/link'

function Lineup({bands, filter, schedule}) {
  //this /bands.map makes dynamic links to open the bands pages
//logic if the bands are playing on the filter day then print 
   //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
   const midgard = schedule.Midgard[filter];//dynamic [] gives me every data after Midgard in this case the obj days with their object shows
   const jotunheim = schedule.Jotunheim[filter];  
   const vanaheim = schedule.Vanaheim[filter];

   return (
    <>
    <h2>Line up</h2>
    <ul className='grid bands' >
      {midgard.map((band) => {
        if(band.act!=="break"){
         return  <Link key={band.act + Date.now()} href={`bands/${band.act}`}>
            <li>- {band.act}</li>
          </Link>}
})}
      {jotunheim.map((band) => {
        if(band.act!=="break"){
          return <Link key={band.act + Date.now()} href={`bands/${band.act}`}>
            <li>- {band.act}</li>
          </Link>}
})}
      {vanaheim.map((band) => {
        if(band.act!=="break"){
          return <Link key={band.act + Date.now()} href={`bands/${band.act}`}>
            <li>- {band.act}</li>
          </Link>}
})}
        </ul>

    </>
  )
}

export default Lineup