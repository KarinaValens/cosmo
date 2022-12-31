import Image from "next/image"
import cart_shopping_solid from "../../public/media/cart_shopping_solid.png"



export default function Cart({show, setShow}) {
    /* onClick={()=>setShow(!show)}= make the show function a toogle to open and close on click */
  return (
    <div>        
        <span onClick={()=>setShow(!show)}>
             <Image  src={cart_shopping_solid} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
        </span>
        <span className="quantity">1</span>
        
        </div>
  )
}

