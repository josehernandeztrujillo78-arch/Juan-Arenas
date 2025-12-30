const carousel = document.getElementById("projectsCarousel");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

// Tamaño de cada tarjeta + gap
const cardWidth = carousel.querySelector(".project-card").offsetWidth + 16; // 16px gap

// Función para mover
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
});
