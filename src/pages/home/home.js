import React from "react";
import NavbarHome from "../../component/home/navbar/navbar-home";
import Content from "../../component/home/content/content"
import Footer from "../../component/home/footer/footer"
import "../home/home.css"

function Home(){
    return(
        <>
        <div className="body">
        <NavbarHome />
        <Content />
        <div className="backgroundAdd">

        </div>
        <Footer />
        </div>
        </>
        

    )
}

export default Home;