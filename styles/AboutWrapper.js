import styled from "styled-components";


export const AboutWrapper = styled.div`
  background-color: #F2F1EF;

      //mobile
      @media only screen and (max-width: 500px) {
        padding: 20px 20px;

        .aboutContent {
            padding: 0px 20px;
        }
        .aboutIntro {
            margin-top: 40px;
            color: black;
            font-size: 28px;
            text-align: center;
            padding: 0px 10px;
        }
        .picContainer {
            margin-top: 40px;
            display: flex;
            justify-content: center;
            .aboutMePic {
                width: 1000px;
            }
        }

        .infoAboutMe {
            margin-top: 20px;
            color: black;
             
            font-size: 20px;
        }

        .callBtns {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 20px;

            .hireBtn {
                width: 100%;
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

            .seeBtn {
                padding: 0px 8px;
                width: 100%;
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
            font-size: 20px;
            color: black
        }

        .yearsTitleWhite{
            color: white;
            font-size: 60px;
        }

        .yearsSubtitleWhite{
            color: white;
            font-size: 20px;
        }

        
    }
    }
     //Ipad
     @media only screen and (min-width: 700px) {
        padding: 20px 40px;

        .aboutContent {
            padding: 0px 20px;
        }
        .aboutIntro {
            margin-top: 40px;
            color: black;
            font-size: 44px;
            text-align: center;
            padding: 0px 100px;
        }
        .picContainer {
            margin-top: 40px;
            display: flex;
            justify-content: center;
            .aboutMePic {
                width: 1000px;
            }
        }

        .infoAboutMe {
            margin-top: 20px;
            color: black;
             
            font-size: 20px;
        }

        .callBtns {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 100px;

            .hireBtn {
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

            .seeBtn {
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

        .tables {
        margin-top: 40px;
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
            font-size: 24px;
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
            font-size: 24px;
        }

        
    }
    }


    //desktop
    @media only screen and (min-width: 1000px) {
        padding: 20px 160px;

        .aboutContent {
            padding: 0px 120px;
        }
        .aboutIntro {
            margin-top: 40px;
            color: black;
            font-size: 44px;
            text-align: center;
            padding: 0px 100px;
        }
        .picContainer {
            margin-top: 40px;
            display: flex;
            justify-content: center;
            .aboutMePic {
                width: 1100px;
            }
        }

        .infoAboutMe {
            margin-top: 20px;
            color: black;
             
            font-size: 20px;
        }

        .callBtns {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 100px;

            .hireBtn {
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

            .seeBtn {
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

        .tables {
        margin-top: 40px;
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
    }

`