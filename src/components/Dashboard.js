import React from "react";
import "./Dashboard.css";

function Dashboard() {

  const handelBrowseBooksClick = () => {
    const targetSection = document.getElementById("Featuredbooks".toLowerCase());
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dashboard_container container">
      <div className="dash_text">
        <div className="text-purple-700">India's most awarded online library</div>
        <h1>Find your dream book with <span className="text-purple-700">Library.</span></h1>
        <button onClick={handelBrowseBooksClick}>Browse Books</button>
      </div>
      <div>
        <img src="assets/home.svg" alt="home" className="dashboard_img"></img>
      </div>
    </div>
  );
}

export default Dashboard;
