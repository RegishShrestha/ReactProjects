import React from "react";

export default function Body() {
  return (
    <div className="body">
      <img
        src="https://media.licdn.com/dms/image/C5603AQFCfzGf8vZLQQ/profile-displayphoto-shrink_200_200/0/1644331830708?e=1694649600&v=beta&t=J7OfVK0Q2OuTMONqXCEjHTqDC9KQEkun5L-hSnO9Vis"
        className="body_img"
      />

      <div className="body_info">
        <h1>Regish Shrestha</h1>
        <h3 className="golden_color">Frontend Developer</h3>
        <a href="www.google.com" className="body-a">
          regishshrestha.com.np
        </a>
      </div>
      <div className="body_button">
        <div className="button_container white_color">
          <i className="fa fa-brands fa-square-github body_icon"></i>
          <h3>Twitter</h3>
        </div>
        <div className="button_container blue_color">
          <i className="fa fa-brands fa-square-github body_icon"></i>
          <h3>Linkdin</h3>
        </div>
      </div>
      <div className="about">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="intrests">
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
