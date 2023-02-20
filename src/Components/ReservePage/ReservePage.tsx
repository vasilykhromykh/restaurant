import {Link} from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton"
import './ReservePage.modules.scss'


function ReservePage() {
    return (
        <div className='ReservePage'>
            <h1>Reserve a table </h1>
            <p className="number">+7 777 777 77 77</p>
            <HomeButton />
        </div>

    );
}

export default ReservePage;