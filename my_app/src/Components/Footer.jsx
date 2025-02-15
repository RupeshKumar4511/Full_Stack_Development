import React from 'react';
import {Link} from 'react-router-dom';
import css from "./Footer.module.css";
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

      <Link to="https://github.com/RupeshKumar4511"><h4 className={`${css["follow-us"]} text-center`}>Follow Us on Github</h4></Link>
      </footer>
    </div>
  )
}






