import { useState, createContext, useRef, useEffect} from "react";

export const AppContext = createContext();//creates the context to use in the components



export function AppContextProvider(props){

    //this function is the wrapper for the -aap.js page to pass all the props
    const regularPrice= 799
    const vipPrice = 1299
    const greenPrice= 249
    const tents2perPrice = 249
    const tents3perPrice = 349


/* ------- // Booking // ------- */
const [tickets, setTickets]=useState({
    regular:"",
    vip:"",
    greenCamping:"",
    tents2per:"",
    tents3per:"",
    accommodation:""
});

const [regularAmount, setRegularAmount]=useState()
const [vipAmount, setVipAmount]=useState()
const[regular, setRegular]=useState()
const[vip, setVip]=useState()
const[totalTickets, setTotalTickets]=useState()

const handleChange = (e) => {
    /* this function handle all the necesary items to buy tickets at ones  using just one state setTickets*/
const name = e.target.name
const value = e.target.value

//update the tickets state variable
setTickets((previous)=>{
    return{...previous, [name]: value}
})

if(name==="regular"){
    setRegular(value)
    setRegularAmount(value * regularPrice)
}if(name==="vip"){
    setVip(value) 
    setVipAmount( value * vipPrice)
}
}

//this useeffect help me to keep the values of the regular and vip even when the form has changed so I can add thouse values to make the total
useEffect(()=>{
    if(tickets.regular && tickets.vip){
        setTotalTickets(parseInt(tickets.regular) + parseInt(tickets.vip))
    } else if(tickets.regular){
        setTotalTickets(parseInt(tickets.regular))
    } else{
        setTotalTickets(parseInt(tickets.vip))
    }
},[tickets])



const checkbox=useRef();//to verify if the checkbox of the green camping in the accommodation component is checked
/* -------- // Basket // -------- */
const [cart, setCart]=useState([]);

const addToCart = (e) =>{  
    e.preventDefault();// I need to erase this ones I figure out how to stop the page to reload when clicking the add to car button
    cart.push(tickets)// this pushes the tickets objects storage in the state setTickets into the stage cart
    setCart(cart.concat())   
    }


/* ---- // cart // ------ */
const [show, setShow]=useState(false);

const value={tickets, setTickets, totalTickets, regularPrice, regularAmount, vipPrice, vipAmount, tents2perPrice, tents3perPrice,
     greenPrice, cart, setCart, handleChange, checkbox, addToCart, show, setShow}

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

