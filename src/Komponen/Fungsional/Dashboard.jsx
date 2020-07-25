import React, { Component } from "react";

import { Row, Col, Container } from "reactstrap";


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


<div class="bg-light border-right" id="sidebar-wrapper">
  <div class="sidebar-heading"> </div>
  <div class="list-group list-group-flush">
    <a href="#" class="list-group-item list-group-item-action bg-light">Dashboard</a>
    <a href="/listbarang" class="list-group-item list-group-item-action bg-light">Master</a>
    <a href="/login" class="list-group-item list-group-item-action bg-light">Logout</a>
  </div>
</div>
</div>
</Container>

        </div>
    );
  }
}

export default Dashboard;
