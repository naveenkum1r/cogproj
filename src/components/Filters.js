import './filters.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import { useState } from 'react';

export default function Filters(){
    const [state,setState]=useState('2');
    function handlecheck(e){
        setState(e.target.value);
    }
    function donothing() {
        
    }
    return(
        <>
        <div onChange={donothing} className="price-container">
            <div className="price-header">
                Price
            </div>
            
            <div>
                <input type="radio" value="1" checked={state==='1'} onClick={handlecheck}></input>
                <div>Any Price</div>
            </div>
            <div>
                <input type="radio" value="2" checked={state==='2'} onClick={handlecheck}></input>
                <div>Filter by my balance</div>
            </div>
            <div>
                <input type="radio" value="3" checked={state==='3'} onClick={handlecheck}></input>
                <div>Price Range</div>
            </div>
        </div>
        <div className='categories-container'>
            <div className="catergories-header">
                Category
            </div>
            <div className='catergories-count'>
                All categories(24323)
            </div>
            <div className='each-categories-container'>
                <div className='category-top'>
                    <div className='category-name'>Electronics</div>
                    <div className='category-arrow'>
                        <FontAwesomeIcon icon={solid('angle-down')}/>
                    </div>
                </div>
                <div className='category-value'>
                    <div className='categories'>Mobile</div>
                    <div className='categories'>Fridge</div>
                    <div className='categories'>Washing machine</div>
                </div>
            </div>
            <div className='each-categories-container'>
                <div className='category-top'>
                    <div className='category-name'>Fashion</div>
                    <div className='category-arrow'>
                        <FontAwesomeIcon icon={solid('angle-down')}/>
                    </div>
                </div>
                <div className='category-value'>
                    <div className='categories'>Shirt</div>
                    <div className='categories'>Top</div>
                    <div className='categories'>Trousers</div>
                </div>
            </div>
        </div>
        </>
    )
}