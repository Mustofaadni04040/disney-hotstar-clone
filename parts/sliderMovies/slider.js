// CARD SLIDERS
const cardContainers = document.querySelectorAll(
  ".card-recommended-container, .card-new-container, .card-trending-container, .card-serial-container, .card-junior-container"
);
const preBtns = document.querySelectorAll(
  ".pre-recommend-btn, .pre-new-btn, .pre-trend-btn, .pre-serial-btn, .pre-junior-btn"
);
const nxtBtns = document.querySelectorAll(
  ".nxt-recommend-btn, .nxt-new-btn, .nxt-trend-btn, .nxt-serial-btn, .nxt-junior-btn"
);

cardContainers.forEach((item, i) => {
  const containerWidth = item.getBoundingClientRect().width;
  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});

//HOVER PREV AND NEXT BUTTON DI CONTAINER, PREV DAN NEXT BUTTON
const addMouseEvent = (container, prevBtn, nxtBtn) => {
  container.addEventListener("mouseover", () => {
    prevBtn.style.opacity = "0.7";
    nxtBtn.style.opacity = "0.7";
  });
  container.addEventListener("mouseleave", () => {
    prevBtn.style.opacity = "0";
    nxtBtn.style.opacity = "0";
  });
};

addMouseEvent(
  document.querySelector(".card-recommended-container"),
  document.querySelector(".pre-recommend-btn"),
  document.querySelector(".nxt-recommend-btn")
);
addMouseEvent(
  document.querySelector(".card-new-container"),
  document.querySelector(".pre-new-btn"),
  document.querySelector(".nxt-new-btn")
);
addMouseEvent(
  document.querySelector(".card-trending-container"),
  document.querySelector(".pre-trend-btn"),
  document.querySelector(".nxt-trend-btn")
);
addMouseEvent(
  document.querySelector(".card-serial-container"),
  document.querySelector(".pre-serial-btn"),
  document.querySelector(".nxt-serial-btn")
);
addMouseEvent(
  document.querySelector(".card-junior-container"),
  document.querySelector(".pre-junior-btn"),
  document.querySelector(".nxt-junior-btn")
);

//HOVER PREVIOUS AND NEXT BUTTON IN PREV AND NEXT BUTTON
const btnSliders = [
  {
    prev: document.querySelector(".pre-recommend-btn"),
    nxt: document.querySelector(".nxt-recommend-btn"),
  },
  {
    prev: document.querySelector(".pre-new-btn"),
    nxt: document.querySelector(".nxt-new-btn"),
  },
  {
    prev: document.querySelector(".pre-trend-btn"),
    nxt: document.querySelector(".nxt-trend-btn"),
  },
  {
    prev: document.querySelector(".pre-serial-btn"),
    nxt: document.querySelector(".nxt-serial-btn"),
  },
  {
    prev: document.querySelector(".pre-junior-btn"),
    nxt: document.querySelector(".nxt-junior-btn"),
  },
];

const handleMouseOver = (prevBtn, nxtBtn) => {
  prevBtn.style.opacity = "0.7";
  nxtBtn.style.opacity = "0.7";
};

const handleMouseLeave = (prevBtn, nxtBtn) => {
  prevBtn.style.opacity = "0";
  nxtBtn.style.opacity = "0";
};

btnSliders.forEach((btn) => {
  btn.prev.addEventListener("mouseover", () =>
    handleMouseOver(btn.prev, btn.nxt)
  );
  btn.nxt.addEventListener("mouseover", () =>
    handleMouseOver(btn.prev, btn.nxt)
  );
  btn.prev.addEventListener("mouseleave", () =>
    handleMouseLeave(btn.prev, btn.nxt)
  );
  btn.nxt.addEventListener("mouseleave", () =>
    handleMouseLeave(btn.prev, btn.nxt)
  );
});
