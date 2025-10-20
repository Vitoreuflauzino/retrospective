let currentSlide = 1;
const totalSlides = 3; // Atualize se você tiver mais slides

function showSlide(slideNumber) {
  // Esconde todos os slides
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  // Mostra o slide atual
  const current = document.getElementById(`slide${slideNumber}`);
  current.classList.add("active");

  // Verifica se o slide deve avançar automaticamente (tem imagem ou classe 'auto')
  const hasImage = current.querySelector("img");
  const isAuto = current.classList.contains("auto");

  if (hasImage || isAuto) {
    // Avança automaticamente em 3 segundos
    setTimeout(() => {
      proximo();
    }, 3000);
  }
}

function startSlideshow() {
  currentSlide = 2;
  showSlide(currentSlide);
}

function proximo() {
  currentSlide++;

  if (currentSlide > totalSlides) {
    currentSlide = totalSlides; // Não passa do último
    return;
  }

  showSlide(currentSlide);
}
function abrirCarta() {
  document.getElementById("frente").style.display = "none";
  document.getElementById("conteudo").style.display = "block";
}
