import Link from 'next/link';
import { useState, useContext } from 'react';
import Image from 'next/image';
/* import { AppContext } from '../context/AppContext';
 */

//const url="localhost:8080/"
const url= "rough-snowflake-4981.fly.dev/"


export default function BandsCards ({bands}) {
   /*  const router = useRouter();
    const {name} = router.query
    const band = bands.find(band => band.name === name) */
    // I need to print the correct date and time of the band paying
    
/*  const {url}=useContext(AppContext)
 */
    const [index, setIndex]=useState(0);
   
    return (
     
    <div className='carousel'>
         <button className='button bandbutton prev accent2 border2' onClick={()=>setIndex(count=> count - 1)}>prev</button>
         <button className='button bandbutton next accent2 border2' onClick={()=>setIndex(count=> count + 1)}>next</button>

      <div className='bands-wraper' style={{transform:`translateX(-${index * 50}%)`}}>

        <div className='bands-card'  >
          {bands.map((band) => (
            <div key={`${Math.random()} + ${Date.now()}`} className="single-card">  

            <Image src={`${band.logo.includes("https://") ? band.logo : `http://` + url + `logos/` + band.logo}`}   alt={band.name} width={"230"} height={"250"} priority sizes="(max-width: 700px) 100vw, 700px" /> 
        
            <div className='bandsInfo'>
            <div>
            <p className='accent1'>{band.name}</p>
            <p className='accent1'>{band.genre}</p>            
            <Link  href={`bands/${band.name}`} className='button accent1 border1 bandlink'>LEARN MORE
            </Link>
            </div>

            <div>
            <ul>
            <li className='neutral2'>Monday</li>
            <li className='neutral2'>00:00</li>
            <li className='accent7'>MIDGARD STAGE</li>
            </ul>
            </div>
            </div>
           
          </div>
      ))}
       
        </div>
      </div>
    </div>
    
  )
}

