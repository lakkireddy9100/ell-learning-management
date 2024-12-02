import animationData from "./loading-animation.json";
import React from "react";
import Lottie from "lottie-react";

const LoadingScreen = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", // Full screen height
                width: "100vw", // Full screen width
                backgroundColor: "#f4f4f4", // Light background color
                position: "fixed", // Sticks to the viewport
                top: 0,
                left: 0,
                zIndex: 9999, // Ensures it overlays everything
            }}
        >
            <div style={{ textAlign: "center" }}>
                <Lottie
                    animationData={animationData}
                    style={{
                        height: 200, // Adjust the height of the animation
                        width: 200, // Adjust the width of the animation
                        margin: "0 auto", // Center the Lottie animation horizontally
                    }}
                />
                <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#555" }}>
                    Loading your amazing experience...
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
