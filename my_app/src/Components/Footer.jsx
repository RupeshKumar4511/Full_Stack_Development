import React from 'react'

export const Footer = () => {
  let style = {
    position:"relative",
    top:"130vh",
    width:"100%",
    
  }
  return (
    <div>
      <footer className="bg-dark  text-light py-3" style={style}>
      <p className="text-center">Copyright &copy; MyTodosList.com
     
      </p>
      </footer>
    </div>
  )
}






