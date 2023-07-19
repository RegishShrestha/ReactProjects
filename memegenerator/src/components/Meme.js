import { useState, useEffect } from "react";
export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMeme] = useState([]);
  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
  }, []);

  function generate_image() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((preVal) => ({ ...preVal, randomImage: url }));
  }

  function handleChange(event) {
    console.log(event.target);
    const { name, value } = event.target;
    setMeme((preVal) => ({ ...preVal, [name]: value }));
  }

  return (
    <main>
      <div className="meme_form">
        <input
          type="text"
          placeholder="Top Text"
          className="form_input"
          name="topText"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Bottom Text"
          className="form_input"
          name="bottomText"
          onChange={handleChange}
        ></input>
        <button onClick={generate_image} className="form_button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">One does not simply</h2>
        <h2 className="meme--text bottom">Walk into Mordor</h2>
      </div>
    </main>
  );
}
