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
  console.log(allMemes);
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
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Bottom Text"
          className="form_input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button className="form_button" onClick={generate_image}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
