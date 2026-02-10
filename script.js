const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

const step = 280;
let position = 0;

function getMaxScroll() {
  const visibleWidth = track.parentElement.offsetWidth - 100;
  return -(track.scrollWidth - visibleWidth);
}

function updatePosition() {
  track.style.transform = `translateX(${position}px)`;
}

/* ======================
   BOTÕES 
====================== */
nextBtn.addEventListener("click", () => {
  position -= step;
  const maxScroll = getMaxScroll();
  if (position < maxScroll) position = maxScroll;
  updatePosition();
});

prevBtn.addEventListener("click", () => {
  position += step;
  if (position > 0) position = 0;
  updatePosition();
});

/* ======================
   DRAG / SWIPE REAL
====================== */
let isDragging = false;
let startX = 0;
let startPosition = 0;

track.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
  startPosition = position;
});

track.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const diff = currentX - startX;

  position = startPosition + diff;

  const maxScroll = getMaxScroll();
  if (position > 0) position = 0;
  if (position < maxScroll) position = maxScroll;

  updatePosition();
});

track.addEventListener("touchend", () => {
  isDragging = false;
});


