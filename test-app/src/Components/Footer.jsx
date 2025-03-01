// function Footer() {
//     return(
//         <div className="footer" style={{'background-color':'black', 'width':'100vw','height':'10vh','position':'fixed' ,'bottom':'0px'}}>
//             <p className="text-center text-primary my-3" >MyTodosList: &copy; All rights reserved </p>
//         </div>
//     )
// }


// export default Footer;


import {Link} from 'react-router-dom';
import css from "./Footer.module.css";
export default function Footer(){
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

      <Link className={`${css["follow-Link"]}`} to="https://github.com/RupeshKumar4511" target='_blank'><h4 className={`${css["follow-us"]} text-center`}>Follow Us on Github</h4></Link>
      </footer>
    </div>
  )
}
