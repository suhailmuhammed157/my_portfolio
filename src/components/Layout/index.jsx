import "./index.scss";
import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="App">
      <Sidebar />      
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

      <Outlet/> {/* //allows to nest an element in a page. Here outlet is the homepage we nested inside app.jsx nested route */}

      <span className="tags bottom-tags">&lt;/body&gt;
      <br/>
      <span className="bottom-html-tag">&lt;/html&gt;</span>

      </span>
      </div>
    </div>
  );
}
 