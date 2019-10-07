import React from 'react';
import TodoList from './TodoList';

const Todo = (props) => {
    return (
        <div className = 'todo layerBox'> 
            <div className = 'title'> 
                To do 🐣 : 
            </div>
            <TodoList task = {props.task}
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

export default Todo;