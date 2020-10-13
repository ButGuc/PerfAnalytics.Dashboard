import React from "react";
import {Navbar} from 'react-bootstrap';

export default function Head() {
  return <Navbar bg="light" style={{marginBottom: '2rem'}}>
    <Navbar.Brand href="#">PerfAnalytics Dashboard</Navbar.Brand>
  </Navbar>
}