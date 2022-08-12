import React from "react";
import { PreviewWrapper } from "../styles/workPreviewStyle";
import Image from "next/image"
import Thumb1 from "../src/img/thumb1.png"
import Thumb2 from "../src/img/thumb2.png"
import KuficNumbers from "../src/img/KuficNumbers.png"
import Link from "next/link";

 
function WorkPreview(props) {

    let theImg;

    if(props.img == "Thumb1") {
        theImg = Thumb1;
    } else if (props.img == "Thumb2") {
        theImg = Thumb2;
    } else if(props.img == "KuficNumbers") {
        theImg = KuficNumbers
    }
    return(
       <PreviewWrapper style={{flexDirection: props.reverse == "yes" ? "row-reverse" : "row"}}>
       <div className="imgContainer">
       <div className="thumbnail">
            <Image src={theImg} layout="fill" objectFit="cover" alt="Work Preview"/>
        </div>
       </div>

        <div className="workActions">
            <div className="postTitle">
                <p>{props.tag}</p>
            </div>

            <div className="postInfo">
                <p>{props.desc}</p>
            </div>

          <Link href="https://www.behance.net/uzbek?tracking_source=search_users|uzbek">
          <button className="viewBehanceBtn">View On Behance</button>
          </Link>
   
        </div>
       </PreviewWrapper>
    )
}

export default WorkPreview