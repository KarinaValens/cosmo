import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
    //the children props are the elements inside the -app.js
  return (
    <>
    {/* <Header/> */} 
    {children}
    <Footer/>
    </>
  )
}

