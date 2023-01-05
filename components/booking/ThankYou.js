import {useContext} from 'react'
import { AppContext } from '../context/AppContext';



export default  function ThankYou() {

    const {tickets, checked, regularPrice, vipPrice, tents2perPrice, tents3perPrice, greenPrice}=useContext(AppContext)
    
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
    <h2>Thank You For Your Purchage</h2>
    <h3>Order Summary</h3>
    <table>
                <thead>
                    <tr>
                    <th>Detail</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                </thead>              
            
                <tbody>
                    {tickets.regular != 0 ? <tr>
                <td>Regular tickets: </td>
                <td>{tickets.regular}</td> 
                <td>$ {regular}</td> 
                </tr>:false}
                
                {tickets.vip != 0 ?
                <tr>
                <td>VIP tickets:</td>
                <td>{tickets.vip}</td>
                <td>$ {vip}</td> 
                </tr>:false}


                {tickets.tents2per != 0 ?
                <tr>
                <td>2 person tent:</td>
                <td>{tickets.tents2per}</td>
                <td>$ {tents2per}</td>
                </tr>:false}
                
                {tickets.tents3per != 0 ?
                <tr>
                <td>3 person tent:</td>
                <td>{tickets.tents3per}</td>
                <td>$ {tents3per}</td>
                </tr>:false}

                {checked ?
                <tr>    
                <td>Green Camping:</td>
                <td>{tickets.greenCamping}</td>
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
    
    </>
  )
}

