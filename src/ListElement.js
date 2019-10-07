import React from 'react';

const ListElement = (props) => {
    console.log(`새로운 리스트 만들고 있습니다.`)
    console.log(`할일은: ${props.task.value}`)
    console.log(`그룹은: ${props.task.group}` )

    return (
        <div className='listElement' id={props.task.id}>
            <input type = 'checkbox' 
                onClick={()=>{
                    props.handleSwitch(props.task, props.task.status)}
            }></input>
            <span className='task'>
                {props.task.value}
            </span>
            <span className='groupTag'>
                {props.task.group? '#'+props.task.group : ''}
            </span>
            <a className='remove' title='지울래요?'
                onClick={()=>{
                    let removedTask = [];
                        props.tasks.map((t)=>{
                            if(t.value !== props.task.value){
                                removedTask.push(t)
                            }
                        })
                        props.updateState(removedTask,'task')
                        props.updateState(props.count -1,'count')}}>
            ✘</a>
        </div>
    );
}
 
export default ListElement;