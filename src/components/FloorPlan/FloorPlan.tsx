import React from "react";

const FloorPlan: React.FC = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 

<img
                            // className="office-image"
                            src="/floorPlan.png"
                            style={{width: '80%', height: 'auto', borderRadius: '10px', justifySelf: 'center', alignSelf: 'center' }}
                        />

        </div>
    );
}


export default FloorPlan; // Ensure the component is exported for use in other files