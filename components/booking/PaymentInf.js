import React from 'react'

function PaymentInf() {
  return (
    <>
    
    <h3>Payment Info</h3>
    <form>
    <input type="text" required maxLength="16"  placeholder="credit card number" name="card_num" id="number" autoFocus/>
    <input type="text" maxLength="2" placeholder="exp-month" name="month" id="date"/>
    <input type="text" maxLength="2" placeholder="exp-year " name="exp_year" id="year"/>
    <input type="text" maxLength="3" placeholder="segurity-number " name="svc" id="svc"/>
            
    </form>
    
    </>
  )
}

export default PaymentInf