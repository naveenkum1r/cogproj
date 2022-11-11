import { Link } from "react-router-dom";

import './secondheader.css';

export default function SecondHeader(){
    return(
        <div className="navbar-container">
            <div className="navbar">
                <Link to="/">Electronics</Link>
                <Link to="/">Sports</Link>
                <Link to="/">Outdoor</Link>
                <Link to="/">Travel</Link>
                <Link to="/">Health</Link>
            </div>
        </div>
    )
}