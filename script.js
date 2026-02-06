const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

const cardWidth = 280; // largura do card + margem
let position = 0;

function getMaxScroll() {
  const visibleWidth = track.parentElement.offsetWidth - 100; // padding lateral
  return -(track.scrollWidth - visibleWidth);
}

nextBtn.addEventListener("click", () => {
  position -= cardWidth;
  const maxScroll = getMaxScroll();
  if (position < maxScroll) position = maxScroll;
  track.style.transform = `translateX(${position}px)`;
});

prevBtn.addEventListener("click", () => {
  position += cardWidth;
  if (position > 0) position = 0;
  track.style.transform = `translateX(${position}px)`;
});
