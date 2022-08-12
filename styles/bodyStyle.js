import styled, { keyframes } from "styled-components";

const fade = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100%);
    }

    to {opacity: 1;
        transform: translateX(0%);
    }

`


const fadeImage = keyframes`
    from {
        opacity: 0;
        transform: translateX(200%);
    }

    to {
        opacity: 1;
        transform: translateX(0%);
    }

`

const moveText = keyframes`

from {
    transform: translateX(100%);
   }

   to {
    transform: translateX(-100%);
   }
`



const moveText2 = keyframes`

from {
    transform: translateX(0%);
   }

   to {
    transform: translateX(-200%);
   }
`



export const BodyWrap = styled.div`
    background-color: #F2F1EF;

    //mobile

    @media only screen and (max-width: 500px) {
        padding: 20px 20px;

        .landingOne {
            display: flex;
            flex-direction: column;
            justify-content: space-between;


            .MainText {
            margin-top: 120px;


            .mainHeadline {

            display: inline-block;
            width: 45vh;
            color: black;
            font-size: 36px;
            line-height: 44px;
            animation:  ${fade} 1s ease-in;    


          

            span {
                color: #E94D35;
            }
        }

        .MainSubtitle {
            width: 40vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 20px;
            animation:  ${fade} 1s ease-in;
            gap: 20px;
          
          
          
            p {
                color: black;
                font-size: 20px;
                opacity: 0.55;
                font-weight: 600;
            }

            .starImg {
                display: none;
                width: 60px;
            }

        }

        .actionBtns {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-top: 40px;
            gap: 20px;

            .projectBtn {
                width: 260px;
                height: 48px;
                font-size: 24px;
                background-color: black;
                border: none;
                color: white;

              

               
            }

            .worksBtn {
                width: 260px;
                height: 48px;
                font-size: 24px;
                background: transparent;
                border: 1px black solid;
                color: black;

                :hover {
                    background-color: black;
                    color:white;
                    transition: 0.400s;
                }

                
            }
        }
        }
    }


    .ProfileImg {
        animation: ${fadeImage} 1s;
        width: 350px;
        margin-top: 20px;
    }

    
    .blackBelt {
        display: none;
        overflow: hidden;
        margin-top: 80px;
        left: -10px;
        position: absolute;
        width: 200%;
        height: 8vh;
        flex-direction: row;
        justify-content: space-between;
        background-color: black;
        padding: 10px 20px ;
        rotate: -5deg;

        

        .blackItems1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
            animation: ${moveText} 40s linear infinite;
            animation-delay: -16s;
            gap: 40px;
            h1 {
                width: max-content;
                color:white;
            }
        }
        .blackItems2 {
            padding-left: 140px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            animation: ${moveText2} 40s linear infinite;
            animation-delay: 4s;
            gap: 40px;
            h1 {
                width: max-content;
               
        
            }
        }


     

       
       


    }

    .generalInfo {
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
     
        .nameAndWork {
            width: 100%;
            .nameOfAuthor {
                color: #E94D35;
                font-weight: 600;
                font-size: 24px;
            }
            .workTitle {
                margin-top: 12px;
                color: black;
                font-size: 36px;
            }
        }

        .workInfo {
            margin-top: 20px;
            .quote {
                width: 100%;
                font-size: 32px;
                font-weight: 600;
                color: black;
            }

            .degreeInfo {
                margin-top: 20px;
                width: 100%;
                font-size: 24px;
                color: black;
                opacity: 0.75;

            }

            .landInfos {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 20px;

                .placeInfo {
                    .tash {
                    color: black;
                    font-size: 28px;
                    font-weight: 600;
                    }
                    .pTitle {
                        font-size: 20px;
                        color: #E94D35;
                    }
                }

                .exInfo {
                    .yearEx {
                    color: black;
                    font-size: 28px;
                    font-weight: 600;
                    }
                    .eTitle {
                        font-size: 20px;
                        color: #E94D35;
                    }
                }

                .birthInfo {
                    .dates {
                    color: black;
                    font-size: 28px;
                    font-weight: 600;
                    }
                    .bTitle {
                        font-size: 20px;
                        color: #E94D35;
                    }
                }

                
            }
        }
    }

    .tables {
        margin-top: 80px;
        width: 100%;
        height: auto;
        background: transparent;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .firstCol {
            width: 100%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .secondCol {
            width: 100%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: black;
          
            
        }

        .thirdCol {
            width: 100%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .yearsTitle {
            font-size: 60px;
            color: black;
        }

        .yearsSubtitle {
            font-size: 24px;
            color: black
        }

        .yearsTitleWhite{
            color: white;
            font-size: 60px;
        }

        .yearsSubtitleWhite{
            color: white;
            font-size: 24px;
        }

        
    }

    .recTitle {
        margin-top: 60px;
        color: black;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;
    }

    .recWorks {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 80px;
        margin-bottom: 80px;
    



    }

    .serviceHeadline {
        color: black;
        text-align: center;
    }

    .servicesContainer {
        margin-top: 40px;
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
    }
        
    }


    //ipad
    @media only screen and (min-width: 700px) {
        padding: 20px 40px;

        .landingOne {
            display: flex;
            flex-direction: row;
            justify-content: space-between;


            .MainText {
            margin-top: 120px;


            .mainHeadline {

            display: inline-block;
            width: 36vh;
            color: black;
            font-size: 36px;
            line-height: 48px;
            animation:  ${fade} 1s ease-in;    


          

            span {
                color: #E94D35;
            }
        }

        .MainSubtitle {
            width: 28vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            animation:  ${fade} 1s ease-in;
          
          
          
            p {
                color: black;
                font-size: 16px;
                opacity: 0.55;
                font-weight: 600;
            }

            .starImg {
               
                width: 20px;
            }

        }

        .actionBtns {
            width: 32vh;
            display: flex;
            flex-direction: row;
            gap: 20px;
            margin-top: 40px;

            .projectBtn {
                width: 160px;
                height: 48px;
                font-size: 20px;
                background-color: black;
                border: none;
                padding: 2px 8px;

              

               
            }

            .worksBtn {
                width: 160px;
                height: 48px;
                font-size: 20px;
                padding: 2px 8px;
                background: transparent;
                border: 1px black solid;
                color: black;

                :hover {
                    background-color: black;
                    color:white;
                    transition: 0.400s;
                }

                
            }
        }
        }
    }


    .ProfileImg {
        animation: ${fadeImage} 1s;
        width: 100%;
        margin-top: 100px;
    }

    
    .blackBelt {
        display: none;
        overflow: hidden;
        margin-top: 80px;
        left: -2px;
        position: absolute;
        width: 200%;
        height: 8vh;
        flex-direction: row;
        justify-content: space-between;
        background-color: black;
        padding: 10px 20px ;
        rotate: -4deg;

        

        .blackItems1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
            animation: ${moveText} 40s linear infinite;
            animation-delay: -16s;
            gap: 40px;
            h1 {
                width: max-content;
                color:white;
            }
        }
        .blackItems2 {
            padding-left: 140px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            animation: ${moveText2} 40s linear infinite;
            animation-delay: 4s;
            gap: 40px;
            h1 {
                width: max-content;
               
        
            }
        }


     

       
       


    }

    .generalInfo {
        margin-top: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
     
        .nameAndWork {
            width: 35%;
            .nameOfAuthor {
                color: #E94D35;
                font-weight: 600;
                font-size: 20px;
            }
            .workTitle {
                margin-top: 12px;
                color: black;
                font-size: 32px;
            }
        }

        .workInfo {
            width: 65%;
            .quote {
                font-size: 24px;
                font-weight: 600;
                color: black;
            }

            .degreeInfo {
                margin-top: 20px;
                font-size: 20px;
                color: black;
                opacity: 0.75;

            }

            .landInfos {
                margin-top: 20px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .placeInfo {
                    .tash {
                    color: black;
                    font-size: 20px;
                    font-weight: 600;
                    }
                    .pTitle {
                        font-size: 16px;
                        color: #E94D35;
                    }
                }

                .exInfo {
                    .yearEx {
                    color: black;
                    font-size: 20px;
                    font-weight: 600;
                    }
                    .eTitle {
                        font-size: 16px;
                        color: #E94D35;
                    }
                }

                .birthInfo {
                    .dates {
                    color: black;
                    font-size: 20px;
                    font-weight: 600;
                    }
                    .bTitle {
                        font-size: 16px;
                        color: #E94D35;
                    }
                }

                
            }
        }
    }

    .tables {
        margin-top: 80px;
        width: 100%;
        height: auto;
        background: transparent;
        border: 2px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .firstCol {
            width: 33%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .secondCol {
            width: 33%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: black;
          
            
        }

        .thirdCol {
            width: 33%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .yearsTitle {
            font-size: 60px;
            color: black;
        }

        .yearsSubtitle {
            font-size: 20px;
            text-align: center;
            color: black
        }

        .yearsTitleWhite{
            color: white;
            font-size: 60px;
        }

        .yearsSubtitleWhite{
            color: white;
            text-align: center;
            font-size: 20px;
        }

        
    }

    .recTitle {
        margin-top: 60px;
        color: black;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;
    }

    .recWorks {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 80px;
        margin-bottom: 80px;
    



    }

    .serviceHeadline {
        color: black;
        text-align: center;
    }

    .servicesContainer {
        margin-top: 40px;
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
    }
        
    }

  
   //desktop
    @media only screen and (min-width: 1000px) {
        padding: 20px 100px;

        .landingOne {
            display: flex;
            flex-direction: row;
            justify-content: space-between;


            .MainText {
            margin-top: 160px;


            .mainHeadline {

            display: inline-block;
            width: 65vh;
            color: black;
            font-size: 52px;
            line-height: 60px;
            animation:  ${fade} 1s ease-in;    


          

            span {
                color: #E94D35;
            }
        }

        .MainSubtitle {
            width: 55vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            animation:  ${fade} 1s ease-in;
          
          
          
            p {
                color: black;
                font-size: 24px;
                opacity: 0.55;
                font-weight: 600;
            }

            .starImg {
               
                width: 28px;
            }

        }

        .actionBtns {
            width: 60vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 40px;

            .projectBtn {
                width: 200px;
                height: 48px;
                font-size: 20px;
                background-color: black;
                border: none;

              

               
            }

            .worksBtn {
                width: 200px;
                height: 48px;
                font-size: 20px;
                background: transparent;
                border: 1px black solid;
                color: black;

                :hover {
                    background-color: black;
                    color:white;
                    transition: 0.400s;
                }

                
            }
        }
        }
    }


    .ProfileImg {
        animation: ${fadeImage} 1s;
        width: 550px;
        margin-top: 60px;
    }

    
    .blackBelt {
        overflow: hidden;
        margin-top: 80px;
        left: -10px;
        position: absolute;
        width: 200%;
        height: 8vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: black;
        padding: 10px 20px ;
        rotate: -5deg;

        

        .blackItems1 {
            width: 100%;
            display: flex;
            justify-content: space-between;
            animation: ${moveText} 40s linear infinite;
            animation-delay: -16s;
            gap: 40px;
            h1 {
                width: max-content;
                color:white;
            }
        }
        .blackItems2 {
            padding-left: 140px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            animation: ${moveText2} 40s linear infinite;
            animation-delay: 4s;
            gap: 40px;
            h1 {
                width: max-content;
               
        
            }
        }


     

       
       


    }

    .generalInfo {
        margin-top: 420px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
     
        .nameAndWork {
            width: 60vh;
            .nameOfAuthor {
                color: #E94D35;
                font-weight: 600;
            }
            .workTitle {
                margin-top: 12px;
                color: black;
                font-size: 40px;
            }
        }

        .workInfo {
            
            .quote {
                width: 80vh;
                font-size: 32px;
                font-weight: 600;
                color: black;
            }

            .degreeInfo {
                margin-top: 20px;
                width: 80vh;
                font-size: 20px;
                color: black;
                opacity: 0.75;

            }

            .landInfos {
                margin-top: 20px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                .placeInfo {
                    .tash {
                    color: black;
                    font-size: 28px;
                    font-weight: 600;
                    }
                    .pTitle {
                        font-size: 20px;
                        color: #E94D35;
                    }
                }

                .exInfo {
                    .yearEx {
                    color: black;
                    font-size: 28px;
                    font-weight: 600;
                    }
                    .eTitle {
                        font-size: 20px;
                        color: #E94D35;
                    }
                }

                .birthInfo {
                    .dates {
                    color: black;
                    font-size: 28px;
                    font-weight: 600;
                    }
                    .bTitle {
                        font-size: 20px;
                        color: #E94D35;
                    }
                }

                
            }
        }
    }

    .tables {
        margin-top: 80px;
        width: 100%;
        height: auto;
        background: transparent;
        border: 2px solid black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .firstCol {
            width: 33%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .secondCol {
            width: 33%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: black;
          
            
        }

        .thirdCol {
            width: 33%;
            padding: 60px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .yearsTitle {
            font-size: 60px;
            color: black;
        }

        .yearsSubtitle {
            font-size: 28px;
            color: black
        }

        .yearsTitleWhite{
            color: white;
            font-size: 60px;
        }

        .yearsSubtitleWhite{
            color: white;
            font-size: 28px;
        }

        
    }

    .recTitle {
        margin-top: 60px;
        color: black;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;
    }

    .recWorks {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 80px;
        margin-bottom: 80px;
    



    }

    .serviceHeadline {
        color: black;
        text-align: center;
    }

    .servicesContainer {
        margin-top: 40px;
        margin-bottom: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
    }
        
    }
`