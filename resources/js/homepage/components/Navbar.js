import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img className="logo" src="/img/logo.png" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <i className="fa fa-home"></i>{" "}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Link
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">
                            Disabled
                        </a>
                    </li>
                    {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-envelope-o">
                <span className="badge badge-primary">11</span>
              </i>
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
                </ul>
                <ul className="navbar-nav ">
                    <button className="login-btn">
                        <a className="nav-link" href="#">
                            Login
                        </a>
                    </button> 
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
