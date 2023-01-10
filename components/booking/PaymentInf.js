import {useRef, useState}  from 'react'
import Countdown from './Countdown';
import ThankYou from './ThankYou';

export default  function PaymentInf() {
  
  const [showSummary, setShowSummary]=useState(false)
  const payment=useRef();

  function handleDate(e){
    const input = e.target;
    let value = input.value;
    if (value.length === 2) {
      value += '/';
      input.value = value;
    }
  }

  const handleCardNumber = (e) => {
    const input = e.target;
    let value = input.value.replace(/\D/g,'');
    value = value.match(/.{1,4}/g);
    if(value){
        value = value.join(" ");
        if(value.length > 19) value = value.slice(0,19);    }
    input.value = value;
 }
    /* the replace(/\D/g,'') to remove any non-digit character, then I'm using the slice(0,16) to take only 
    the first 16 digits, after that I'm using match() method with .{1,4} regex that would match 4 digits. 
    The g flag makes it match globally, and the join() method would join the array of matches with a space. */

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
    <form onSubmit={handlePayment} ref={payment} className="payment-form">

  
  <label>Firstname<input className="dynamic-inputs border2" type="text" required  placeholder="Firstname" name="name" id="card-name" autoFocus/></label>
  <label> Lastname<input className="dynamic-inputs border2" type="text" required  placeholder="Lastname" name="name" id="card-lastname"/></label>
     
  
  <label>Card Num<input className="dynamic-inputs border2" type="text" onChange={handleCardNumber} /* pattern= "[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" */

required maxLength="19"  placeholder="1234 5678 9012 3456" name="card_num" id="card-number"/>  </label>
  
  <div>  
  <label> Exp<input className="payment-inputs  border2" type="text" onChange={handleDate} maxLength="5" placeholder="DD/YY" name="date" id="card-date"/></label>
  
  <label>CVV<input className="payment-inputs  border2" type="text" maxLength="3" placeholder="SVC " name="svc" id="card-svc"/></label>
  
  </div>

    <button className="accion-button accent1 border2" type='submit' >CONFIRM PAYMENT</button>   
    </form>
    </>
   }
    </>
  )
}

