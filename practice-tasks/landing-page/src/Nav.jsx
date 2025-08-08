import React from "react";

function Navbar({ onChangePage }) {
  return (
    <nav>
      <button onClick={() => onChangePage("home")}>Home</button>
      <button onClick={() => onChangePage("contact")}>Contact</button>
    </nav>
  );
}

export default Navbar;
