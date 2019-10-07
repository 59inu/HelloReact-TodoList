import React from 'react';

const Group = (props) => {
    return ( 
        <span className='group' id = {props.group}
            onClick={(event)=>{
                const on = 'groupOn';
                let target = document.getElementById(props.group).classList;

                if(Array.prototype.indexOf.call(target,on) >= 0){
                    let newTask = [...props.task]
                    newTask.map((t)=>{
                        t.filter = true;
                    })
                    let groups =  document.getElementsByClassName('group')
                    Array.prototype.map.call(groups,(node)=>{
                        node.classList.remove(on)
                    })
                    props.updateState(newTask,'task')
                } else {
                    let newTask = [...props.task]
                    newTask.map((t)=>{
                        t.filter = true;
                    })
                    let groups =  document.getElementsByClassName('group')
                    Array.prototype.map.call(groups,(node)=>{
                        node.classList.remove(on)
                    })
                    target.add(on)
                    newTask.map((t)=>{
                        if(t.group !== props.group){
                            t.filter = false;
                        }
                    })
                    props.updateState(newTask,'task')
                    props.selectGroup(props.group)
                }
            }
        }>
            {props.group}
            <a className='remove' title='지울래요?'
                    onClick={()=>{
                        let removedTask = [];
                        props.task.map((t)=>{
                            if(t.group !== props.group){
                                removedTask.push(t)
                            }
                        })
                        props.updateState(removedTask,'task')

                        let removedGroups = [];
                        props.groups.map((g)=>{
                            if(g !== props.group){
                                removedGroups.push(g)
                            }
                        })
                        console.log("삭제될 거 지운 그룹스: " +removedGroups)
                        props.updateState(removedGroups,'groups')
                    }}>
                    '✘'
            </a>
        </span>
    );
}
 
export default Group;