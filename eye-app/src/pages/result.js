import React from "react";
import { useLocation } from "react-router-dom";

const Result = (route) => {
    const location = useLocation();
    console.log("loc + "+location);
    console.log("State "+location.state);
    return (
        <div>
            Prediction Results here
            <h2>Name: {location.state.name}</h2>
        <h1></h1>
        </div>
    );
}

export default Result;