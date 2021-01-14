import React from "react";
import CraftDetail from "./CraftDetail"

const EmbroideryContainer = ({crafts}) => {

    if (!Array.isArray(crafts)) {
        return(
            <p>Loading...</p>
        )
    }

    const embs = crafts.filter(craft => craft.tags[0].id === 2);

    const embsList = embs.map((emb, index) => {
        return (
            <div key={emb.id}>
                <CraftDetail craft={emb} />
            </div>
        );
    });
    
    return(
        <div className="postContainer">
            {embsList}
         </div>
    )
}

export default EmbroideryContainer;
