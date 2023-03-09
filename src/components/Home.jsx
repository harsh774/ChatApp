import React from "react";
import Chat from "../innercomponents/Chat";
import Sidebar from "../innercomponents/Sidebar";
import './style.css'

const Home = () =>{
    return(
        <div className="home">
            <div className="container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}
export default Home;