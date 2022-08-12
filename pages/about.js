import React from "react";
import Navigation from "../components/Navigation";
import { AboutWrapper } from "../styles/AboutWrapper";
import Head from "next/head";
import Image from "next/image";
import Me from "../src/img/aboutme2.png"
import Link from "next/link";

 function About() {
    return(
       <>
        <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" 
        rel="stylesheet"
        />
      </Head>
        <AboutWrapper>
            <Navigation/>
            <div className="aboutContent">
            <h1 className="aboutIntro">I'm Azamat and I help brands to improve their visuals</h1>
           
           <div className="picContainer">
               <div className="aboutMePic">
                   <Image src={Me}/>
               </div>
           </div>
           <div className="infoAboutMe">
               <p>Since my childhood I have always had passion in Art. The beauty of creating something out of nowhere always amazed me and that obessession lead me to explore
                   this area even deeper by acquiring a degree related to Arts. Having solid knoweldge from University and experience from freelance(even volunteering projects), I began my 
                   professional career as a Graphic Designer, mainly focused on Typography and Logo Design. Since the start of my career, I was able to work with dozens of brands and companies. Right now I am in Uzbekistan, available for Freelance Projects remotely, so if
                   you need any services related to Graphic Design, I will be happy to work with you  </p>
           </div>

           <div className="callBtns">
            <Link href="https://t.me/inkographic" passHref={true}>
            <button className="hireBtn">Hire Me</button>
            </Link>
           <Link href="/works" >
           <button className="seeBtn">See My Works</button>
           </Link>
           
           </div>

           <div className='tables'>

<div className='firstCol'>
 <h1 className='yearsTitle'>
   5+
 </h1>
 <p className='yearsSubtitle'>
   YEARS OF EXPERIENCE
 </p>
</div>

<div className='secondCol'>
 <h1 className='yearsTitleWhite'>
   40+
 </h1>
 <p className='yearsSubtitleWhite'>
  PROJECT COMPLETED
 </p>
</div>

<div className='thirdCol'>
 <h1 className='yearsTitle'>
   30+
 </h1>
 <p className='yearsSubtitle'>
 HAPPY CLIENTS
 </p>
</div>
</div>
            </div>
        </AboutWrapper>
       </>
    )
 }

 export default About