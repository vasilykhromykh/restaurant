import React from 'react';
import './MenuPage.modules.scss';
import HomeButton from "../HomeButton/HomeButton";

function MenuPage() {
    return (
        <div className="MenuPage">


            <div className="Sections">

                <div className='Section'>
                    <div><h1>Завтраки</h1></div>
                    <img width={200} src="UI/19_03_DSC_5338.jpg"/>

                </div>
                <div className='Section'>
                    <div><h1>Обеды</h1></div>
                    <img width={200} src="UI/19_03_DSC_5338.jpg"/>
                </div >
                <div className='Section'>
                    <div><h1>Ужин</h1></div>
                    <img width={200} src="UI/19_03_DSC_5338.jpg"/>
                </div>

            </div>
            <HomeButton/>

        </div>

    );
}

export default MenuPage;
