import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={styledHeader}>
      <h1>Todo List</h1>
      <Link to="/" style={styledLink}>
        Home
      </Link>{" "}
      |{" "}
      <Link to="/about" style={styledLink}>
        About
      </Link>
    </header>
  );
}

const styledHeader = {
  color: "#fff",
  padding: "5px 0",
  textAlign: "center",
  backgroundColor: "#333"
};

const styledLink = {
  color: "#fff",
  textDecoration: "none"
};
