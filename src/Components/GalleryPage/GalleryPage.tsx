import React from 'react';
import './GalleryPage.scss'
import HomeButton from "../HomeButton/HomeButton";
function GalleryPage() {
    const [isBig,setIsBig]=React.useState(false)
    return (
        <div className='GalleryPage' >
<h1>Gallery</h1>
             <img src="UI/01_03_DSC_0901.jpg"  alt="Avatar1" className="image1"/>
            <img src="UI/02_01_DSC_0365.jpg" alt="Avatar2" className="image2"/>
            <img src="UI/06_03_DSC_0460.jpg" alt="Avatar3" className="image3"/>
            <img src="UI/08_00_DSC_0624.jpg" alt="Avatar4" className="image4"/>
            <img src="UI/08_01_DSC_0620.jpg" alt="Avatar5" className="image5"/>
            <img src="UI/09_07_DSC_5370.jpg" alt="Avatar6" className="image6"/>
            <img src="UI/10_02_DSC_0791.jpg" alt="Avatar7" className="image7"/>
            <img src="UI/11_02_DSC_0684.jpg" alt="Avatar8" className="image8"/>
            <img src="UI/13_02_DSC_0733.jpg" alt="Avatar9" className="image9"/>
            <img src="UI/14_01_DSC_0736.jpg" alt="Avatar10" className="image10"/>
            <img src="UI/15_02_DSC_0699.jpg" alt="Avatar11" className="image11"/>
            <img src="UI/17_01_DSC_5261.jpg" alt="Avatar12" className="image12"/>
            <img src="UI/19_03_DSC_5338.jpg" alt="Avatar13" className="image13"/>
            <HomeButton/>
        </div>
    );
}

export default GalleryPage;