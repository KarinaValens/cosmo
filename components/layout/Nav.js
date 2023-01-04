import Anchor from "./Anchor";

export default function Nav() {
  return (
    <>
    <nav className="nav">
        <ul>
            <Anchor href={"/"}>Home</Anchor>
            <Anchor href={"/schedule"}>Schedule</Anchor>
        </ul>
    </nav>   
    
    </>  )
}

 