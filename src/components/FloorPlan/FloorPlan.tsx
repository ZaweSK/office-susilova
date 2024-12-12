import React, { useState } from "react";

const FloorPlan: React.FC = () => {
    const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen state

    const handleToggleFullscreen = () => {
        setIsFullscreen(!isFullscreen); // Toggle fullscreen mode
    };

    return (
        <>
            {/* Main Image */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img
                    src="/floorPlan.png"
                    alt="Floor Plan"
                    style={{
                        width: '80%',
                        height: 'auto',
                        borderRadius: '10px',
                        cursor: 'pointer', // Indicates it's clickable
                    }}
                    onClick={handleToggleFullscreen}
                />
            </div>

            {/* Fullscreen Overlay */}
            {isFullscreen && (
                <span
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)', // Dark overlay
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'pointer', // Close on click
                    }}
                    onClick={handleToggleFullscreen}
                >
                    <img
                        src="/floorPlan.png"
                        alt="Fullscreen Floor Plan"
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            borderRadius: '10px',
                            backgroundColor: 'white', // Optional: White background for the image
                        }}
                    />
                </span>
            )}
        </>
    );
};

export default FloorPlan;