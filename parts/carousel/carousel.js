let movies = [
  {
    name: "Spider-Man: Homecoming",
    des: "Peter kembali ke rutinitas normalnya sehari-hari, tetapi ketika Hering muncul sebagai penjahat baru, semua hal terpenting yang dipegang Peter akan terancam.",
    info: "English • Action • 2017",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/520/1280520-h-e54f7ee30175",
  },
  {
    name: "Perempuan Bergaun Merah",
    des: "Hidup Dinda berubah menjadi mimpi buruk sejak temannya menghilang secara misterius.",
    info: "Indonesia • Horror • 2022",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8539/1498539-h-9bab3d528026",
  },
  {
    name: "Black Panther: Wakanda Forever",
    des: "Ratu Ramonda, Shuri, M'Baku, Okoye, dan Dora Milaje berjuang untuk melindungi negara mereka dari campur tangan kekuatan dunia setelah kematian Raja T'Challa.",
    info: "English • Action • 2022",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/1569/1491569-h-b1dd7b6cc698",
  },
  {
    name: "Kaguya-sama: Love Is War - Ultra Romantic",
    des: "EPISODE BARU SETIAP JUMAT. Perang cinta psikologis yang kocak antara Miyuki Shirogane dan Kaguya Shinomiya dimulai.",
    info: "Disney • Japanese • Drama",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3288/1273288-h-d3cfbc11a4cf",
  },
  {
    name: "Guardians Of The Galaxy Vol. 2",
    des: "Sovereign menyerang Guardians setelah Rocket mencuri yang seharusnya mereka lindungi. Ayah Peter tiba untuk menyelamatkan Guardians.",
    info: "English • Action • 2017",
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/296/1460296-h-686045aa6109",
  },
];

const caraousel = document.querySelector(".caraousel");
let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //create dom element
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let info = document.createElement("p");
  let des = document.createElement("p");

  //attaching all elements
  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  info.appendChild(document.createTextNode(movies[slideIndex].info));
  des.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(info);
  content.appendChild(des);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  caraousel.appendChild(slide);

  //setting up images
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting elements classname
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  info.className = "movie-info";
  des.className = "movie-description";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

let sliderTimer = setInterval(() => {
  createSlide();
}, 4000);

let isMouseInCarousel = false;

caraousel.addEventListener("mouseover", () => {
  isMouseInCarousel = true;
  clearInterval(sliderTimer);
});

caraousel.addEventListener("mouseleave", () => {
  isMouseInCarousel = false;
  sliderTimer = setInterval(() => {
    createSlide();
  }, 4000);
});

//prev and next button carousel
const prevCarousel = document.querySelector(".pre-slider");
const nxtCarousel = document.querySelector(".nxt-slider");

caraousel.addEventListener("mouseover", () => {
  prevCarousel.style.opacity = "0.7";
  nxtCarousel.style.opacity = "0.7";
});

caraousel.addEventListener("mouseleave", () => {
  prevCarousel.style.opacity = "0";
  nxtCarousel.style.opacity = "0";
});

// prevCarousel.addEventListener("click", () => {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = sliders.length - 1;
//   }
//   sliders.forEach((slider) => {
//     slider.style.transform = `translateX(-${slideIndex * 100}%)`;
//   });
// });

// nxtCarousel.addEventListener("click", () => {
//   slideIndex++;
//   if (slideIndex >= sliders.length) {
//     slideIndex = 0;
//   }
//   sliders.forEach((slider) => {
//     slider.style.transform = `translateX(-${slideIndex * 100}%)`;
//   });
// });
