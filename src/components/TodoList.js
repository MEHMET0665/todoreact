import React from "react";
import ToDoItems from "./TodoItems";

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      tasks:[
        {title:'Get a shopping cart',
        completed:false,
        id:12336544
      },
      {title:'Buy milk',
        completed:false,
        id:12336512
      }
      ],
      newTask:''
    }
    this.handleInput=this.handleInput.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }
  handleInput(e){
  this.setState({
    newTask:e.target.value
  })
  }
  handleClick(e){
    if(this.state.newTask.trim()){
      let newItem= {title:this.state.newTask,
      completed:false,
      id:Date.now()
    }
    this.setState(prevState=>{
      return {
        tasks:prevState.tasks.concat(newItem)
      }
    })
    this.state.newTask="";
    }
    else{
      alert('Please enter  a value')
    }
   
  }
  render(){
    return (
      <div>
     <form> 
     <input type="text" onInput={this.handleInput}
     value={this.state.newTask}/>
     <button type='button' onClick={this.handleClick}>Add</button>
     </form>
     <ul>
     <ToDoItems tasks={this.state.tasks}/>
     </ul>
   
      </div>

    )}
}
export default TodoList;