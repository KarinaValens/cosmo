import Image from "next/image"//this module automaticaly automise the img with Squoosh
import dark_theme_logo from "../public/media/dark_theme_logo.png" // it is necesary import the images as so
import Anchor from "./Anchor"
import Basket from "./booking/Basket"
import Cart from "./booking/Cart"
import Nav from "./Nav"

//the images are place in the public folder inside media

export default function Header({show, setShow}) {
    //it is not necesary to write an unit in the the width and the heigh properties 
  return (
    <header>
      <Nav/>
      <div className="basket-container">
        <Anchor  href={"/"} >
          <Image  src={dark_theme_logo} alt={""} width={"50"} height={"45"} priority sizes="(max-width: 700px) 100vw, 700px" />
        </Anchor>

      < Cart show={show} setShow={setShow}/>
      
      </div>
        <h1 className="title accent1">COSMO</h1>
        <div className="bands-card headerDays">
            <p className="accent2">15</p>
            <p className="accent1">16</p>
            <p className="accent7">17</p>
            <p className="accent4">18</p>
            <p className="accent6">19</p>
            <p className="accent3">20</p>
            <p className="accent5">21</p>
        </div>
        <p className="accent1"> A whole week this December</p>
    </header>
  )
}

 