import {useRef, useState}  from 'react'
import Countdown from './CountDown';
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
    <Countdown/>
    <h3>Payment Info</h3>
    <form ref={payment} className="payment-form">

  
  <label>Firstname<input className="dynamic-inputs border2" type="text" required  placeholder="Firstname" name="name" id="card-name" autoFocus/></label>
  <label> Lastname<input className="dynamic-inputs border2" type="text" required  placeholder="Lastname" name="name" id="card-lastname"/></label>
     
  
  <label>Card Num<input className="dynamic-inputs border2" type="text" required maxLength="16"  placeholder="1234 5678 9012 3456" name="card_num" id="card-number"/>  </label>
  
    
  <div>  
  <label> Exp<input className="payment-inputs  border2" type="text" maxLength="5" placeholder="DD/YY" name="month" id="card-date"/></label>
  
  <label>CVV<input className="payment-inputs  border2" type="text" maxLength="3" placeholder="SVC " name="svc" id="card-svc"/></label>
  
  </div>

    <button className="accion-button accent1 border2" type='submit' onClick={handlePayment}>CONFIRM PAYMENT</button>   
    </form>
    </>
   }
    </>
  )
}

export default PaymentInf