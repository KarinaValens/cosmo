import { useContext} from "react";
import { AppContext } from "../context/AppContext";
import Image from "next/image"
import cart_shopping_solid from "../../public/media/cart_shopping_solid.svg"



export default function Cart() {
  
  const {show, setShow, totalTickets} = useContext(AppContext);

    /* onClick={()=>setShow(!show)}= make the show function a toogle to open and close te basket on click */
  return (
          
        <button className="button-cart" onClick={()=>setShow(!show)} >
             <Image  src={cart_shopping_solid} alt={""} width={"37"} height={"37"}  priority sizes="(max-width: 700px) 100vw, 700px" />
             <span className="quantity">{parseInt(totalTickets) >= 0 ? parseInt(totalTickets): 0}</span>
        </button>
        
        
  )
}

