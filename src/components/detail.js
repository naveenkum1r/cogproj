import './detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import { useParams} from 'react-router-dom';
import { useState } from 'react';

export default function Details(props){
    const params = useParams();
    const [itemnumber,setitemnumber] = useState(1);
    function handleless(){
        if(itemnumber>1){
            setitemnumber(itemnumber-1);
        }
    }
    function handleadd(){
        setitemnumber(itemnumber+1);
    }
    return(
        <div className="detail-container">
            <div className='detail'>
                <div className="breadcrumb">
                    Home | Shopping Cart
                </div>
                <div className='detail-left-right-container'>
                        <div className='detail-left'>
                            <img src={props.data[params.id-1].image} alt=""></img>
                        </div>
                        <div className='detail-right'>
                            <div className='detail-title'>{props.data[params.id-1].title}</div>
                            <div className='detail-name'>
                            {props.data[params.id-1].name}
                        </div>
                        <div className='detail-price'>
                            Price: <span>{props.data[params.id-1].price}</span>
                        </div>
                        <div className='detail-inclusive'>
                            <FontAwesomeIcon icon={solid('check')}/>
                            <div>Item price includes shipping and handling</div>
                        </div>
                        <div className='detail-items'>
                            <div className='detail-item-counter'>
                                <div className='detail-item-less' onClick={handleless}>-</div>
                                <div className='detail-item-number'>{itemnumber}</div>
                                <div className='detail-item-add' onClick={handleadd}>+</div>
                            </div>
                            <div className='detail-add-button'>
                                <div className='detail-cart-icon'>
                                    <FontAwesomeIcon icon={solid('shopping-cart')} />
                                </div>
                                <div>
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                            <div className='detail-wish-list'>
                                <FontAwesomeIcon icon={regular('heart')} />
                                <div>
                                    Add to Wish List
                                </div>
                            </div>
                            <div className='detail-total'>
                                <div>Total</div>
                                <div className='detail-total-number'>{props.data[params.id-1].price.match(/\d+/)[0] * itemnumber} Points</div>
                            </div>
                            <div className='detail-shipping'>
                                <FontAwesomeIcon icon={solid('truck-fast')} />
                                <div>Usually ships within 7 buisness days</div>
                            </div>
                            <div className='detail-product-detail'>
                                <div>Product Description</div>
                                <p>{props.data[params.id-1].title}</p>
                                <p>{props.data[params.id-1].title}, you can take calls</p>
                            </div>
                        </div>
                        
                    </div>    
            </div>
        </div>
    )
}