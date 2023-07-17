import React from "react";

export default function Main(props) {
  return (
    <main>
      <div className="main">
        <div className="container">
          <img className="container_img" src={props.item.imglink} />
          <div className="container_details">
            <div className="container_header">
              <i className="fa-solid fa-location-dot location_icon"></i>
              <h3>{props.item.country}</h3>
              <a className="googleview" href={props.item.googlemapLink}>
                View on Google Map
              </a>
            </div>
            <h1 className="location">{props.item.place}</h1>
            <p className="visitdate">{props.item.visitDate}</p>
            <p>{props.item.description}</p>
          </div>
        </div>
        <hr className="linebreak" />
      </div>
    </main>
  );
}
