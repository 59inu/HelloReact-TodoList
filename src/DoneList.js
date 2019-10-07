import React from 'react';
import ListElement from './ListElement';

const DoneList = (props) => {
    return (
        <div className = 'list doneList'> 
        {props.task.map((t)=>{
            if(t.status === "done"){
                if(t.filter){
                    return <ListElement task={t} category={props.category} key={props.task.id}
                                        tasks = {props.task}
                                        count = {props.count}
                                        updateState = {props.updateState}
                                        handleSwitch = {props.handleSwitch}
                                        selectGroup = {props.selectGroup}
                                        />
                }
            }
        })
        }
    </div>
    )
}

export default DoneList;