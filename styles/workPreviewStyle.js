import styled from "styled-components";

export const PreviewWrapper = styled.div`

       //mobile
       @media only screen and (max-width: 500px) {
        display: block;
        flex-direction: column;
        justify-content: space-between;
        


        .imgContainer {
            width: fit-content;

            .thumbnail {
                position: relative;
                width: 350px;
                height: 335px;
            }
        }

        .workActions {
            display: flex;
            flex-direction: column;
            .postTitle {
                margin-top: 12px;
                width: max-content;
                background-color: #E94D35;
                font-size: 20px;
                padding: 16px 20px;
                text-align: center;
            }

            .postInfo {
                margin-top: 20px;
                width: 100%;
                font-size: 28px;
                color: black;
            }

            .viewBehanceBtn {
                margin-top: 20px;
                width: 28vh;
                height: 6vh;
                border: 1px solid black;
                background: transparent;
                color: black;
                font-size: 20px;
            }
        }



    }

    //Ipad
    @media only screen and (min-width: 700px) {
        display: block;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        justify-content: center;


        .imgContainer {
            width: fit-content;
          

            .thumbnail {
                position: relative;
                width: 740px;
                height: 435px;
               object-position: center;
            }
        }

        .workActions {
            .postTitle {
                margin-top: 20px;
                width: max-content;
                background-color: #E94D35;
                font-size: 28px;
                padding: 16px 20px;
                text-align: center;
            }

            .postInfo {
                margin-top: 20px;
                width: 80vh;
                font-size: 40px;
                color: black;
            }

            .viewBehanceBtn {
                margin-top: 20px;
                width: 28vh;
                height: 6vh;
                border: 1px solid black;
                background: transparent;
                color: black;
                font-size: 20px;
            }
        }



    }


    //desktop
    @media only screen and (min-width: 1000px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;


        .imgContainer {
            width: fit-content;

            .thumbnail {
                position: relative;
                width: 500px;
                height: 335px;
            }
        }

        .workActions {
            .postTitle {
                
                width: max-content;
                background-color: #E94D35;
                font-size: 28px;
                padding: 16px 20px;
                text-align: center;
            }

            .postInfo {
                margin-top: 40px;
                width: 80vh;
                font-size: 40px;
                color: black;
            }

            .viewBehanceBtn {
                margin-top: 80px;
                width: 28vh;
                height: 6vh;
                border: 1px solid black;
                background: transparent;
                color: black;
                font-size: 20px;
            }
        }



    }

`