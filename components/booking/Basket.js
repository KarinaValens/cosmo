import { useContext} from "react";
import { AppContext } from "../context/AppContext";



export default function Basket() {
    
 const {tickets, totalTickets, checkbox, regularPrice, vipPrice, tents2perPrice, tents3perPrice, greenPrice}=useContext(AppContext)
 
  const payload={"area": tickets.accommodation.toString(), "amount":parseInt(totalTickets)}

 function book() {

    const options = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      };

    const url="http://localhost:8080/reserve-spot"
    //const url="https://rough-snowflake-4981.fly.dev/reserve-spot"

    fetch(url, options)
      .then((response) => response.json())
      //.then((response) => console.log(response.id))
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  } 


    const regular=tickets.regular * regularPrice;
    const vip=tickets.vip * vipPrice;
    const tents2per=tickets.tents2per * tents2perPrice;
    const tents3per=tickets.tents3per * tents3perPrice;
    const greenCamping=parseInt(checkbox.current.checked ? greenPrice : 0);//the result of this ternary operator was an string so I use parseInt method to convert it to a number
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

                <tr key="index">
                <td>Regular tickets: </td>
                <td>{tickets.regular}</td> 
                <td>{regularPrice}</td> 
                <td>{regular}</td> 
                </tr>

                <tr>
                <td>VIP tickets:</td>
                <td>{tickets.vip}</td>
                <td>{vipPrice}</td>
                <td>{vip}</td> 
                </tr>
              
                <tr>
                <td>2 person tent:</td>
                <td>{tickets.tents2per}</td>
                <td>{tents2perPrice}</td>
                <td>{tents2per}</td>
                </tr>
                
                <tr>
                <td>3 person tent:</td>
                <td>{tickets.tents3per}</td>
                <td>{tents3perPrice}</td>
                <td>{tents3per}</td>
                </tr>

                <tr>    
                <td>Green Camping:</td>
                <td>{tickets.greenCamping}</td>
                <td>{greenPrice}</td> 
                <td>{greenCamping}</td> 
                </tr>

                <tr>
                    <td>Sub-total</td>
                    <td>{subtotal}</td>
                </tr>

                <tr>
                    <td>Booking fee</td>
                    <td>{bookingFee}</td>
                </tr>

                <tr>
                    <td>Total</td>
                    <td>{total}</td>
                </tr>

                <tr>
                <td>Accommodation:</td>
                <td>{tickets.accommodation}</td>                
                </tr> 
                              
                </tbody>                
                                       
            </table>

        <button onClick={book}>Buy Now</button>

    </>
  )
}


