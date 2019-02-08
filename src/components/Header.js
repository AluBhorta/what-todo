import React from "react";

function Header({ handleSaveProgress }) {
  return (
    <div className="header">
      <button onClick={handleSaveProgress} className="save-progress-btn btn">
        Save Progress
      </button>
      <h1>What Todo?</h1>
    </div>
  );
}

export default Header;
