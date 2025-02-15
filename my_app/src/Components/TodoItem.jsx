import React from 'react'

export default function TodoItem({todo,onDelete}) {

  // {todo,onDelete} : Here destructuring is done. we can also use props at this place but when we use props then we have to write props.todo in place of todo and props.onDelete in place of onDelete. 
 
  return (
    <div>
    
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-sm btn-danger' onClick = {()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
