import React, { Component } from "react";

class AppCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img src={this.props.IconURL} className="card-img-top" alt="logo" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{this.props.app_title}</h4>
          <p className="card-text">{this.props.app_description}</p>
        </div>
        <div className="card-footer">
          <button className="btn">{this.props.btn_title}</button>
        </div>
      </div>
    );
  }
}

export default AppCard;
