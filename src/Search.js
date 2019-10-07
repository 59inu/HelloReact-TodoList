import React from 'react';

const Search = (props) =>{
    
    return (
    <div className='search'>
        <input className = 'searchBar' type='text' placeholder="search" 
        onKeyDown={(e)=>{props.escapeKey(e,"searchBar")}}
        onChange={()=>{
            props.handleSearch(document.querySelector('.searchBar').value)}}></input>
    </div>
    )
    
}

export default Search;