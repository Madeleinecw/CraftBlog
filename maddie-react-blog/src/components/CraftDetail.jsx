import React from "react";
import "./CraftDetail.css";

const CraftDetail = ({craft}) => {
    if (!craft){
        return "Loading..."
    }

    // const url = "/crafts/" + craft.id  

    const imgURL = "http://localhost:1337" + craft.Media[0].formats.medium.url

    return (
        <>
        <div className="craftContainer" key={craft.id}>
        <h2>{craft.Name}</h2>
        <img className="image" src={imgURL} height="400" width="400"/>
        <p className="tags">{craft.tags[0].Name}</p>
        </div>
        </>
    )
}

export default CraftDetail