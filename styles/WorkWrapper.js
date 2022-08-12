import styled from "styled-components";
import { keyframes } from "styled-components";

const appear = keyframes`
    from {
        transform: translateY(-100%);
        opacity: 0;
    }

    from {
        transform: translateY(100%);
        opacity: 1;
    }

`



export const WorksWrapper = styled.div`
    background-color: #F2F1EF;

      //mobile
      @media only screen and (max-width: 500px) {
       
       padding: 20px 20px;

       .wContainer {
           animation: ${appear} 0.800s ease-in-out;
       }
      
       .workIntro {

           text-align: center;
           margin-top: 40px;
           font-size: 40px;
           color: black;
       }

       .workList {
           margin-top: 40px;
           margin-bottom: 40px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           gap: 80px;
       }

   }

   //Ipad
   @media only screen and (min-width: 700px) {
       
       padding: 20px 40px;

       .wContainer {
           animation: ${appear} 0.800s ease-in-out;
       }
      
       .workIntro {

           text-align: center;
           margin-top: 40px;
           font-size: 40px;
           color: black;
       }

       .workList {
           margin-top: 40px;
           margin-bottom: 40px;
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           gap: 80px;
       }

   }

    //desktop
    @media only screen and (min-width: 1000px) {
       
        padding: 20px 100px;

        .wContainer {
            animation: ${appear} 0.800s ease-in-out;
        }
       
        .workIntro {

            text-align: center;
            margin-top: 40px;
            font-size: 40px;
            color: black;
        }

        .workList {
            margin-top: 40px;
            margin-bottom: 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 80px;
        }

    }

`