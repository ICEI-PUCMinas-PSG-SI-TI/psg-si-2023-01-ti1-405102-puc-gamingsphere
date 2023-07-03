 //LocalStorage para carregar as imagens do html
localStorage.setItem("linkImgs", JSON.stringify([
  "https://sm.ign.com/t/ign_br/event/c/ccxp-22/ccxp-22_zt82.1200.png",
  "https://t3.ftcdn.net/jpg/04/45/45/52/360_F_445455295_70V28TSVETI7IZfKvCWiUARqNuc6fTvv.jpg",
  "https://t.ctcdn.com.br/P8uCBOqi7hq04wuVqfEQ8gsmFOI=/1200x675/smart/filters:format(webp)/i746228.jpeg",
  "https://yt3.googleusercontent.com/ytc/AGIKgqM5P04HPV92PrzEd-RDIFAh8HklUKyE32lqrvvBlg=s900-c-k-c0x00ffffff-no-rj",
  "https://sm.ign.com/ign_br/screenshot/default/big-festival-2022_c5yf.jpg",
  "https://www.gamexp.com.br/static/img/GXP_COMPARTILHAMENTO.png"
]))


//Continuação do código paracarregar as imagens do html
// function carregarImg() {
//   let imgs = document.querySelector(".cards-list");
//   let linkImgs = localStorage.getItem("linkImgs");
//   linkImgs = JSON.parse(linkImgs);

//   const cardsRedirecionar = [1, ];
  
//   for (let i = 0; i < linkImgs.length; i++) {
//     if (cardsRedirecionar.includes(i)) {
//       imgs.innerHTML += ` 
//         <div class="card" id="card-${i}" onclick="redirecionarPagina('BGS.html')">
//           <div class="card_image">
//             <img src="${linkImgs[i]}" />
//           </div>
//         </div>
//       `;
//     } else {
//       imgs.innerHTML += ` 
//         <div class="card">
//           <div class="card_image">
//             <img src="${linkImgs[i]}" />
//           </div>
//         </div>
//       `;
//     }
//   }
// }




function carregarImg() {
  let imgs = document.querySelector(".cards-list");
  let linkImgs = localStorage.getItem("linkImgs");
  linkImgs = JSON.parse(linkImgs);

  const redirecionamentos = [
    { cardIndex: 1, pagina: "ccxp.html" },
    { cardIndex: 2, pagina: "Bgs.html" },
    { cardIndex: 3, pagina: "SummerGameFest.html" },
    { cardIndex: 4, pagina: "GamesForChange.html" },
    { cardIndex: 5, pagina: "Big Festival.html" },
    { cardIndex: 6, pagina: "GameXP.html" }
  ];

  for (let i = 0; i < linkImgs.length; i++) {
    const redirecionamento = redirecionamentos.find((redir) => redir.cardIndex === (i + 1));
    if (redirecionamento) {
      imgs.innerHTML += ` 
        <div class="card" id="card-${i}" onclick="redirecionarPagina('${redirecionamento.pagina}')">
          <div class="card_image">
            <img src="${linkImgs[i]}" />
          </div>
        </div>
      `;
    } else {
      imgs.innerHTML += ` 
        <div class="card">
          <div class="card_image">
            <img src="${linkImgs[i]}" />
          </div>
        </div>
      `;
    }
  }
}


function redirecionarPagina(url) {
  window.location.href = url;
}


// JS da contagem regressiva na tela
function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    console.log("Contagem regressiva concluída!");
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("Dias").textContent = formatTime(days);
  document.getElementById("horas").textContent = formatTime(hours);
  document.getElementById("minutos").textContent = formatTime(minutes);
  document.getElementById("segundos").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

const targetDate = new Date("2023-07-28T10:00:00");
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
document.addEventListener("DOMContentLoaded", updateCountdown);
