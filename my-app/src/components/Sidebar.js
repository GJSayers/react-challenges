import React from "react";
import css from "./css/Sidebar.module.css"
// This componenet is a parent component
function Sidebar() {
    return (
      <div className={css.sidebar}>
        <div>
            <a> My Photos </a>

            <a> My Illustrations </a>

            <a> My Paintings </a>
        </div>
      </div>
    );
  }
  
  export default Sidebar;