import './item.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular, solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "react-router-dom"
import { useState } from 'react'

export default function Item(props){
    const [favState,setFabState] =  useState(false);
    function handlefav(){
        setFabState(!favState);
    }
    return(
    <div  className="search-item">
        <div onClick={handlefav} className='heart-container'>
            <FontAwesomeIcon icon={favState?solid('heart'):regular('heart')}/>
        </div>
        <Link to={`/details/`+props.props.id}>
        <img src={props.props.image} alt=""></img>
        <div className='item-name'>
            {props.props.name}
        </div>
        <div className='item-title'>
            {props.props.title}
        </div>
        <div className='item-price'>
            {props.props.price}
        </div>
    </Link>
    </div>
    )
}