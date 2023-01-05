import Anchor from "./Anchor";

export default function Nav() {
  return (
    <>
    <nav className="nav">
        <ul>
            <Anchor className="anchor" href={"/"}>HOME</Anchor>
            <Anchor className="anchor" href={"/schedule"}>SCHEDULE</Anchor>
        </ul>
    </nav>   
    
    </>  )
}

 