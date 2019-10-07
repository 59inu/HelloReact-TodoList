import React from 'react';
import Search from './Search';
import Add from './Add';

const Head = (props) => {
    return (
        <div className='head layerBox'>
            <div className='count'> 
            <span>I DID IT, incredibly charming scheduler..</span>   
           </div>
            <Search 
                handleSearch = {props.handleSearch}
                escapeKey = {props.escapeKey}/>
            <Add 
                escapeKey = {props.escapeKey}
                selectedGroup = {props.selectedGroup}
                handleAddSet = {props.handleAddSet}/>
        </div>
    )
}

export default Head