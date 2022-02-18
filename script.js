document.addEventListener("DOMContentLoaded",function() {
    console.log(`It's working`);

    const jokeEl = document.getElementById("joke");
    const jokeAnswerEl = document.getElementById("jokeAnswer");
    const getJokeBtn = document.getElementById("getJoke");
    const getProgrammingJokeBtn = document.getElementById("getProgrammingJoke");

    getJokeBtn.addEventListener("click", function () {
        getJoke("Any");
    });

    getProgrammingJokeBtn.addEventListener("click", function () {
        getJoke("Programming");
    });

    function getJoke(type) {
        fetch(`https://jokeapi-v2.p.rapidapi.com/joke/${type}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                "x-rapidapi-key": "ca3f9a3aa1msh8e9ee44caba1edcp1d7e1bjsnd8a0559d18df"
            },
        })

        .then((response) => response.json())
        .then((obj) => {
            console.log("obj", obj);
            createJoke(obj);
        })
        .catch((err) => {
            console.log(err);
        });
    }

       function createJoke(res) {
           if (res.type == "twopart") {
            jokeEl.innerHTML = `<p>${res.setup}</p>`;
            jokeAnswerEl.innerHTML = `Answer: <p>${res.delivery}</p>`;
           } else {
               jokeEl.innerHTML = `<p>${res.joke}</p>`;
           }
        }

});