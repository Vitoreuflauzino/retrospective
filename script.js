let currentSlide = 1;
const totalSlides = 13;
let autoTimeout; // guarda o timeout para limpar se necessário

function showSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  const current = document.getElementById(`slide${slideNumber}`);
  if (current) current.classList.add("active");

  // Limpa timeout antigo
  if (autoTimeout) clearTimeout(autoTimeout);

  // Avança sozinho apenas se tiver a classe "auto"
  if (current?.classList.contains("auto")) {
    autoTimeout = setTimeout(() => proximo(), 6000);
  }
}

function startSlideshow() {
  currentSlide = 2;
  document.getElementById("musica").play();
  showSlide(currentSlide);
}

function proximo() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = totalSlides;
    alert("💖 Fim da retrospectiva 💖");
    return;
  }
  showSlide(currentSlide);
}

function abrirCarta() {
  document.getElementById("carta").classList.add("virada");
}

function gerarCoracoes() {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');
  coracao.innerHTML = '💖';
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(coracao);
  setTimeout(() => coracao.remove(), 7000);
}

setInterval(gerarCoracoes, 900);
