import React from 'react';
import Common from "./Common";
import web from "../src/images/image5.svg";
const Signup =()=> {
    return (
        <>
        <Common 
        name='Welcome to Signup Page' 
        imgsrc={web}
        visit="/Contact"
        btname="Contact Now"
        />
        </>
    );
};
export default Signup;