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
    }
  }
  render(){
    return (
      <div>
           <form>
     <input type="text"/>
     <button type='button'>Add</button>
     </form>
     <ul>
     <ToDoItems tasks={this.state.tasks}/>
     </ul>
   
      </div>

    )}
}
export default TodoList;