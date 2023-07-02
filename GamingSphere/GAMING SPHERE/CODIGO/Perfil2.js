const inputFile = document.querySelector("#picture_input");
const pictureImage = document.querySelector(".picture_image");
const pictureImageTxt = " ";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function(e) {
  console.log("tt");
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function(e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture_img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  }
});
function limitarInput() {
  let input = document.getElementById("idade");
  let valor = input.value;

  if (valor.length > 2) {
    input.value = valor.slice(0, 2);
  }
}

function pegarDados() {
  let usuarios = localStorage.getItem("usuarios")
  usuarios = JSON.parse(usuarios);

  let usuarioLogado = localStorage.getItem("usuarioLogado")
  usuarioLogado = JSON.parse(usuarioLogado);

  usuarioLogado = usuarios[usuarioLogado];

  let nome = document.getElementById("nome")
  let idade = document.getElementById("idade")
  let email = document.getElementById("email")
  let descricao = document.getElementById("descricao")

  console.log(usuarioLogado.email)

  nome.value = usuarioLogado.nome
  idade.value = usuarioLogado.idade
  email.value = usuarioLogado.email
  descricao.value = usuarioLogado.descricao
}

function salvar() {
  let usuarios = localStorage.getItem("usuarios")
  usuarios = JSON.parse(usuarios);

  let usuarioLogado = localStorage.getItem("usuarioLogado")
  posicaoUsuarioLogado = JSON.parse(usuarioLogado);

  usuarioLogado = usuarios[posicaoUsuarioLogado];

  let nome = document.getElementById("nome").value
  let idade = document.getElementById("idade").value
  let email = document.getElementById("email").value
  let descricao = document.getElementById("descricao").value

  usuarioAtualizado = {
    nome: nome,
    usuario: usuarioLogado.usuario,
    email: email,
    senha: usuarioLogado.senha,
    confirmaSenha: usuarioLogado.confirmarSenha,
    idade: idade,
    descricao: descricao
  }
  usuarios[posicaoUsuarioLogado] = usuarioAtualizado
  usuarios = JSON.stringify(usuarios)
  localStorage.setItem("usuarios", usuarios)

  window.location.href = "Perfil1.html"
}

pegarDados()
