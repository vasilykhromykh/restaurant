import React from 'react';
import {Link} from "react-router-dom";
import './HomeButton.modules.scss'
function HomeButton() {
    return (
        <div className='HomeButton'>
       <Link  to='/'>
           <p className='button'>Back</p>
       </Link>
        </div>
    );
}

export default HomeButton;