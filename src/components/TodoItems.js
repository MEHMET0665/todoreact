function ToDoItems(props){
  return props.tasks.map(item=>{
      return <li>{
        item.title}
        <span className='remove-item'>(Remove)</span>
        </li>
    }) ;
  }
export default ToDoItems;