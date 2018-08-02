import React, { Component } from "react";

class AppCard extends Component {

  render() {
    return (
      <div className="card">
        <img src={this.props.IconURL} alt="logo" />
        <div className="card-body">
          <h4 className="card-title">{this.props.app_title}</h4>
          <p className="card-text">{this.props.app_description}</p>
        </div>
      </div>
    );
  }
}

export default AppCard;
