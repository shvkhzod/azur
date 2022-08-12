import styled from "styled-components";

export const Footer = styled.div`

    //mobile
    @media only screen and  (max-width: 500px) {
        width: 100%;
        height: auto;
        padding: 40px 100px;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .whiteLogo {
            width: 100px;
        }

        p {
            font-size: 24px;
            text-align: center;
        }
    }

    //Ipad
    @media only screen and  (min-width: 700px) {
        display: flex;
        width: 100%;
        height: auto;
        padding: 40px 60px;
        background-color: black;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      
        .whiteLogo {
            width: 100px;
        }

        p {
            font-size: 32px;
            text-align: center;
        }
        
    }

    //desktop
    @media only screen and  (min-width: 1000px) {
        width: 100%;
        height: 24vh;
        padding: 40px 100px;
        background-color: black;
        display: flex;
        justify-content: space-between;

        .whiteLogo {
            width: 100px;
        }

        p {
            font-size: 24px;
        }
    }

`