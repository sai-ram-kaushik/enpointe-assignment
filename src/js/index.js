fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
  method: "GET",
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDk4MTQxNGM2MjhlOTZhYmY0ZGM0MDg3MWZjOTRhMCIsIm5iZiI6MTcyMTIyNDM0OC4xMjM3MDgsInN1YiI6IjY2OTZhYWYzN2MyYzlmY2E0NzdiOGY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c5HBgwIaL6J2TqR-z_hJUDTXXB2Od-LCPGpgP6WvbXE'
  }
})
  .then((response) => response.json())
  .then((response) => {
    const movieList = document.getElementById("movies");

    response.results.map((movie) => {
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

      const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieDiv.innerHTML = `
         <img src="${imgUrl}" class="rounded-xl cursor-pointer" />
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
