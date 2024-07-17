fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3b3e121d8bmsh118f89f4b35f7b7p16090cjsndfdc29cbe706",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const movieList = document.getElementById("movies");

    response.map((movie, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add(
        "max-w-[300px]",
        "md:min-h-[500px]",
        "bg-[#121929]",
        "shadow-xl",
        "p-2",
        "rounded-xl"
      );
      movieDiv.setAttribute("data-id", movie.id);

      movieDiv.innerHTML = `
         <img src=${movie.image} class="rounded-xl" />
         <p class="py-3 font-bold text-[16px]">${movie.title}</p>
       `;

      movieDiv.addEventListener("click", function () {
        const movieId = this.getAttribute("data-id");
        window.location.href = `movie-details.html?id=${movieId}`;
      });

      movieList.appendChild(movieDiv);
    });
  })
  .catch((err) => {
    console.log(err);
  });
