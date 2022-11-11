import Filters from './Filters'
import Item from './item'
import './search.css'

export default function Search(props){
    console.log(props)
    return(
        <div className="search-container">
            <div className="search">
                <div className="breadcrumb">
                    Home | Shopping Cart
                </div>
                <div className="search-header">
                    <div>
                        <h1>Top results</h1>
                    </div>
                    <div className="result-number">
                        {props.data.length} Results
                    </div>
                </div>
                <div className="search-main">
                    <div className='search-top'>
                        <div className='filter-header'>
                            Filters
                        </div>
                        <div className='sort'>
                            <label for="sort-order">Sort By</label>
                            <select id="sort-order">
                                <option>Most Popular</option>
                                <option>Most Relevant</option>
                            </select>
                        </div>
                    </div>
                    <div className='search-left-right-container'>
                        <div className='search-left'>
                            <Filters></Filters>
                        </div>
                        <div className='search-right'>
                            <div className='search-items'>
                                {props.data.map((d,i)=>{
                                    return (
                                        <Item props={d} key={`item`+i}></Item>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}