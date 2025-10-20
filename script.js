let currentSlide = 1;
const totalSlides = 4;

// Mostra o slide atual
function showSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  const current = document.getElementById(`slide${slideNumber}`);
  if (current) current.classList.add("active");

  const hasImage = current?.querySelector("img");
  const isAuto = current?.classList.contains("auto");

  if (hasImage || isAuto) {
    setTimeout(() => proximo(), 4000);
  }
}

// Começa o slideshow e toca música
function startSlideshow() {
  currentSlide = 2;
  document.getElementById("musica").play();
  showSlide(currentSlide);
}

// Passa para o próximo slide
function proximo() {
  currentSlide++;
  if (currentSlide > totalSlides) {
    currentSlide = totalSlides;
    alert("💖 Fim da retrospectiva 💖");
    return;
  }
  showSlide(currentSlide);
}

// Carta com efeito de virar
function abrirCarta() {
  document.getElementById("carta").classList.add("virada");
}

// Corações flutuantes
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
