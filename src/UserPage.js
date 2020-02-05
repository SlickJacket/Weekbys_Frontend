import React, { Component } from "react";

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div className="userPageWrapper">
        <div className="navBar">
          <div className="logo"></div>
          <div className="menu"></div>
        </div>
        <div className="userContentContainer">
          <div className="profileInfoContainer">
            <div className="pic"></div>
            <div className="name"></div>
            <div className="completedTasks"></div>
            <div className="todaysTasksContainer">
              <div className="todaysTitle"></div>
              <div className="todaysTasks"></div>
            </div>
          </div>
          <div className="taskManagerContainer">
            <div className="addTaskContainer">
              <div className="dayTitle"></div>
              <div className="addTaskInput"></div>
              <div className="tasks"></div>
            </div>
            <div className="daysContainer">
              <div className="days Monday"></div>
              <div className="days Tuesday"></div>
              <div className="days Wednesday"></div>
              <div className="days Thursday"></div>
              <div className="days Friday"></div>
              <div className="days Saturday"></div>
              <div className="days Sunday"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
