import React from 'react'
import TodoItem from './TodoItem.jsx';

export default function Todos(props) {
 
  return (
    <div>
      <div className="container">
        <h3 className='text-center my-3' >Todos List</h3>
        {props.todo.length === 0?"No todo list to display ":
            props.todo.map((todo)=>{
              return <TodoItem todo = {todo} onDelete = {props.onDelete} />
            })
        }
      </div>
    </div>
  )
}
