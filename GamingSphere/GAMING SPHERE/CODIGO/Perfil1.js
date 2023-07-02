//const inputFile = document.querySelector("#picture_input");
const pictureImage = document.querySelector(".picture_image");
const pictureImageTxt = " ";
pictureImage.innerHTML = pictureImageTxt;

/*
inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
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
*/

function validateForm() {
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  let name = document.getElementById("name").value;
  let user = document.getElementById("user").value;
  let email = document.getElementById("email").value;

  if (password !== confirm_password) {
    alert("As senhas não são iguais");
    return;
  }

  saveForm(name, user, email, password, confirm_password);
}

function saveForm() {
  let inputs = document.querySelectorAll("input")
  let pessoa = {
    nome: inputs[0].value,
    usuario: inputs[1].value,
    email: inputs[2].value,
    senha: inputs[3].value,
    confirmaSenha: inputs[4].value,
  };

  usuarios.push(pessoa);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem("usuarioLogado", usuarios.length - 1)
  window.location.href = "https://perfil.pedrosimoes2.repl.co/"
}

function deletarConta() {
  let usuarioLogado = localStorage.getItem("usuarioLogado")
  if (usuarioLogado) {
    usuarios.splice(usuarioLogado, 1)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    localStorage.removeItem("usuarioLogado")
    window.location.href = "https://perfil.pedrosimoes2.repl.co/";
    
  }
}
window.addEventListener('load', function () {
  let usuariosSalvos = localStorage.getItem('usuarios');
  if (usuariosSalvos) {
    usuarios = JSON.parse(usuariosSalvos);

    // Verificar se há um usuário logado
    let usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
      pegarDados()
    }
  }
});

function pegarDados(){
  let usuarios = localStorage.getItem("usuarios")
  usuarios = JSON.parse(usuarios);

  let usuarioLogado = localStorage.getItem("usuarioLogado")
  usuarioLogado = JSON.parse(usuarioLogado);

  usuarioLogado = usuarios[usuarioLogado];

  let nome = document.getElementById("nome")
  let idade = document.getElementById("idade")
  let email = document.getElementById("email")
  let descricao = document.getElementById("descricao")

  nome.innerHTML = usuarioLogado.nome
  idade.innerHTML = usuarioLogado.idade
  email.innerHTML = usuarioLogado.email
  descricao.innerHTML = usuarioLogado.descricao
}
