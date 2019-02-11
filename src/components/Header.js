import React from "react";
import { Link } from "react-router-dom";

function Header({ handleSaveProgress }) {
  return (
    <div className="header">
      <button onClick={handleSaveProgress} className="save-progress-btn btn">
        Save Progress
      </button>
      <h1>
        <Link to="/" className="brand-logo">
          What Todo?
        </Link>
      </h1>
    </div>
  );
}

export default Header;
