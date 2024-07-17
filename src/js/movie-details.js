document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");

  fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZDk4MTQxNGM2MjhlOTZhYmY0ZGM0MDg3MWZjOTRhMCIsIm5iZiI6MTcyMTIyNDM0OC4xMjM3MDgsInN1YiI6IjY2OTZhYWYzN2MyYzlmY2E0NzdiOGY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c5HBgwIaL6J2TqR-z_hJUDTXXB2Od-LCPGpgP6WvbXE",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const movie = data.results.find((movie) => movie.id == movieId);
      console.log(movie);
      const movieDetailsDiv = document.getElementById("movie-details");

      if (movie) {
        const imgUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`;
        const coverImg = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieDetailsDiv.innerHTML = `
        <div
  class="w-full py-10 flex flex-col items-center gap-20 container mx-auto px-5 md:px-10"
>
  <div class="mt-10 w-full flex items-center justify-center">
    <img
      src="${imgUrl}"
      alt="Avengers: Age of Ultron"
      class="rounded-2xl shadow-lg h-[500px] w-full"
    />
  </div>

  <div
    class="flex flex-col-reverse md:flex-row items-start justify-center gap-20"
  >
    <img src="${coverImg}" class="rounded-2xl" />

    <div class="flex flex-col items-start gap-5">
      <h3 class="text-2xl font-bold">Movie Description</h3>
      <p class="max-w-[400px] text-justify text-whiteShade text-lg">
        ${movie.overview}
      </p>
      <div
        class="flex items-center gap-3 bg-black p-2 rounded-xl text-orange-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="{1.5}"
          stroke="currentColor"
          class="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <p class="text-lg">${movie.vote_average}</p>
      </div>

      <h3 class="text-2xl font-bold">Release Date</h3>
      <p class="text-whiteShade">${movie.release_date}</p>

      <h3 class="text-2xl font-bold">Popularity</h3>
      <p class="text-whiteShade">${movie.popularity}</p>
    </div>
  </div>
</div>

          `;
      } else {
        movieDetailsDiv.innerHTML = `
            <p>Movie details not found.</p>
          `;
      }
    })
    .catch((error) => console.error("Error fetching the data:", error));
});
