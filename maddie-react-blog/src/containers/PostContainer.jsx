import React from "react";
import CraftDetail from "../components/CraftDetail"
import "../components/CraftDetail.css";

const PostContainer = ({crafts}) => {

    if (!Array.isArray(crafts)) {
        return(
            <p>Loading...</p>
        )
    }

    const craftsList = crafts.map((craft, index) => {
        return (
            <div key={craft.id}>
                <CraftDetail craft={craft} />
            </div>
        );
    });
    
    return(
        <div className="postContainer">
            <p>Hi</p>
            {craftsList}
         </div>
    )
}

export default PostContainer;