import React from 'react';
import web from "../src/images/image2.svg";
import Common from "./Common";
const Home =()=> {
    return (
        <>
        <Common 
        name="Welcome to Home Page" 
        imgsrc={web}
        visit="/Service"
        btname="Get Started"
        />
        </>
    );
};

export default Home;