import Head from 'next/head'
import React, { useState } from "react"
import Navigation from "../components/Navigation"
import Image from "next/image"
import { BodyWrap } from "../styles/bodyStyle"
import Star from "../src/img/Star.png"
import ProfilePic from "../src/img/ProfilePic.png"
import WorkPreview from '../components/WorkPreview'
import { Footer } from '../styles/Footer'
import WhiteLogo from "../src/img/whiteLogo.png"
import Service from '../components/Service'
import Link from 'next/link'



export default function Home() {

  const [isOpen, setOpen] = useState(false)
  return (
    
   <>
        <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap" 
        rel="stylesheet"
        />
      </Head>

      <BodyWrap>
          <Navigation/>
         <div className='landingOne'>

         <div className='MainText'>
            <h1 className='mainHeadline'>
            Hi, I'm Azamat. <br/><span>A Calligraffiti Artist</span><br></br> From Uzbekistan
            </h1>

           <div className='MainSubtitle'>
           <p className='mainSubtitle1'>GRAPHIC DESIGN</p>
            <div className='starImg'>
            <Image src={Star}/>
            </div>
            <p className='mainSubtitle2'>LOGO DESIGN</p>
            </div> 

            <div className='actionBtns'>
              <button className='projectBtn'>
              <Link href="https://t.me/inkographic" passHref={true}>
               Got a project?
               </Link>
              </button>
              <button className='worksBtn'>
               <Link href="/works">
               View my works
               </Link>

              </button>
            </div>
          </div>

          <div className='ProfileImg'>
            <Image src={ProfilePic}/>
          </div>
          
          </div>

          <div className='blackBelt'>
            <div className='blackItems1'>
            <h1>GRAPHIC DESIGN</h1>
            <h1>LOGO DESIGN</h1>
            <h1>BRANDING</h1>
            <h1>SMM DESIGN</h1>
            <h1>GRAPHIC DESIGN</h1>
            </div>

            <div className='blackItems2'>
            <h1>GRAPHIC DESIGN</h1>
            <h1>LOGO DESIGN</h1>
            <h1>BRANDING</h1>
            <h1>SMM DESIGN</h1>
            <h1>GRAPHIC DESIGN</h1>
            </div>
           
            </div> 

           <div className='generalInfo'>
            
              <div className='nameAndWork'>
                <h2 className='nameOfAuthor'> AZAMAT TESHABOEV</h2>
                <h2 className='workTitle'> Graphic Designer and Calligraffiti artist</h2>
              
              </div>

              <div className='workInfo'>
                <h2 className='quote'>When the subtle beauty of the East is combined with the brightness of the West</h2>
                <p className='degreeInfo'> Have a degree from Arts, helped companies and personal brands to develop their visuals</p>

                <div className='landInfos'>

                  <div className='placeInfo'>
                    <p className='pTitle'>BORN IN</p>
                    <p className='tash'>Tashkent</p>
                  </div>

                  <div className='exInfo'>
                    <p className='eTitle'>EXPERIENCE</p>
                    <p className='yearEx'>5+ Years</p>
                  </div>

                  <div className='birthInfo'>
                    <p className='bTitle'>DATE OF BIRTH</p>
                    <p className='dates'>12 August 1992</p>
                  </div>



                </div>
              </div>
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

            <h1 className='recTitle'>Recent Works</h1>

            <div className='recWorks'>
              <WorkPreview tag="LOGOS" desc="My logo designs for small businesses" reverse="no" img="Thumb1"/>
              <WorkPreview tag="TYPOGRAPHY" desc="Custom Eastern
              typography poster" reverse="yes" img="Thumb2"/>

            <WorkPreview tag="TYPOGRAPHY" desc="Ancient Kufic Numbers" reverse="no" img="KuficNumbers"/>
            </div>

            <div className='serviceHeadline'><h1>Services</h1></div>   
            <div className='servicesContainer'>
              <Service headline="Graphic Design" sub="Let's make stunning visuals that tell the core story of your brand"/>
              <Service headline="Logo Design" sub="We can make your brand to stand out from others by its unique logo"/>
              <Service headline="SMM Design" sub="Upgrade your marketing and disrupt the digital world by dominating the social medias"/>
              <Service headline="Branding" sub="To differentiate in the market, we can help you to create appereance for your brand"/>
            </div>

  
         
     </BodyWrap>

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
