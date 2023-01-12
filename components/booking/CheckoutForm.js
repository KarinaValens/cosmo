import {useRef, useContext, useState} from 'react'
import { AppContext } from '../context/AppContext';
import Countdown from './Countdown';
import PaymentInf from './PaymentInf';



export default function CheckoutForm({id}) {
/* console.log(id) */

        const {tickets, checked, url}= useContext(AppContext);

        const [showPayment, setShowPayment]=useState(false)

        const form=useRef();
        let i= 0;

function fullfillReservation(e){
    
        e.preventDefault()

        
          const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: id})
          };

          fetch(`${url}fullfill-reservation`, options)
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((err) => console.error(err));

          /*  Making the second request POST to supabase */
        
          const data={}
        
          
          //here the reduce function creates an array of objects from the form element.
          //the reduce() itinerates over the form elements and accumulates a result in an array.
          //the result is initialized to an empty array and the function is passed the current element and its index as argument of each intineration
          //the formElements and the ticketType is passed as argument in order to determine if it is the vip or regular and how many of each
          // If the current element is the first element in a set of three (if it is multiple of 3 then the function creates an object) 

          function collectTicketData(ticketType, formElements, numOfTickets) {
            let processed = 0;
            return Array.from(formElements).reduce((arr, element, i) => {
              if (i % 2 === 0) {
                processed++;
                if (processed > numOfTickets) return arr;
                arr.push({
                  fullname: formElements[i].value,
                  email: formElements[i+1].value,
                  ticketType: ticketType
                });
              }
              return arr;
            }, []);
          }
          
          const tickets_guess_reg = collectTicketData('regular', form.current.elements, tickets.regular);
          const tickets_guess_vip = collectTicketData('VIP', form.current.elements, tickets.vip);
          

        
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

    
     
       <form className='checkout' onSubmit={fullfillReservation} ref={form}>
       {tickets.regular ? ( 
      <>
      <span>Regular</span>
      {/* The Array(totalTickets) creates an array with totalTickets number of elements, and the 
  ...spreads the elements of this array into individual arguments for the map function. 
 */}
         {[...Array(parseInt(tickets.regular))].map((i)=>(
         <div key={i + Date.now()} className="dynamic-inputs-container">
         <label> <span className='input-name'>Fullname</span> 
         <input className="dynamic-inputs border1" type="text" name="fullnameReg"  placeholder="John Doe" required autoFocus/>    
         </label>
         <label> <span className='input-name'>email</span> 
         <input className="dynamic-inputs border1" type="email" name="emailReg" required placeholder="johndoe@mail.com"/>
         </label>        
       </div>       
       ))}
       </>) : false}

       
       { tickets.vip ? ( 
        <> <span>VIP</span>     
     {[...Array(parseInt(tickets.vip))].map((i)=>(
      <div key={i + Date.now()} className="dynamic-inputs-container">
      <label><span className='input-name'>Fullname</span>  
      <input  className="dynamic-inputs border1" type="text" name="fullnameVip" required placeholder="John Doe"/>
      </label>
      <label> <span className='input-name'>email</span> 
      <input  className="dynamic-inputs border1" type="email" name="emailVip" required placeholder="johndoe@mail.com" />
      </label>
     </div>     
      ))}  
    </>) :false}
       
       <button className='accion-button border2 accent1' type='submit' >CONTINUE TO PAYMENT</button> 

    </form>


</div>
}
    </>
  )
}







/*   */