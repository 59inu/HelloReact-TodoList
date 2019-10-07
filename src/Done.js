import React from 'react';
import DoneList from './DoneList';

const Done = (props) => {
    return (
        <div className = 'done layerBox'>
            <div className = 'title'>
                Done 🐔 :
            </div>
            <DoneList task = {props.task}
                      keyword={props.keyword}
                      count = {props.count}
                      selectedGroup = {props.selectedGroup}
                      selectGroup = {props.selectGroup}
                      updateState = {props.updateState}
                      handleSwitch = {props.handleSwitch}
                      handleRemove = {props.handleRemove}/>
        </div>
    )
}

export default Done;