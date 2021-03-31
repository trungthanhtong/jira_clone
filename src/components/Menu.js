import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <div className="menu">
            <div className="account">
                <div className="avatar">
                    <img src={require('../assets/img/logo.png').default} alt="logo" />
                </div>
                <div className="account-info">
                    <p>Jira Clone</p>
                    <p>Report bugs</p>
                </div>
            </div>
            <div className="control">
                <div>
                    <i className="fa fa-credit-card" />
                    <NavLink className="text-dark" activeClassName="active fw-bold" to="/board">Board</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog" />
                    <NavLink className="text-dark" activeClassName="active fw-bold" to="/createproject">Create Project</NavLink>
                </div>
            </div>
            <div className="feature">
                <div>
                    <i className="fa fa-truck" />
                    <span>Releases</span>
                </div>
                <div>
                    <i className="fa fa-equals" />
                    <span>Issues and filters</span>
                </div>
                <div>
                    <i className="fa fa-paste" />
                    <span>Pages</span>
                </div>
                <div>
                    <i className="fa fa-location-arrow" />
                    <span>Reports</span>
                </div>
                <div>
                    <i className="fa fa-box" />
                    <span>Components</span>
                </div>
            </div>
        </div>
    );
}
