import React from 'react';
import Head from './Head';
import Todo from './Todo';
import Done from './Done';
import Groups from './Groups'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      task : [],
      groups : [],
      searchKey : '',
      selectedGroup : '',
      count : 0,
      done : this.state ? this.state.task.filter((t)=>t.status === 'done').length : 0
    }
    this.handleAddSet = this.handleAddSet.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSwitch = this.handleSwitch.bind(this);
    this.updateState = this.updateState.bind(this);
    this.addGroup = this.addGroup.bind(this);
    this.selectGroup = this.selectGroup.bind(this);
  }

  componentDidMount(){
    let task = window.localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
    let groups = window.localStorage.getItem("groups") ? JSON.parse(localStorage.getItem("groups")) : []
    let count = window.localStorage.getItem("count") ? JSON.parse(localStorage.getItem("count")) : 0
    this.setState({
      task : task,
      groups : groups,
      count : count
    })
  }

  componentDidUpdate(){
    localStorage.setItem("task", JSON.stringify(this.state.task));
    localStorage.setItem("count", JSON.stringify(this.state.count));
    localStorage.setItem("groups",JSON.stringify( this.state.groups));
    setInterval(this.oguMessage, 2000)
   }

  /////////////////// 
  oguMessage(){
    let messages = ["R U Sure Human?",
                    "Don't do that. what a rude shit",
                    "Yeah, it's me",
                    "Hey, stop. go make money",
                    "Hi, I'm 59 the Inu",
                    "I'm very sensitive puppy",
                    "what's wrong with you"]
    let message = messages[Math.round(Math.random()*6)]
    document.querySelector('.o9').setAttribute('title',message)
  }

  ////////////////////////

  escapeKey= (e,selector)=>{
    if(e.key === 'Escape'){
    document.querySelector(`.${selector}`).value = ''
  }}

  addGroup(nG){
    let newGroups = [...this.state.groups]
    newGroups.push(nG)
    this.updateState(newGroups,'groups');
  }

  selectGroup(G){
    this.setState({
      selectedGroup : this.state.selectedGroup === G ? '' : G
    })
  }

  updateState(newState,category){
    this.setState({
      [category] : newState
    })
  }

  handleAddSet(target,destination){
    let newState = [...this.state[destination]]
    newState.push(target)
    this.updateState(newState,destination)
    this.setState({
      count : this.state.count + 1
    })
  }  

  handleSwitch(task, status){
    let target = status === 'todo' ? 'done' : 'todo';
    const change = () => {
      task.status = target
      let targetIdx;
      let newTask = [...this.state.task]
      newTask.map((t,i)=>{
        if(t.id === task.id){
          targetIdx = i
        }
      })
      this.updateState(newTask.splice(targetIdx,1,task))
    }
    change()
  }

  handleSearch(keyword){
    const on = 'groupOn';
    let newTask = [...this.state.task]
    newTask.map((t)=>{
        t.filter = true;
    })
    let groups =  document.getElementsByClassName('group')
    Array.prototype.map.call(groups,(node)=>{
        node.classList.remove(on)
    })

    this.setState({
      searchKey : String(keyword)
    })

    let Kword = keyword ? String(keyword) : ''
    if(Kword.length){ 
      newTask.map((t)=>{
        t.value.search(Kword) < 0 ?
        t.filter = false :
        t.filter = true;
      })} else {
        newTask.map((t)=>{
        t.filter = true;
      })}
    this.updateState(newTask,'task')
  }
  

  render(){
    return (
      <div calssname = 'app'>
        <div className="appBox">
          <div>
            <span className = "appTitle">일과 thㅏ람 . . .</span>
            <Groups groups = {this.state.groups}
                    addGroup = {this.addGroup}
                    selectGroup = {this.selectGroup}
                    updateState = {this.updateState}
                    handleSwitch = {this.handleSwitch}
                    task = {this.state.task}/>
            <img  className="o9" src="/images/ruSureHuman.png" 
                  alt=''></img>
          </div>
          <Head selectedGroup = {this.state.selectedGroup}
                handleAddSet = {this.handleAddSet}
                handleSearch = {this.handleSearch}
                escapeKey = {this.escapeKey}
                count = {this.state.count}
                />
          <Todo selectedGroup = {this.state.selectedGroup}
                task = {this.state.task} 
                count = {this.state.count}
                keyword = {this.state.searchKey}
                updateState = {this.updateState}
                handleSwitch = {this.handleSwitch}/>
          <Done selectedGroup = {this.state.selectedGroup}
                task = {this.state.task} 
                count = {this.state.count}
                keyword = {this.state.searchKey}
                updateState = {this.updateState}
                handleSwitch = {this.handleSwitch}/>
        </div>
      </div>
    )
  }
}

export default App;
