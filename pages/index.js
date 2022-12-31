import Head from 'next/head'
import { useState, useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../components/context/AppContext';
import Basket from '../components/booking/Basket'
import Header from '../components/Header'
import Accommodation from '../components/booking/Accommodation';
import Tickets from '../components/booking/Tickets';
import Tents from '../components/booking/Tents';


export default function Home() {

/* ------- // Booking // ------- */
/* const [tickets, setTickets]=useState({
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
}); */

//const handleChange = (e) => {
    /* this function handle all the necesary items to buy tickets at ones  using just one state setTickets*/
//const name = e.target.name
//const value = e.target.value
//setTickets((previous)=>{
//    return{...previous, [name]: value}
//})
//}
//const checkbox=useRef();//to verify if the checkbox of the green camping in the accommodation component is checked


/* -------- // Basket // -------- */
//const [cart, setCart]=useState([]);

//const addToCart = (e) =>{  
    //e.preventDefault();// I need to erase this ones I figure out how to stop the page to reload when clicking the add to car button
    //cart.push(tickets)// this pushes the tickets objects storage in the state setTickets into the stage cart
    //setCart(cart.concat())   
    //}

//const [show, setShow]=useState();

const {show, addToCart} = useContext(AppContext);

  return (
    <>
        <Head>
        <title>The Festival | Schedule</title>
          <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
          <meta name="keywords" content="festival, app, schedule, music, exam, reactjs, nextjs"></meta>
        </Head> 
        <Header/>
        <div className="container">
        {show ? <Basket/> : true}
    <form>
        <Tickets />
        <Accommodation />
        <Tents />
        <button onClick={addToCart}>Add to Basket</button>        
    </form>
    {/* <Basket/> */}
   
   {/* <div>
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
            const subtotal= regular + vip + tents2per + tents3per + greenCamping;
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

    </div> */} 
    </div>
    
    </>
  )
}

