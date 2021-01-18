import React from "react";
import CraftDetail from "./CraftDetail"

const KnittingContainer = ({crafts}) => {

    if (!Array.isArray(crafts)) {
        return(
            <p>Loading...</p>
        )
    }

    const knits = crafts.filter(craft => craft.tags[0].id === 1);

    const knitsList = knits.map((knits, index) => {
        return (
            <div key={knits.id}>
                <CraftDetail craft={knits} />
            </div>
        );
    });
    
    return(
        <div className="postContainer">
            {knitsList}
         </div>
    )
}

export default KnittingContainer;