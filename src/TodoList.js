import React from 'react';
import ListElement from './ListElement';

const TodoList = (props) => {
    return (
        <div className='list todoList'>
            {props.task.map((t)=>{
                if(t.status === "todo"){
                    if(t.filter){
                        return <ListElement task={t} category={props.category} key={props.task.id}
                                            tasks = {props.task}
                                            count = {props.count}
                                            updateState = {props.updateState}
                                            handleSwitch = {props.handleSwitch}
                                            groups = {props.groups}
                                            selectGroup = {props.selectGroup}/>
                    }
                }
            })
            }
        </div>
    )
}

export default TodoList;