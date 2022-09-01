import generateJoke from "./generateJoke";
import "./styles/main.scss";
// images
import image from "./assets/laughing.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = image;

const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
