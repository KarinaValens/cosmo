import { useRef } from "react";


function Basket({cart, checkbox}) {
 

return (
    <div>
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
            {cart.map((item)=>{

            const regular=item.regular * item.regularPrice;
            const vip=item.vip * item.vipPrice;
            const tents2per=item.tents2per * item.tents2perPrice;
            const tents3per=item.tents3per * item.tents3perPrice;
            const greenCamping=parseInt(checkbox.current.checked ? item.greenPrice : 0);//the result of this ternary operator was an string so I use parseInt method to convert it to a number
            const subtotal= regular + vip + tents2per + tents3per /* + greenCamping */;
            const bookingFee= 99;
            const total= subtotal + bookingFee;


                return (
                <>
                <tr key="index">
                <td>Regular tickets: </td>
                <td>{item.regular}</td> 
                <td>{item.regularPrice}</td> 
                <td>{regular}</td> 
                </tr>

                <tr>
                <td>VIP tickets:</td>
                <td>{item.vip}</td>
                <td>{item.vipPrice}</td>
                <td>{vip}</td> 
                </tr>
              
                <tr>
                <td>2 person tent:</td>
                <td>{item.tents2per}</td>
                <td>{item.tents2perPrice}</td>
                <td>{tents2per}</td>
                </tr>
                
                <tr>
                <td>3 person tent:</td>
                <td>{item.tents3per}</td>
                <td>{item.tents3perPrice}</td>
                <td>{tents3per}</td>
                </tr>

                <tr>    
                <td>Green Camping:</td>
                <td>{item.greenCamping}</td>
                <td>{item.greenPrice}</td> 
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
                <td>{item.accommodation}</td>                
                </tr>

                

                </>)  
                                       
            })}   
            </tbody>
        </table>

        <button>Buy Now</button>

    </div>
  )
}

export default Basket