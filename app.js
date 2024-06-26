//function that reset the swipers
function resetSwiper() {
  const swiper = new Swiper(".swiper", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      spaceBetween: 40,
      centeredSlides: false,
      slidesPerGroup: 1,
      slidesPerView: 1,
    //   slidesOffsetAfter: 100,
    //   slidesOffsetbefore: 100,
      breakpoints: {
        500: {
          slidesPerView:2,
        },
        768: {
          slidesPerView:3,
        },
        1250: {
          slidesPerView:4,
        },
      },
    
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}
// Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll("#testreg");
const closeModalBtn = document.querySelector(".btn-close");
/* console.log(openModalBtn); */

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.forEach(item => item.addEventListener("click", openModal));

// Select the element with the class "Signup" and store it in the variable Signup
const Signup = document.querySelector(".Signup");

// Select the element with the class "hiddenMail" and store it in the variable hiddenMail
const hiddenMail = document.querySelector(".hiddenMail");

// Define a function named Sign that removes the "hiddenMail" class from the hiddenMail element
const Sign = function () {
  console.log("enterSign");
  Login.classList.remove("activeLink");
  Signup.classList.add("activeLink");
  Login.classList.add("logOff");
  Signup.classList.remove("signupOff");
  hiddenMail.classList.remove("hiddenMail");
};

// Add a click event listener to the Signup element that calls the Sign function when clicked
Signup.addEventListener("click", Sign);

// Select the element with the class "Login" and store it in the variable Login
const Login = document.querySelector(".Login");

// Define a function named Log that adds the "hiddenMail" class to the hiddenMail element
const Log = function () {
  console.log("enterLog");
  Login.classList.add("activeLink");
  Signup.classList.remove("activeLink");
  Login.classList.remove("logOff");
  Signup.classList.add("signupOff");
  hiddenMail.classList.add("hiddenMail");
};

// Add a click event listener to the Login element that calls the Log function when clicked
Login.addEventListener("click", Log);

let Searchinput = document.getElementById("searchinput");
let buttonSearch = document.getElementById("buttonSearch");
let Searchinput3 = " ";

const logInputValue = function () {
  Searchinput3 = Searchinput.value.trim();
  headerResearch.innerText = "result for "+ Searchinput3;
};

buttonSearch.addEventListener("click",(e)=>{
  logInputValue();
  displayResult(Searchinput3);
});
Searchinput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    logInputValue();
    displayResult(Searchinput3);
  }
  });

let searchDiv = document.getElementById("SEARCH");

let pElement = searchDiv.querySelector("p");

let headerResearch = searchDiv.querySelector("p");

// test modal card

let imgContainer = document.getElementsByClassName("image-container");

/* console.log(imgContainer); */

const modalCardF = function (event) {
/*   console.log(event.target); */
  modalOpencard();
};

Array.from(imgContainer).forEach(function (e) {
  e.addEventListener("click", modalCardF);
});

let modalcard = document.querySelector(".modalcard");

function modalOpencard() {
  modalcard.classList.remove("hiddencard");
  /* console.log(modalcard); */
}

function modalClosecard() {
  modalcard.classList.add("hiddencard");
}
function addClickOnMovies () {
  let LO = document.querySelectorAll(".swiper-slide");
  Array.from(LO).forEach(function (e) {
    e.addEventListener("click",async (e) =>{
      await generateMovieModal(e.currentTarget.dataset.movieid);
      modalCardF(e);
    });
  });
}
addClickOnMovies();
const closeBtn = document.querySelector(".btn-closecard");
closeBtn.addEventListener("click", modalClosecard);

      //////     START API PART /////////

const options = {
  method: 'GET',
  headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGQ0NjAxOGY4MjVjOTdkMTM2ZWQ3ZDEyMzZiZTZmYyIsInN1YiI6IjY2NmZlMjVhMTM1ZDM5MTdmMTU0NzA1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yBakHCKugpBK7pQtkIV_rvYAqZpKB7c0zTs8qQ5bVGM'
  }
}; 

const err = `An error has occured during your connection to API`;

const searchWrapper = document.querySelector("#searchSwiper").querySelector(".swiper-wrapper");
const lastestWrapper = document.querySelector("#lastestSwiper").querySelector(".swiper-wrapper");
const genreWrapper = document.querySelector("#genreSwiper").querySelector(".swiper-wrapper");
const navLinks = document.querySelector(".nav-links-genres");
navLinks.querySelectorAll("a").forEach(item => item.addEventListener("click",onClickGenre));


let genreIdList;
const baseUrl="https://image.tmdb.org/t/p/w300";

//For any name genre return the id
function getIdforGenre (genre) {
  let idGenre;
  genreIdList.forEach(item => {
      if (item.name == genre) {
          idGenre = item.id;
      }
      })
      if (idGenre) { 
          return idGenre;
      } else {
          console.log(`The genre ${genre} has no id in the list`);
      }
}
//For any idgenre return the genre
function getGenreforId (idgenre) {
  let genre;
  genreIdList.forEach(item => {
      if (item.id == idgenre) {
          genre = item.name;
      }
      })
      if (genre) { 
          return genre;
      } else {
          console.log(`The genre ${idgenre} has no name in the list`);
      }
}

//fectch the ID of every genre and store it in GenreIdList
function getGenreIdList() {
  return fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then(data => data.json())
      .then(data => {
          return data.genres;
      })
      .catch(err => console.error("failed to fetch the GenreIdList"));
  }

//function that activate on the click on a genre

function onClickGenre(e) {
  if (e) {
      e.preventDefault();
  }
  navLinks.querySelectorAll("a").forEach(item =>item.classList.remove("activeLink"));
  e.target.classList.add("activeLink");
  let genre = e.target.innerText;
  displayGenre(genre);
}
//function that create an array of movie's formatted HTML based on the results;
function createMovieHTMLArray (results) {
  let htmlArray =[];
  results.forEach(movie =>{
    let title = movie.title;
    let image = "no-poster-found.png";
    if (movie.poster_path) {
    image = baseUrl+movie.poster_path;
    }
    
    let date = new Date(movie.release_date);
    let year = date.getFullYear();
    let categories ="";
        let indexId=0;
        movie.genre_ids.forEach(item => {
            indexId++;
            if (indexId==1) {
                categories += getGenreforId(item)
            } else {
                categories += " / "+ getGenreforId(item)
            }
            });
    let rating = Math.round(movie.vote_average*10)/10;
    let id=movie.id;
    if (movie.vote_count != 0) { 
      htmlArray.push(
      `
<div class="swiper-slide" data-movieId="${id}">
    <div class="image-container">
        <img src="${image}" alt="">
        <div class="overlayD">
            <div class="text">
                <h2 class="title">${title}</h2>
                <p class="date">${year}</p>
                <p class="categories">${categories}</p>
                <div class="ratings">
                    <img src="star.svg" alt="">
                    <p class="rating">${rating}</p>
                </div>
            </div>
        </div>
    </div>
</div>
      `)}
  })
  return htmlArray;
}
async function displayGenre(genre) {
  let genreID = await getIdforGenre(genre);
  let results = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}`, options)
      .then(response => response.json())
      .then(response => {
          return response.results;
      })
      .catch(err => console.error(err));
  document.querySelector(".swiperP").innerText=genre;
  genreWrapper.innerHTML="";
  await createMovieHTMLArray(results).forEach(item => genreWrapper.innerHTML+=item);
  resetSwiper();
  addClickOnMovies();
}

async function displayLastest() {
  const todayDate =new Date().toJSON().slice(0, 10);
  let results = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&primary_release_date.lte=${todayDate}&include_video=false&language=en-US&page=1&sort_by=popularity.desc&vote_count.gte=20`, options)
    .then(response => response.json())
    .then(response => {
      return response.results;
    })
    .catch(err => console.error("Error on connecting with the API for Lastest Movies."));
    lastestWrapper.innerHTML="";
    await createMovieHTMLArray(results).forEach(item => lastestWrapper.innerHTML+=item);
    resetSwiper();
    addClickOnMovies();
}

async function displayResult (research) {
  let results = await fetch(`https://api.themoviedb.org/3/search/movie?query=${research}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => {
      return response.results
    })
    .catch(err => console.error(err));
  searchWrapper.innerHTML="";
  if (results.length>0) {
    await createMovieHTMLArray(results).forEach(item => searchWrapper.innerHTML+=item);
    resetSwiper();
    addClickOnMovies();
  } else {
    headerResearch.innerText += " : No results found";
  }

}
const movieModalContentHolder = document.querySelector(".modalcard .contentholder");

async function generateMovieModal(movieId) {
  let movie = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en`, options)
  .then(response => response.json())
  .then(response => {
    return response;
  })
  .catch(err => console.error("Error while attempting to get the movie by ID"));
  
  let credits = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options)
  .then(response => response.json())
  .then(response => {
    return response;
  })
  .catch(err => console.error("Error while attempting to get the credits of the movie by ID"));
  let title = movie.title;
  let image = "no-poster-found.png";
  if (movie.poster_path) {
    image = baseUrl+movie.poster_path;
  }
  let year = "No date found."
  if (movie.release_date) {
    let date = new Date(movie.release_date);
    year = date.getFullYear();
  }

  let details = movie.overview? movie.overview:"No description available for this movie.";
  let categories ="";
      let indexId=0;
      if (movie.genres) {
        movie.genres.forEach(item => {
          indexId++;
          if (indexId==1) {
              categories += item.name;
          } else {
              categories += " / "+ item.name;
          }
          });
      } else {
        categories = "none";
      }
  let rating = "none";
    if (movie.vote_average) {
      rating = Math.round(movie.vote_average*10)/10;
    }

  let cast = credits.cast;
  let castDisplayed = "No cast information found.";
  let indexCast=0;
    while(indexCast<4 && cast[indexCast]) {
      if (indexCast==0){
        castDisplayed = cast[indexCast].name;
      } else {
        castDisplayed += ", "+cast[indexCast].name;
      };
      indexCast++;
    }
  movieModalContentHolder.innerHTML=
  `
    <div class="imgholder"><img src="${image}" alt=""></div>
    <div class="textArea">
        <h2 class="title">${title}</h2>
        <p class="date">${year}</p>
        <div class="rating"><img src="star.svg" alt="">${rating}</div>
        <div class="category">${categories}</div>
        <div class="description">${details}</div>
        <div class="cast"><span>Cast: </span>${castDisplayed}</div>
    </div>
  `
}


//function that will run at the start
async function initalisation () {
  genreIdList = await getGenreIdList();
  headerResearch.innerText="";
  searchWrapper.innerHTML="";
  displayLastest();
  let firstGenre = navLinks.querySelector("a");
  firstGenre.classList.add("activeLink");
  displayGenre(firstGenre.innerText);
}

initalisation();

