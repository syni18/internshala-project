import React from 'react'
import Sidebar from "../dashboard/Sidebar";
import './home.css'

function Home() {
  
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <Sidebar/>
        <div className="dashboard_body bubbleamination">
          <div class="bubbles">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home