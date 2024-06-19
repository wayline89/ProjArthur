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

// Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelectorAll("#testreg");
const closeModalBtn = document.querySelector(".btn-close");
console.log(openModalBtn);
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
openModalBtn[0].addEventListener("click", openModal);
openModalBtn[1].addEventListener("click", openModal);
openModalBtn[2].addEventListener("click", openModal);
openModalBtn[3].addEventListener("click", openModal);

// Select the element with the class "Signup" and store it in the variable Signup
const Signup = document.querySelector(".Signup");

// Select the element with the class "hiddenMail" and store it in the variable hiddenMail
const hiddenMail = document.querySelector(".hiddenMail");

// Define a function named Sign that removes the "hiddenMail" class from the hiddenMail element
const Sign = function () {
  hiddenMail.classList.remove("hiddenMail");
};

// Add a click event listener to the Signup element that calls the Sign function when clicked
Signup.addEventListener("click", Sign);

// Select the element with the class "Login" and store it in the variable Login
const Login = document.querySelector(".Login");

// Define a function named Log that adds the "hiddenMail" class to the hiddenMail element
const Log = function () {
  hiddenMail.classList.add("hiddenMail");
};

// Add a click event listener to the Login element that calls the Log function when clicked
Login.addEventListener("click", Log);

let navlinksgenres = document.getElementsByClassName("nav-links-genres")[0];
let Comedy = document.querySelector('a[href="#Comedy"]');
let Drama = document.querySelector('a[href="#Drama"]');
let Action = document.querySelector('a[href="#Action"]');
let Fantasy = document.querySelector('a[href="#Fantasy"]');
let Animation = document.querySelector('a[href="#Animation"]');
let swiperP = document.getElementsByClassName("swiperP")[0];

const clickGenres = function () {
  swiperP.innerHTML = this.innerHTML;
};

Comedy.addEventListener("click", clickGenres);
Animation.addEventListener("click", clickGenres);
Drama.addEventListener("click", clickGenres);
Action.addEventListener("click", clickGenres);
Fantasy.addEventListener("click", clickGenres);

let Searchinput = document.getElementById("searchinput");
let buttonSearch = document.getElementById("buttonSearch");
let Searchinput3 = " ";

const logInputValue = function () {
  Searchinput3 = Searchinput.value;
  console.log(Searchinput3);
  spanElement.textContent = Searchinput3;
};

buttonSearch.addEventListener("click", logInputValue);

let searchDiv = document.getElementById("SEARCH");

let pElement = searchDiv.querySelector("p");

let spanElement = searchDiv.querySelector("p span");

// test modal card

let imgContainer = document.getElementsByClassName("image-container");

console.log(imgContainer);

const modalCardF = function (event) {
  console.log(event.target);
  modalOpencard();
};

Array.from(imgContainer).forEach(function (e) {
  e.addEventListener("click", modalCardF);
});

let modalcard = document.querySelector(".modalcard");

function modalOpencard() {
  modalcard.classList.remove("hiddencard");
  console.log(modalcard);
}

function modalClosecard() {
  modalcard.classList.add("hiddencard");
}

let LO = document.querySelectorAll(".image-container");
Array.from(LO).forEach(function (e) {
  e.addEventListener("click", modalCardF);
});

const closeBtn = document.querySelector(".btn-closecard");
closeBtn.addEventListener("click", modalClosecard);
