const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

const cardWidth = 280;
let position = 0;

function getMaxScroll() {
  const visibleWidth = track.parentElement.offsetWidth - 100;
  return -(track.scrollWidth - visibleWidth);
}

function updatePosition() {
  track.style.transform = `translateX(${position}px)`;
}

/* Botões */
nextBtn.addEventListener("click", () => {
  position -= cardWidth;
  const maxScroll = getMaxScroll();
  if (position < maxScroll) position = maxScroll;
  updatePosition();
});

prevBtn.addEventListener("click", () => {
  position += cardWidth;
  if (position > 0) position = 0;
  updatePosition();
});

/* ======================
   SWIPE MOBILE
====================== */
let startX = 0;
let currentX = 0;
let isDragging = false;

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
});

track.addEventListener("touchend", () => {
  if (!isDragging) return;

  const diff = currentX - startX;

  // sensibilidade do gesto
  if (diff > 50) {
    position += cardWidth;
  } else if (diff < -50) {
    position -= cardWidth;
  }

  const maxScroll = getMaxScroll();
  if (position > 0) position = 0;
  if (position < maxScroll) position = maxScroll;

  updatePosition();
  isDragging = false;
});


