import React, { useState } from "react";
import Image from "next/image";
import { NavWrapper } from "../styles/navigationStyle";
import AzurLogo from "../src/img/logoCut.png"
import Link from "next/link"
import { useRouter } from "next/router";
import Hamburger from "../src/img/hambruger.svg"



 function Navigation() {
    const [isOpen, setOpen] = useState(false)
    const router = useRouter();
    return(
        <NavWrapper>

        <div className="logo">
            <Image src={AzurLogo} alt="Logo"/>
        </div>

        <div className={isOpen ? "openNav" : "navRoutes"}>
        <Link href="/">
            <p className={router.pathname == "/" ? "active" : ""}>Home</p>
           </Link>
           <Link href="/works">
           <p className={router.pathname == "/works" ? "active" : ""}>Works</p>
           </Link>
           
           <Link href="/about">
           <p className={router.pathname == "/about" ? "active" : ""}>About</p>
           </Link>
        </div>
        <div className={ isOpen ? "openHam" : "hamburger"} onClick={()=> setOpen(!isOpen)}>
            <Image src={Hamburger} alt="HamBurger Icon"/>
        </div>
        <button className="talkBtn"
       onClick={() => {
        window.location.href = "mailto:xattot1993@mail.ru?subject=Work Inquiry";
      }}>Let's Talk</button>
    </NavWrapper>
    )
 }

 export default Navigation