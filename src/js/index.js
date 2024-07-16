fetch("data/movies.json")
  .then((response) => response.json())
  .then((data) => {
    const movieList = document.getElementById("movies");

    data.movies.map((movie, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.innerHTML = `
       <div
         class="max-w-[300px] min-h-[500px] bg-[#121929] shadow-xl p-2 rounded-xl"
       >
         <img src=${movie.image} class="rounded-xl" />
         <p class="py-3 font-bold text-[16px]">${movie.label}</p>
       </div>
     </div>
             `;
      movieList.appendChild(movieDiv);
    });
  })
  .catch((error) => console.error("Error fetching the data:", error));
