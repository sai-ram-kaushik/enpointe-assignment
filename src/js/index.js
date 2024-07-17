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
         <div class="relative">
          <img src="${imgUrl}" class="rounded-xl cursor-pointer relative" />
          <div
          class="flex items-center gap-3 bg-black/50 p-2 rounded-xl text-orange-400 absolute top-0"
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
          <p class="py-3 font-bold text-[16px]">${movie.title}</p>
         </div>
       `;

      movieDiv.addEventListener("click", function () {
        const movieId = this.getAttribute("data-id");
        window.location.href = `movie-details.html?id=${movieId}`;
      });

      movieList.appendChild(movieDiv);
    });

    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const movieDivs = movieList.querySelectorAll("div[data-id]");
      
      movieDivs.forEach((div) => {
        const title = div.querySelector("p").textContent.toLowerCase();
        if (title.includes(query)) {
          div.style.display = "block";
        } else {
          div.style.display = "none";
        }
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

  
