import React from 'react'

function PaymentInf() {
  return (
    <>
    
    <h3>Payment Info</h3>
    <form className=''>
    <input className="input-footer border2" type="text" required maxLength="16"  placeholder="credit card number" name="card_num" id="number" autoFocus/>
    <input className="input-footer border2" type="text" maxLength="2" placeholder="exp-month" name="month" id="date"/>
    <input className="input-footer border2" type="text" maxLength="2" placeholder="exp-year " name="exp_year" id="year"/>
    <input className="input-footer border2" type="text" maxLength="3" placeholder="segurity-number " name="svc" id="svc"/>
    <button className="button-footer accent2 border2" type='submit'>Pay</button>   
    </form>
    
    </>
  )
}

export default PaymentInf