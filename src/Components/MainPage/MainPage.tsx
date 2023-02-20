import React from 'react';
import './MainPage.modules.scss'
import {Link} from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton";
function MainPage(){
    return (
        <div className="MainPage">
<div className='photos'>
    <div>
        <Link to="gallery">
        <div className="container">

                <img src="UI/14_01_DSC_0736.jpg" alt="Avatar" className="image"/>

            <div className="overlay">
                <div className="text">Show gallery</div>

            </div>

        </div>
        </Link>
                <img className='arr' src='UI/left-arrow.png' width={250} height={250}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
    <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <img className='arr' src='UI/right-arrow-angle.png' width={250} height={250}/>
        <Link to="gallery">
            <div className="container">

                <img src="UI/11_02_DSC_0684.jpg" alt="Avatar" className="image"/>

            <div className="overlay">
                <div className="text">Show gallery</div>
            </div>
        </div>
        </Link>

    </div>
    <div>
        <Link to="gallery">
        <div className="container">
             <img src="UI/10_02_DSC_0791.jpg" alt="Avatar" className="image"/>
                <div className="overlay">
                    <div className="text">Show gallery</div>
                </div>
        </div>
        </Link>
        <img className='arr' src='UI/arrow-left.png' width={250} height={250}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
</div>
<div className="Sections" >
   <Link to='reserve'><p className="hover-underline-animation">Reserve a table</p></Link>

 <Link to='map'>   <p className="hover-underline-animation">Location</p></Link>
    <Link to='gallery'>   <p className="hover-underline-animation">Gallery</p></Link>
    <Link to='menu'>  <p className="hover-underline-animation">Menu</p></Link>
</div>





        </div>
    );
};

export default MainPage;