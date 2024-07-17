document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    fetch("data/movies.json")
      .then(response => response.json())
      .then(data => {
        const movie = data.movies.find(movie => movie.id === movieId);
        const movieDetailsDiv = document.getElementById("movie-details");

        if (movie) {
          movieDetailsDiv.innerHTML = `
            <h1 class="text-[32px] md:text-[64px] font-bold">${movie.label}</h1>
            <img src=${movie.image} class="rounded-xl" />
            <p class="py-3 font-bold text-[16px]">${movie.description}</p>
          `;
        } else {
          movieDetailsDiv.innerHTML = `
            <p>Movie details not found.</p>
          `;
        }
      })
      .catch(error => console.error("Error fetching the data:", error));
  });