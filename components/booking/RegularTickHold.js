import {useRef, useContext} from 'react'
import { AppContext } from '../context/AppContext';

function RegularTickHold() {
    
    
    const {tickets}= useContext(AppContext);
    
    const form=useRef();
    let i= 0;
    console.log(tickets.regular)


  return (
    <div>    <h3>Regular Ticket Holder Info</h3>

      {/* The Array(totalTickets) creates an array with totalTickets number of elements, and the 
  ...spreads the elements of this array into individual arguments for the map function. 
 */}
         {[...Array(tickets.regular)].map((i)=>(
         <div key={i++}>
         <label> <span>Fullname</span> 
         <input  type="text" name="fullname" id={i} placeholder="John Doe"/>
         </label>
         <label><span>email</span> 
         <input  type="email" name="email" id={i} placeholder="johndoe@mail.com"/>
         </label>
        </div>       
       ))}
            
</div>
  )
}

export default RegularTickHold