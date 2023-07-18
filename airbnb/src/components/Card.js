import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.data.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.data.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <card>
      <div className="card_container">
        {badgeText && <div className="card_badge">{badgeText}</div>}
        <img className="card_img" src={props.data.coverImg} />
        <div className="star">
          <img src="star.png" />
          <p>
            {props.data.stats.rating}
            <span className="star_content">
              ({props.data.stats.reviewCount}).{props.data.location}
            </span>
          </p>
        </div>
        <p>{props.data.title}</p>
        <p>
          <span>From ${props.data.price}</span>/ person
        </p>
      </div>
    </card>
  );
}
