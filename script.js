function abrirConvite() {
  document.getElementById('capa').style.display = 'none';
  document.getElementById('convite').style.display = 'block';
}

// (restante do código continua igual)
function confirmarPresenca() {
  alert("Obrigada! Sua presença foi confirmada. 💖");
}

// Contagem regressiva (igual ao anterior)
const dataEvento = new Date("Aug 23, 2025 18:00:00").getTime();

const x = setInterval(function () {
  const agora = new Date().getTime();
  const distancia = dataEvento - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("contador").innerHTML =
    dias + "d " + horas + "h " + minutos + "m " + segundos + "s";

  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "A festa já começou! 🎉";
  }
}, 1000);
