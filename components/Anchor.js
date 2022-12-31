import {useRouter} from "next/router";
//export the component next/router is going to give us access to the hook useRouter
//use router is a hook that allow us to make dynamic navigation(routing)


export default function Anchor({children, href, className}) {
 //the anchor tag receives the props className, children and href
   
const router = useRouter();
//the hook useRouter is going to give us acces to router object

function handleClick(e){
//what should the browser do when an anchor get clicket
e.preventDefault(); //prevent the anchor goes to its default url
router.push(href);//this method pushes a new entry into the history stack, so when the user clicks the browser is taken to an specific URL.

//this function is pass into the anchor tag as props to be applyied in all the {childrens} off the <Anchor/>
}

  return (
    <a className={className} href={href} onClick= {handleClick}>{children}</a>
  )
}

