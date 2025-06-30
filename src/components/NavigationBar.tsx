import React from "react";
import TaskFeedbackCard from "./TaskFeedback";
import '../customCss/buttonUtilities.css'

interface NavbarButttonDisplays {
    navbarButtonDisplay: boolean[]
}

const NavigationBar: React.FC<NavbarButttonDisplays> = ({
    navbarButtonDisplay
}) => {
    return (
        <nav className="navbar navbar-expand justify-content-between"
             style={{backgroundColor: '#f3f3f3'}}>
            <div className="container flex flex-fill justify-content-between">
                <img src={"/static/LogoChatMed.PNG"} alt={"Logo"}/>
                <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navbarNav"}>
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id={"navbarNav"}>
                    <ul className={"navbar-nav ms-auto"}>
                        {navbarButtonDisplay.at(0) && (
                        <li className={"nav-item"}><a className={"btn btn-outline-primary m-2"} href={"/"}>← Back to Dashboard</a></li>
                        )}
                        {navbarButtonDisplay.at(1) && (
                        <li className={"nav-item"}><a className={"btn btn-outline-primary m-2"}>+ New Task</a></li>
                        )}
                        {navbarButtonDisplay.at(2) && (
                        <li className={"nav-item"}><a className={"btn btn-outline-primary m-2"}>🔍 View Task</a></li>
                        )}
                        <li className={"nav-item"}><a className={"btn btn-outline-danger m-2"}>← Back to Workspaces</a></li>
                        <li className={"nav-item"}><a className={"btn btn-outline-primary m-2"}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavigationBar;