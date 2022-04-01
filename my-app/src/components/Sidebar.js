import React from "react";
// This componenet is a parent component
function Sidebar() {
    return (
      <div className="Sidebar">
        <div>
            <a>My Photos</a>
            <a>My Illustrations</a>
            <a>My Paintings</a>
        </div>
      </div>
    );
  }
  
  export default Sidebar;