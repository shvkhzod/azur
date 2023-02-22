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
                   <Image src={Me} alt="Azamat"/>
               </div>
           </div>
           <div className="infoAboutMe">
               <p>Azamat Teshaboev was born in Andijan (which is located 350 km east of Tashkent, capital city of Uzbekistan). After graduating from school, he studied Arabic language in Cairo, Egypt, then returned to Uzbekistan. Later, he traveled to Istanbul, Turkey to continue his education. He studied for 5 years at the Faculty of Environmental Engineering of Kastamonu University, which is located near the Black Sea coast of Turkey. During his studies, he established close relations with different faculty members, including the Dean of the Faculty, Ph.D. Savaş Çevik, who played a big role in gaining valuable academic knowledge. In general, Kastamonu city served as a big “life” school for him during his student years, and he had a wonderful experience, both scientific and aesthetic, while trying different disciplines. 
                  He improved his knowledge in the field of art and graphic design from teachers who are the masters of their fields. Islam Mamatov laid the foundation stones in learning traditional Arabic calligraphy art. He studied graphic design from Laziz Hamidov at Tasnif cgi school. 
                  He is proud to be a caring husband and a father of one daughter. Currently, he works as a freelancer in the field of Logo branding and he is also the founder of the "Azur" brand. 
                  Exhibitions and Events 
                  Behance Portfolio Reviews Istanbul (2016) 
                  Participant 
                  Istanbul, Turkey 
                  Calligrapher '17, Calligraphy & Typography Event (2017) 
                  Exhibition observer 
                  Küçükçekmece Municipality, Istanbul, Turkey </p>
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