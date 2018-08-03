import React from "react";
import logo from "../../../assets/img/konsigue_logo.png";
// import cssModule from "react-css-modules";
// import styles from "./header.css";

class Header extends React.Component {
  static propTypes = {};
  render = () => (
    <div>
      <nav class="navbar navbar-light p-0 bg-primary">
        <a class="navbar-brand pl-0 my-0 py-0 font-weight-bold text-white" href="#">
          <img
            src={logo}
            className="d-inline-block my-0 ml-0 mr-3"
            height="65"
            alt=""
          />
          Rodrigo Rodolfo Rubio Haro
        </a>
      </nav>
    </div>
  );
}

export default Header;
