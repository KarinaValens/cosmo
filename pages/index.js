import Head from 'next/head'
import Basket from '../components/booking/Basket'
import Header from '../components/Header'
import { useState } from 'react';
import Accommodation from '../components/booking/Accommodation';
import Tickets from '../components/booking/Tickets';
import Tents from '../components/booking/Tents';


export default function Home() {

/* ------- // Booking // ------- */
const [tickets, setTickets]=useState({
    regular:"",
    regularPrice:"799",
    vip:"",
    vipPrice:"1299",
    greenCamping:"",
    greenPrice:"249",
    tents2per:"",
    tents2perPrice:"249",
    tents3per:"",
    tents3perPrice:"349",
    accommodation:""
});

const handleChange = (e) => {
const name = e.target.name
const value = e.target.value
setTickets((previous)=>{
    return{...previous, [name]: value}
})
}

/* -------- // Basket // -------- */
const [cart, setCart]=useState([]);

const addToCart = (e) =>{  
    e.preventDefault();

    cart.push(tickets)
    setCart(cart.concat())   
        }



  return (
    <>
      <Header cart={cart}/>
        <div className="container">
        <Head>
        <title>The Festival | Schedule</title>
          <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
          <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
        </Head> 
    
    <form>
        <Tickets handleChange={handleChange}/>
        <Accommodation handleChange={handleChange}/>
        <Tents handleChange={handleChange}/>
        <button onClick={addToCart}>Add to Basket</button>        
    </form>
   
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
                return (
                <>
                <tr key="">
                <td>Regular tickets: </td>
                <td>{item.regular}</td> 
                <td>{item.regularPrice}</td> 
                <td>{item.regular * item.regularPrice}</td> 
                </tr>

                <tr>
                <td>VIP tickets:</td>
                <td>{item.vip}</td>
                <td>{item.vipPrice}</td>
                <td>{item.vip * item.vipPrice}</td> 
                </tr>
              
                <tr>
                <td>2 person tent:</td>
                <td>{item.tents2per}</td>
                <td>{item.tents2perPrice}</td>
                <td>{item.tents2per * item.tents2perPrice}</td>
                </tr>
                
                <tr>
                <td>3 person tent:</td>
                <td>{item.tents3per}</td>
                <td>{item.tents3perPrice}</td>
                <td>{item.tents3per * item.tents3perPrice}</td>
                </tr>

                <tr>    
                <td>Green Camping:</td>
                <td>{item.greenCamping}</td>
                <td>{item.greenPrice}</td> 
                <td>{item.greenPrice}</td>
                </tr>

                <tr>
                <td>Accommodation:</td>
                <td>{item.accommodation}</td>                
                </tr>
                </>)  
                         
            })}   
            </tbody>
        <button>Buy Now</button>
        </table>
    </div> 
    </div>
    
    </>
  )
}

