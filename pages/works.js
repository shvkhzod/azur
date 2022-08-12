import React from "react";
import Navigation from "../components/Navigation";
import WorkPreview from "../components/WorkPreview";
import Head from 'next/head'
import { WorksWrapper } from "../styles/WorkWrapper";
import { Footer } from "../styles/Footer";
import WhiteLogo from "../src/img/whiteLogo.png"
import Image from "next/image"
import Link from "next/link";


  function Works() {
    return(
       <>
        <Head>
        <title>Works</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" 
        rel="stylesheet"
        />
      </Head>
        <WorksWrapper>
           <Navigation/>
          <div className="wContainer">
          <h1 className="workIntro">Welcome to my portfolio</h1>
           <div className="workList">
           <WorkPreview tag="LOGOS" desc="My logo designs for small businesses" reverse="no" img="Thumb1"/>
           <WorkPreview tag="TYPOGRAPHY" desc="Custom Eastern
              typography poster" reverse="yes" img="Thumb2"/>
              <WorkPreview tag="TYPOGRAPHY" desc="Ancient Kufic Numbers" reverse="no" img="KuficNumbers"/>   

           </div>
          </div>
        </WorksWrapper>
        <Footer>
        <div className='whiteLogo'>
      <Image src={WhiteLogo}/>
    </div>
    <div className='firstRow'>
    <Link href="https://www.instagram.com/azamat_tsch/" passHref={true} >
      <p>Instagram</p>
    </Link>
    <Link href="https://www.facebook.com/profile.php?id=100084226934141" passHref={true} >
      <p>Facebook</p>
    </Link>
    <Link href="https://t.me/inkographic" passHref={true} >
      <p>Telegram</p>
    </Link>
    </div>

    <div className='secondRow'>
    <Link href="https://t.me/inkographic" passHref={true} >
      <p>Hire Me</p>
    </Link>
    <Link href="/works" >
      <p>Works</p>
    </Link>
    <Link href="/about" >
      <p>About</p>
    </Link>
    </div>
        </Footer>
       </>
    )
  }

  export default Works