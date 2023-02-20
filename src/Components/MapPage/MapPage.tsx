import React from 'react';
import './MapPage.modules.scss'
import HomeButton from "../HomeButton/HomeButton";
function MapPage() {
    return (
        <div>
            <h1 >We are here</h1>
            <iframe width="1150" height="821" frameBorder="0" scrolling="no"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?width=1150&amp;height=821&amp;hl=en&amp;q=%D0%A1%D1%82%D0%B0%D1%80%D0%B0%D1%8F%20%D0%9F%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C%20+(Restaurant)&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>


<HomeButton/>
        </div>
    );
}

export default MapPage;