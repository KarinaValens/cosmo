import { useState, createContext, useRef, useEffect} from "react";

export const AppContext = createContext();//creates the context to use in the components



export function AppContextProvider(props){

    const url="localhost:8080/"
    //const url= "rough-snowflake-4981.fly.dev/"

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
const[totalTickets, setTotalTickets]=useState()
const[tent2Amount, settent2Amount]=useState();
const[tent3Amount, settent3Amount]=useState();

const handleChange = (e) => {
    /* this function handle all the necesary items to buy tickets at ones  using just one state setTickets*/
const name = e.target.name
const value = e.target.value

//update the tickets state variable
setTickets((previous)=>{
    return{...previous, [name]: value}
}) // creates an object based in the previous state value

if(name==="regular"){
    setRegularAmount(value * regularPrice)
}if(name==="vip"){
    setVipAmount( value * vipPrice)
} if (name ==="tents2per"){
    settent2Amount( value * tents2perPrice)
} if (name ==="tents3per"){
    settent3Amount( value * tents3perPrice)
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
const [checked, setChecket]=useState(false)
/* -------- // Basket // -------- */
const [cart, setCart]=useState([]);


const addToCart = (e) =>{  
    e.preventDefault();
    cart.push(tickets)// this pushes the tickets objects storage in the state setTickets into the stage cart
    setCart(cart.concat()) 
    }


/* ---- // cart // ------ */
const [show, setShow]=useState(false);

const value={
    url,tickets, setTickets, totalTickets, 
    regularPrice,  vipPrice,  tents2perPrice, tents3perPrice, greenPrice, 
    regularAmount, vipAmount, 
    cart, setCart, show, setShow,
    handleChange, addToCart, 
    checkbox, checked, setChecket,
    tent2Amount, tent3Amount}

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

