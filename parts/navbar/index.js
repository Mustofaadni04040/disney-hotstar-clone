const dropdownFilm = document.querySelector(".nav-film");
const dropdownSerial = document.querySelector(".nav-serial");
const showSerial = document.getElementById("dropdown-serial");
const showFilm = document.getElementById("dropdown-film");
const arrowSerial = document.getElementById("arrow-serial");
const arrowFilm = document.getElementById("arrow-film");

// Toggle dropdown function
const toggleSerial = () => {
  showSerial.classList.toggle("show");
  arrowSerial.classList.toggle("arrow");
};
const toggleFilm = () => {
  showFilm.classList.toggle("show");
  arrowFilm.classList.toggle("arrow");
};
// Toggle dropdown open/close when dropdown button is clicked dan jika navigasi serial dan fim di klik hapus class show
dropdownFilm.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleFilm();
  if (showSerial.classList.contains("show")) {
    showSerial.classList.remove("show");
  }
});
dropdownSerial.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleSerial();
  if (showFilm.classList.contains("show")) {
    showFilm.classList.remove("show");
  }
});

// Close dropdown when dom element is clicked
document.documentElement.addEventListener("click", () => {
  if (showSerial.classList.contains("show")) {
    toggleSerial();
  }
});
document.documentElement.addEventListener("click", () => {
  if (showFilm.classList.contains("show")) {
    toggleFilm();
  }
});
