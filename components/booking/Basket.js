import { useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import CheckoutForm from "./CheckoutForm";


const url="localhost:8080/"
//const url= "rough-snowflake-4981.fly.dev/"

export default function Basket() {
    
    
 const {tickets, totalTickets,  checked, regularPrice, vipPrice, tents2perPrice, tents3perPrice, greenPrice}=useContext(AppContext)
 
 const payload={"area": tickets.accommodation.toString(), "amount":parseInt(totalTickets)}

const [id, setId]=useState();
const [showForm, setShowForm]=useState(false)

 function book() {

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      };


    fetch(`http://${url}reserve-spot`, options)
      .then((res) => res.json())
      .then((res) => setId(res.id))
      .catch((err) => console.error(err));

    //show the ticket horlders and payment form
    setShowForm(true)
        } 

    const regular=tickets.regular * regularPrice;
    const vip=tickets.vip * vipPrice;
    const tents2per=tickets.tents2per * tents2perPrice;
    const tents3per=tickets.tents3per * tents3perPrice;
    const greenCamping = parseInt(checked ? greenPrice : 0);//the result of this ternary operator was an string so I use parseInt method to convert it to a number
    const subtotal= regular + vip + tents2per + tents3per + greenCamping ;
    const bookingFee= 99;
    const total= subtotal + bookingFee;

return (
        <>
            <table>
                <thead>
                    <tr>
                    <th>Detail</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    </tr>
                </thead>              
            
                <tbody>
                    {tickets.regular != 0 ? <tr>
                <td>Regular tickets: </td>
                <td>{tickets.regular}</td> 
                <td>$ {regularPrice}</td> 
                <td>$ {regular}</td> 
                </tr>:false}
                
                {tickets.vip != 0 ?
                <tr>
                <td>VIP tickets:</td>
                <td>{tickets.vip}</td>
                <td>$ {vipPrice}</td>
                <td>$ {vip}</td> 
                </tr>:false}


                {tickets.tents2per != 0 ?
                <tr>
                <td>2 person tent:</td>
                <td>{tickets.tents2per}</td>
                <td>$ {tents2perPrice}</td>
                <td>$ {tents2per}</td>
                </tr>:false}
                
                {tickets.tents3per != 0 ?
                <tr>
                <td>3 person tent:</td>
                <td>{tickets.tents3per}</td>
                <td>$ {tents3perPrice}</td>
                <td>$ {tents3per}</td>
                </tr>:false}

                {checked ?
                <tr>    
                <td>Green Camping:</td>
                <td>{tickets.greenCamping}</td>
                <td>$ {greenPrice}</td> 
                <td>$ {greenCamping}</td> 
                </tr>:false}

                <tr>
                    <td>Sub-total</td>
                    <td>$ {subtotal}</td>
                </tr>

                <tr>
                    <td>Booking fee</td>
                    <td>$ {bookingFee}</td>
                </tr>

                <tr>
                    <td>Total</td>
                    <td>$ {total}</td>
                </tr>

                <tr>
                <td>Accommodation:</td>
                <td>{tickets.accommodation}</td>                
                </tr> 
                              
                </tbody>                
                                       
            </table>

    <button className='button border2 accent1' onClick={book}>Confirm Reservation</button>
        
     {showForm && <CheckoutForm id={id} />}  
    </>
  )
}


