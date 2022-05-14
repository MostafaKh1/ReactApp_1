import React from "react";
import Logo from "../images/logo.svg"
import Todo  from "../images/icon-todo.svg"
import Calendar from "../images/icon-calendar.svg"
import Reminders from "../images/icon-reminders.svg"
import Planning from "../images/icon-planning.svg"
import ArrowD from "../images/icon-arrow-down.svg"
import ArrowU from "../images/icon-arrow-up.svg"



export default function Header() {


    const [show, setShow] = React.useState(false)
    const [nextShow , setNextShow] = React.useState(false)


    let styles = {
        
        display: show  ? "block" : "none"
        
    }
    let nextStyles = {
        
        display: nextShow  ? "block" : "none"
        
    }
        
        function showInfo () {

            setShow(prevent => !prevent)
        }

        function nextShowInfo () {

            setNextShow(prevent => !prevent)
        }

        React.useEffect(()=> {

        },[show])

       
        let arrow = show ? ArrowU : ArrowD
        let nextArrow = nextShow ? ArrowU : ArrowD
    return (
        <div>
            <header>
                <div className="container">
                
                    <div className="header-box-one">
                        <div className="logo">
                            <a href="#">< img  src={Logo} /></a> 
                        </div>
                        <ul className="big-ul">
                                <a><li className="f-li" onClick={showInfo}>Feature <img className="arrow" src={arrow} />

                        <ul  className="list-o" style={styles}>
                                <li><img src={Todo} />Todo List</li>
                                <li> <img src={Calendar}/>Calendar</li>
                                <li><img src={Reminders} />Reminders</li>
                                <li><img src={Planning} />Planning</li>
                                
                            </ul>

                        </li></a>
                        
                        <a><li onClick={nextShowInfo}>Company <img  className="arrow" src={nextArrow} />
                            <div className="list-two" style={nextStyles} >
                                <a><li>History</li></a>
                                <a><li>Our Team</li></a>
                                <a><li>Blog</li></a>
                            </div>
                            
                            </li></a>
                        <a><li>Careers</li></a>
                        <a><li>About</li></a>
        
                        </ul>
                        
</div>
                        <div className="header-box-two">
                        <div className="login">
                            <a href="#">Login</a>
                            <a href="#">Register</a>
                        </div>
                    </div>
                   </div>   
            </header>
            
        </div>
            
    )
}