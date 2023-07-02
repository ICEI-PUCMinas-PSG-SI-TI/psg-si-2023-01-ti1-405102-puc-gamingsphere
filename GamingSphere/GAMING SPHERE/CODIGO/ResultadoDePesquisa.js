// Vetor de notícias (ao adicionar uma notícia nova no vetor já será acrescentada à página)
const news = [
  {
    id: 0,
    title:
      "Zelda Tears of the Kingdom: Um novo capítulo emocionante para a lendária franquia de aventura e fantasia",
    imageSrc: "IMAGEM/Zelda0.jpg",
    path: "Zelda.html",
  },
  {
    id: 1,
    title:
      "Desenvolvedores de Zelda revelam o principal tema de Zelda Tears of the Kingdom",
    imageSrc: "IMAGEM/Zelda1.jpg",
    path: "#",
  },
  {
    id: 2,
    title:
      "The Legend of Zelda: Tears of the Kingdom terá uma transmissão ao vivo especial um dia antes de seu lançamento",
    imageSrc: "IMAGEM/Zelda2.jpg",
    path: "#",
  },
];

function createCard() {
  // Encontra a tag main no corpo do HTML pelo ID
  const mainContent = document.getElementById("main-content");

  // Para cada notícia que existe no vetor de notícias é criado uma div com a classe card
  for (let i = 0; i < news.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");

    mainContent.appendChild(card);
  }

  // Pega todas as divs que tem a classe "card"
  const cards = document.getElementsByClassName("card");

  // Percorre cada elemento do vetor de notícias (news) realizando a adição de novos elementos no card
  news.forEach((singleNews, index) => {
    // Cria uma div com a classe "card-wrapper"
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("card-wrapper");

    // Cria uma imagem com a classe definida no objeto com o atributo "imageSrc" e o atributo "id"
    const cardImage = document.createElement("img");
    cardImage.src = singleNews.imageSrc;
    cardImage.id = `Zelda`;

    // Cria um link com a classe definida no objeto com o atributo "path" e o atributo "id"
    const cardArchor = document.createElement("a");
    cardArchor.href = singleNews.path;

    // Verifica se existe link para redirencionar a notícia, caso haja link é levado para uma nova página, se não é mantido na mesma página
    if (singleNews.path !== "#") {
      cardArchor.target = "_blank";
    }
    cardArchor.id = `notzelda`;

    // Cria um título com a classe definida no objeto com o atributo "title" e o atributo "id"
    const newsTitle = document.createElement("h4");
    newsTitle.innerText = singleNews.title;
    newsTitle.id = `notzelda`;

    // Adiciona os elementos criados ao seus respectivos pais
    cardArchor.appendChild(newsTitle);

    cardWrapper.appendChild(cardImage);
    cardWrapper.appendChild(cardArchor);

    cards[index].appendChild(cardWrapper);
  });
}

// Chama a função de criação de card
createCard();
// Obtendo a referência para a imagem específica
const imagemZelda = document.querySelector('img[src="Zelda0.jpg"]');

// Adicionando o ouvinte de evento de clique à imagem
imagemZelda.addEventListener("click", function() {
  // Obtendo o link para redirecionar
  const link = news.find((item) => item.imageSrc === "Zelda0.jpg").path;

  // Redirecionando para o link
  window.location.href = link;
});
