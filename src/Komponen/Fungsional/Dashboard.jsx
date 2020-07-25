import React, { Component } from "react";

import { Container } from "reactstrap";


class Dashboard extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      
      <div>
        <Container>
      <div class="d-flex" id="wrapper">


<div className="bg-light border-right" id="sidebar-wrapper">
  <div className="sidebar-heading"> </div>
  <div className="list-group list-group-flush">
    <a href="#" className="list-group-item list-group-item-action bg-light">Dashboard</a>
    <a href="/listbarang" className="list-group-item list-group-item-action bg-light">Master</a>
    <a href="/login" className="list-group-item list-group-item-action bg-light">Logout</a>
  </div>
</div>
</div>
</Container>

        </div>
    );
  }
}

export default Dashboard;
