import React from "react";
import { ServiceWrapper } from "../styles/ServiceWrapper";


function Service(props) {
    return (

        <ServiceWrapper>
            <h1>{props.headline}</h1>
            <p>{props.sub}
            </p>
        </ServiceWrapper>
    )
}

export default Service