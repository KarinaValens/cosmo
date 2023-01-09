import {useRef, useContext, useState} from 'react'
import { AppContext } from '../context/AppContext';
import Countdown from './Countdown';
import PaymentInf from './PaymentInf';



export default function CheckoutForm({id}) {
/* console.log(id) */

        const {tickets, checked, url}= useContext(AppContext);

        const [showPayment, setShowPayment]=useState(false)

        const formReg=useRef();
        const formVip=useRef();
        let i= 0;

function fullfillReservation(e){
    
        e.preventDefault()

        
          const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
          };

          fetch(`http${url}fullfill-reservation`, options)
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((err) => console.error(err));

          /*  Making the second request POST to supabase */
        
          const data={}
        
          const tickets_guess_reg = tickets.regular ? (Array.from(formReg.current.elements).reduce((arr, element, i) => {
            if (i % 2 === 0) {
              arr.push({
                fullname: formReg.current.elements[i].value,
                email: formReg.current.elements[i + 1].value
               });
            }
            return arr;
          }, [])):false
        
          const tickets_guess_vip = tickets.vip ? (Array.from(formVip.current.elements).reduce((arr, element, i) => {
            if (i % 2 === 0) {
              arr.push({
                fullname: formVip.current.elements[i].value,
                email: formVip.current.elements[i + 1].value
             });
            }
            return arr;
          }, [])): false

          //here the reduce function creates an array of objects from the form element.
          //the reduce() itinerates over the form elements and accumulates a result in an array.
          //the result is initialized to an empty array and the function is passed the current element and its index as argument of each intineration
          // If the current element is the first element in a set of three (if it is multiple of 3 then the function creates an object) 

        
          data.regular_tickets= parseInt(tickets.regular),
          data.vip_tickets= parseInt(tickets.vip),
          data.tickets_guess_reg= tickets_guess_reg,
          data.tickets_guess_vip= tickets_guess_vip,
          data.camping_area= tickets.accommodation,
          data.tent2per= parseInt(tickets.tents2per),
          data.tent3per= parseInt(tickets.tents3per),
          data.green_camping= (checked ? true : false)

      
          const options2={
            method: 'POST',
            headers: {
              apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dXBmaGRmenBldXRzbnd3dnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMDgxMTIsImV4cCI6MTk4Njg4NDExMn0.BdXYKUMwc0jBPYDHPgW0CyTcpAUlZGBsZC_NcdyVs6Y',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dXBmaGRmenBldXRzbnd3dnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzMDgxMTIsImV4cCI6MTk4Njg4NDExMn0.BdXYKUMwc0jBPYDHPgW0CyTcpAUlZGBsZC_NcdyVs6Y',
             'Content-Type': 'application/json',
                 Prefer: 'return=representation'
               },
              body: JSON.stringify(data),
              }
          
        fetch ("https://uyupfhdfzpeutsnwwvra.supabase.co/rest/v1/booking_info", options2)    
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.error(err)); 
     
          setShowPayment(true)
        }
      
  return (
    <>
    {showPayment ? <PaymentInf/> : 
    

    <div className='ticket-holder-container'>
          <Countdown />

    <h3 className='checkout-title'>Ticket Holder Info</h3>    
    {tickets.regular ? (    <form className='checkout' ref={formReg}>
      <>
      <span>Regular</span>
      {/* The Array(totalTickets) creates an array with totalTickets number of elements, and the 
  ...spreads the elements of this array into individual arguments for the map function. 
 */}
         {[...Array(parseInt(tickets.regular))].map((i)=>(
         <div key={i++} className="dynamic-inputs-container">
         <label> <span className='input-name'>Fullname</span> 
         <input className="dynamic-inputs border1" type="text" name="fullname"  id={i} placeholder="John Doe" required autoFocus/>    
         </label>
         <label> <span className='input-name'>email</span> 
         <input className="dynamic-inputs border1" type="email" name="email"  id={i} required placeholder="johndoe@mail.com"/>
         </label>        
       </div>       
       ))}
       </>
      
    </form>
) : false}

    { tickets.vip ?(<form ref={formVip} className="checkout"> 
    <span>VIP</span>     
     {[...Array(parseInt(tickets.vip))].map((i)=>(
      <div key={i++} className="dynamic-inputs-container">
      <label><span className='input-name'>Fullname</span>  
      <input  className="dynamic-inputs border1" type="text" name="fullname"   id={i} required placeholder="John Doe"/>
      </label>
      <label> <span className='input-name'>email</span> 
      <input  className="dynamic-inputs border1" type="email" name="email"  id={i} required placeholder="johndoe@mail.com" />
      </label>
     </div>     
))}  
</form>) :false}

<button className='accion-button border2 accent1' name="button" onClick={fullfillReservation}>CONTINUE TO PAYMENT</button> 
</div>


}
    </>
  )
}

