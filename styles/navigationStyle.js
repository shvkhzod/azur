import styled from "styled-components";

export const NavWrapper = styled.div`

//mobile
@media only screen and (max-width: 500px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo {
            width: 60px;
            z-index: 1;
        }

        .navRoutes {
            display: none;
            opacity: 0;
            position: absolute;
            width: 100%;
            margin-left: -20px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            padding: 20px 0px;
            transition: 0.400s;

            p {
                color: black;
                font-weight: 500;
                font-size: 20px;
            }

            .active {
                color: #E94D35;
            }
        }


        .openNav {
            margin-top: 180px;
            position: absolute;
            width: 100%;
            margin-left: -20px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            padding: 20px 0px;
            transition: 0.400s ease-in-out;


            p {
                color: black;
                font-weight: 500;
                font-size: 20px;
            }

            .active {
                color: #E94D35;
            }
        }


        .talkBtn {
            display: none;
            background-color: transparent;
            width: 15vh;
            height:5vh;
            color: black;
            font-size: 16px;
            font-weight: 600;
            border: 2px solid black;

            :hover {
                    background-color: black;
                    color:white;
                    transition: 0.400s;
                }

        }

        .hamburger {
            z-index: 1;
            width: 48px;
            height: 48px;
            background-color: black;
            padding: 8px;
            transition: 0.400s;


        }

        .openHam {
            z-index: 1;
            width: 48px;
            height: 48px;
            background-color: #E94D35;
            padding: 8px;
            transition: 0.400s;


        }
    }

    //Ipad
    @media only screen and (min-width: 700px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo {
            width: 60px;
        }

        .navRoutes {
            width: 25vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            p {
                color: black;
                font-weight: 500;
            }

            .active {
                color: #E94D35;
            }
        }


        .talkBtn {
            background-color: transparent;
            width: 15vh;
            height:5vh;
            color: black;
            font-size: 16px;
            font-weight: 600;
            border: 2px solid black;

            :hover {
                    background-color: black;
                    color:white;
                    transition: 0.400s;
                }

        }

        .hamburger {
            display: none;
        
            width: 48px;
            height: 48px;
            background-color: black;
            padding: 8px;
            transition: 0.400s;


        }

        .openHam {
            display: none;
           
            width: 48px;
            height: 48px;
            background-color: #E94D35;
            padding: 8px;
            transition: 0.400s;


        }
    }


//Desktop
    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo {
            width: 60px;
        }

        .navRoutes {
            width: 25vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            p {
                color: black;
                font-weight: 500;
            }

            .active {
                color: #E94D35;
            }
        }


        .talkBtn {
            background-color: transparent;
            width: 15vh;
            height:5vh;
            color: black;
            font-size: 16px;
            font-weight: 600;
            border: 2px solid black;

            :hover {
                    background-color: black;
                    color:white;
                    transition: 0.400s;
                }

        }
    }

`