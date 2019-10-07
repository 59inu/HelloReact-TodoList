import React from 'react';
import Group from './Group'

const Groups = (props) => {
    return ( 
        <div className = 'groups'>

                {props.groups?
                props.groups.map((el)=>
                <Group key = {el} group={el} 
                        groups = {props.groups}
                        selectGroup = {props.selectGroup}
                        updateState = {props.updateState}
                        handleSwitch = {props.handleSwitch}
                        task = {props.task}/> ):
                ''}


                <form   onSubmit = {(e)=>{
                            e.preventDefault();
                            let target = document.querySelector('.newGroup');
                            props.addGroup(target.value)
                            target.value=''}}

                        onKeyDown = {(e)=>{
                            console.log("이벤트걸립니까")
                            if(e.key === 'Escape'){
                                let target = document.querySelector('.newGroup');
                                console.log(target.value)

                                target.value=''}
                        }}>
                    <input className='newGroup' type='text' placeholder='Add a new group'/>
                </form>               
        </div>
        
    )
}
 
export default Groups;