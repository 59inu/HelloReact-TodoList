import React from 'react';

const Add = (props) => {
    return (
        <div className='add'>
            <form 
                onSubmit={(e)=>{
                 let target = document.querySelector(".addBox");
                 target = {value : target.value, 
                           status : "todo",
                           group : props.selectedGroup,
                           filter : true,
                           id : String(props.count + 1)}
                 e.preventDefault();
                 document.querySelector(".addBox").value = ''
                 props.handleAddSet(target,"task")
                }}
                
                 onKeyDown={(e)=>{props.escapeKey(e,"addBox")}}
            >
                <input className='addBox' type = 'text' placeholder = '  새로운 할 일이 있나요?'></input>
                <button className='IconBox'><img className='icon'src='/images/checked.png' alt='뭐지'></img></button>
            </form>
        </div>
    )
}

export default Add;