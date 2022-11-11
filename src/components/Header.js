import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'

import './header.css';

export default function Header(){
    return(
        <div className="header-container">
        <div className="left"> <Link className="logo" to="/">
            <img src="cognizant.png" alt=""></img>
            <div>| Cheers</div>
        </Link>
        </div>
        <div className="right">
        <div className="searchbar">
            <input type="text"></input>
            <FontAwesomeIcon icon={solid('magnifying-glass')}/>
        </div>
        <div className="user">
            <FontAwesomeIcon icon={regular('user')} />
        </div>
        <div className="cart">
            <FontAwesomeIcon icon={solid('shopping-cart')} />
        </div>
        </div>
        </div>
    )
}