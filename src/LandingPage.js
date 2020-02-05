import React, { Component } from "react";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="landingPageWrapper">
        <div className="navBar">
          <div className="logo"></div>
          <div className="loginSignupButtons"></div>
        </div>
        <div className="landingContent">
          <div className="welcome"></div>
          <div className="missionTitle"></div>
          <div className="missionStatement"></div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
