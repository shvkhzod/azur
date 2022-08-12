import styled from "styled-components";

export const ServiceWrapper = styled.div`

        //mobile

        @media only screen  and (max-width:500px) {
        :hover{
            background-color: black;
            transition: 0.400s;
            
            h1 {
                color: white;

            }

            p {
                color: white;
            }
        }
        width: 600px;
        border: 2px solid black;
        padding: 24px;
        h1 {
            color:black;
            font-size: 32px;
        }

        p {
            margin-top: 12px;
            color: black;
            font-size: 20px;
        }

    }

    //Ipad
    @media only screen  and (min-width:700px) {
        :hover{
            background-color: black;
            transition: 0.400s;
            
            h1 {
                color: white;

            }

            p {
                color: white;
            }
        }
        width: 100%;
        border: 2px solid black;
        padding: 24px;
        h1 {
            color:black;
            font-size: 32px;
        }

        p {
            margin-top: 12px;
            color: black;
            font-size: 20px;
        }

    }
    

    //desktop

    @media only screen  and (min-width:1000px) {
        :hover{
            background-color: black;
            transition: 0.400s;
            
            h1 {
                color: white;

            }

            p {
                color: white;
            }
        }
        width: 600px;
        border: 2px solid black;
        padding: 24px;
        h1 {
            color:black;
            font-size: 32px;
        }

        p {
            margin-top: 12px;
            color: black;
            font-size: 20px;
        }

    }


`