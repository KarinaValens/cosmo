import React from 'react'

function Basket({...cart}) {

    //const {vip}= cart
  

return (
    <div>
        <ul>


            {/* <li>Regular tickets: {cart.regular}</li>
            <li>VIP tickets: {cart.vip}</li>
            <li>Green Camping: {cart.greenCamping}</li>
            <li>Accommodation: {cart.accommodation}</li>
            <li>2 person tent: {cart.tents2per}</li>
            <li>3 person tent: {cart.tents3per}</li>   */} 
        </ul>
        <button>Buy Now</button>
    </div>
  )
}

export default Basket