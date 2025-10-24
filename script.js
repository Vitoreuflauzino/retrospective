let currentSlide = 17;
const totalSlides = 19;
let autoTimeout; 

function showSlide(slideNumber) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.classList.remove("active"));

  const current = document.getElementById(`slide${slideNumber}`);
  if (current) current.classList.add("active");

  if (autoTimeout) clearTimeout(autoTimeout);

  if (current?.classList.contains("auto")) {
    autoTimeout = setTimeout(() => proximo(), 6000);
  }
}
showSlide(currentSlide);

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

const cartas = document.querySelectorAll("#cartas-container .carta-frase");
const fotoFinal = document.getElementById("foto-final");
let cartasReveladas = 0;

cartas.forEach(carta => {
  // cria a estrutura da carta
  const inner = document.createElement("div");
  inner.classList.add("carta-inner");

  const frente = document.createElement("div");
  frente.classList.add("carta-frente");

  const verso = document.createElement("div");
  verso.classList.add("carta-verso");
  verso.innerText = carta.dataset.frase;

  inner.appendChild(frente);
  inner.appendChild(verso);
  carta.appendChild(inner);

  // evento de clique
  carta.addEventListener("click", () => {
    if (!carta.classList.contains("virada")) {
      carta.classList.add("virada");
      cartasReveladas++;

      if (cartasReveladas === cartas.length) {
        fotoFinal.classList.add("mostrar");
      }
    }
  });
});
const resposta = document.getElementById("resposta");

document.getElementById("opcao1").addEventListener("click", () => {
  resposta.innerText = "💖 Tudo bem, eu fico com você.";
});

document.getElementById("opcao2").addEventListener("click", () => {
  resposta.innerText = "💞 Eu ficarei com você pra sempre.";
});

document.getElementById("opcao3").addEventListener("click", () => {
  resposta.innerText = "😍 Viveremos juntos até a eternidade.";
});






