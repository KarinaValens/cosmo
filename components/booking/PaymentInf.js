import {useRef, useState}  from 'react'
import ThankYou from './ThankYou';

function PaymentInf() {
  
  const [showSummary, setShowSummary]=useState(false)
  const payment=useRef();


  function handlePayment(e){
    e.preventDefault();


    setShowSummary(true)
    
  }
  
  return (
    <>
    {showSummary ? <ThankYou/> :
    <>
    <h3>Payment Info</h3>
    <form ref={payment} className="payment-form">

  
  <label> Firstname</label><input className="checkout-inputs border2" type="text" required  placeholder="Firstname" name="name" id="card-name" autoFocus/>
  <label>Lastname</label><input className="checkout-inputs border2" type="text" required  placeholder="Lastname" name="name" id="card-lastname"/>
     
  
  <label>Card Number</label><input className="checkout-inputs border2" type="text" required maxLength="16"  placeholder="1234 5678 9012 3456" name="card_num" id="card-number"/>  
  
    
  <div>  
  <label>Exp</label><input className="payment-inputs border2" type="text" maxLength="5" placeholder="DD/YY" name="month" id="card-date"/>

  <label>CVV/CVC</label><input className="payment-inputs border2" type="text" maxLength="3" placeholder="segurity-number " name="svc" id="card-svc"/>
  </div>

    <button className="checkout-inputs accent1 border2" type='submit' onClick={handlePayment}>CONFIRM PAYMENT</button>   
    </form>
    </>
   }
    </>
  )
}

export default PaymentInf