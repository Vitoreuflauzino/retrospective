let currentSlide = 1;
const totalSlides = 13;

function showSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  const current = document.getElementById(`slide${slideNumber}`);
  if (current) current.classList.add("active");

  const hasImage = current?.querySelector("img");
  const isAuto = current?.classList.contains("auto");

  if (isAuto) {
    setTimeout(() => proximo(), 6000);
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
