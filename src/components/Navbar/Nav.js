import React from "react";

class Nav extends React.Component {
    state = {

    }

    render() {

        return (
        <nav className="nav">
            <ul>
                <li className="nav-link"><a href="#">My visits</a></li>
                <li className="nav-link"><a href="#">My account</a></li>
                <li className="nav-link"><a href="#">Subscription</a></li>
                <li className="nav-link"><a href="#">My reviews</a></li>
                <li className="nav-link"><a href="#">Log out</a></li>
                <li className="nav-link"><a href="#">Support</a></li>

            </ul>
        </nav>
        )
    }
}

export default Nav;