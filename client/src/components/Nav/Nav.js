import React from "react";
import { Navbar } from 'react-bootstrap'

const Nav = () => {
    const nav = {
        color: "#ecf0f1"
    }

    return (
        <>
      <Navbar className="justify-content-center" bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand style={nav}>
            <h1>Employee Directory</h1>
          </Navbar.Brand>
          </Navbar>
      </>
    )
};

export default Nav;