const commentForm = document.querySelector('#comment-form');
const commentsDiv = document.querySelector('#comments');
let indice = 1

commentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Obter valores do formulário
  const comment = document.querySelector('#comment').value;

  if (comment == "") {
    return
  }
  // Criar um elemento de comentário
  const commentElem = document.createElement('div');
  commentElem.classList.add('comment');
  commentElem.innerHTML = `<p>${comment}</p><p class="timestamp">${new Date().toLocaleString()}</p>`;

  // Adicionar o elemento de comentário ao div de comentários
  commentsDiv.insertBefore(commentElem, commentsDiv[0]);

  // Limpar o formulário
  document.querySelector('#comment').value = '';

  localStorage.setItem(indice, comment)
  indice += 1;
});
