import React from "react";
import Navbar from "./Navbar";
import Footer from "../component/footer";
import FeatReport from "../component/feport";
import SkillPrice from "../component/skills&price";
import BlogContact from "../component/blog&contact";
import Teaminfo from "../component/team&info";
import Banner from "../component/banner";
import "../app/globals.css";



export default function  ({Component, pageProps}){
    return(
        <>
        <Navbar/>
        <Banner/>
        <FeatReport/>
        <SkillPrice/>
        <Teaminfo/>
        <BlogContact/>
        <Footer/>
        </>
    );
}
