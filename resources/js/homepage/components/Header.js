import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="col-left">
                <h1 className="title">Get Paid Easily without Hassle</h1>
                <p className="subtitle">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live.
                </p>
                <button className="btn">
              Book Appointment
            </button>
            </div>
            <img className="col-right" src="/img/header-side-3.png" />
        </div>
    );
}

export default Header;
