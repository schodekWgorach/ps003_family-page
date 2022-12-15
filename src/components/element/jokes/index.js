import './_jokes.scss';
import React, {useState} from "react";

function JokeGen() {
    const [joke, setJoke] = useState("");
    const getJoke = () => {

        fetch("https://official-joke-api.appspot.com/random_joke").then(
            (response)=> response.json())
            .then((data) => {
                setJoke(data.setup + "..." + data.punchline);   //questions and answers
            });
    };
    return (
        <div className="jokes-box" >
            Zaczynamy  <button className="btn-primary btn-primary-2 " onClick={getJoke} > dowcip   </button>
            {joke}
        </div>
    );
}

export  default JokeGen;