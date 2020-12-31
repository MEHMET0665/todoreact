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
  }
  handleInput(e){
  this.setState({
    newTask:e.target.value
  })
  }
  render(){
    return (
      <div>
     <form> 
     <input type="text" onInput={this.handleInput}/>
     <button type='button'>Add</button>
     </form>
     <ul>
     <ToDoItems tasks={this.state.tasks}/>
     </ul>
   
      </div>

    )}
}
export default TodoList;