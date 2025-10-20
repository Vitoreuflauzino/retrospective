let currentSlide = 1;
const totalSlides = 3; // Mude conforme o número de slides
let autoSlideInterval;

// Função para ir para o próximo slide automaticamente
function nextSlide() {
  const current = document.getElementById(`slide${currentSlide}`);
  current.classList.remove("active");

  currentSlide++;

  // Se for o último slide, para a navegação automática
  if (currentSlide > totalSlides) {
    clearInterval(autoSlideInterval); // Para o setInterval
    return;
  }

  const next = document.getElementById(`slide${currentSlide}`);
  next.classList.add("active");
}

// Função chamada ao clicar no botão "Começar"
function startSlideshow() {
  // Some com o slide 1
  document.getElementById("slide1").classList.remove("active");

  // Mostra o slide 2
  currentSlide = 2;
  document.getElementById("slide2").classList.add("active");

  // Começa a transição automática entre os slides (a cada 3 segundos)
  autoSlideInterval = setInterval(nextSlide, 3000);
}
