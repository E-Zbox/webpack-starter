import axios from "axios";

const generateJoke = async () => {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    let response = await axios.get("https://icanhazdadjoke.com", config);
    document.getElementById("joke").innerHTML = response.data.joke;
};

export default generateJoke;
