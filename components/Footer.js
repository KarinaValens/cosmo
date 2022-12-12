import Image from "next/image"//this module automaticaly automise the img with Squoosh
import dark_theme_logo from "../public/media/dark_theme_logo.png" // it is necesary import the images as so
import instagram from "../public/media/instagram.png" 
import facebook from "../public/media/facebook.png" 
import youtube from "../public/media/youtube.png" 

export default function Footer() {
  return (
    <footer className="footer">
            <div className="container"> 
                <a  href={"/"}>     
                <Image src={dark_theme_logo} alt={""} width={"70"} height={"50"} priority sizes="(max-width: 700px) 100vw, 700px" />
                </a>
                <p className="accent1">Cosmo Festival the greatest festival of all the times.</p>
            </div>
            <div className="container">
                <h4 className="accent1">Sign up to our newsletter</h4>
                <p>Stay up to date with the new show, bands , promotions and more.</p>
                <form className="">
                    <input className="input-footer border2" placeholder="John Doe"/>
                    <input className="input-footer border2" placeholder="johndoe@mail.com"/>
                    <button className="button-footer accent2 border2">SUMMIT</button>
                </form>
            </div>
            <div className="container">
            <h4 className="accent1">Contact</h4>
            <ul>        
                <li>Cosmo Festival </li>
                <li>Jagtej 16, 3000, Denmark</li>
                <li>hello@cosmofestival.com</li>
                <li>CVR: 33814860</li>
            </ul>
            <div className="iconContainer"> 
                <Image src={instagram} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
                <Image src={facebook} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />
                <Image src={youtube} alt={""} width={"20"} height={"20"} priority sizes="(max-width: 700px) 100vw, 700px" />

            </div>


            </div>
        </footer>
  )
}

 