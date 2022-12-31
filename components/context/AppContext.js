import { useState, createContext, useRef} from "react";

export const AppContext = createContext();

export function AppContextProvider(props){

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
    /* this function handle all the necesary items to buy tickets at ones  using just one state setTickets*/
const name = e.target.name
const value = e.target.value
setTickets((previous)=>{
    return{...previous, [name]: value}
})
}
const checkbox=useRef();//to verify if the checkbox of the green camping in the accommodation component is checked
/* -------- // Basket // -------- */
const [cart, setCart]=useState([]);

const addToCart = (e) =>{  
    e.preventDefault();// I need to erase this ones I figure out how to stop the page to reload when clicking the add to car button
    cart.push(tickets)// this pushes the tickets objects storage in the state setTickets into the stage cart
    setCart(cart.concat())   
    }

const [show, setShow]=useState(false);




const value={tickets, setTickets, cart, setCart, handleChange, checkbox, addToCart, show, setShow}

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}