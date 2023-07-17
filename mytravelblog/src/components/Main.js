import React from "react";

export default function Main() {
  return (
    <main className="main">
      <div className="container">
        <img
          className="container_img"
          src="https://source.unsplash.com/WLxQvbMyfas"
        />
        <div className="container_details">
          <div className="container_header">
            <i className="fa-solid fa-location-dot location_icon"></i>
            <h3>Japan</h3>
            <a href="#">View on Google Map</a>
          </div>
          <h1>Mount Fuji</h1>
          <p>12 Jan, 2021 - 24 Jan, 2021</p>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
          <hr />
        </div>
      </div>
    </main>
  );
}
