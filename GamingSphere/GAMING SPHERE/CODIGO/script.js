let usuarios = [];
// saveForm("", " ", ' ', ' ', ' ')

window.addEventListener('load', function () {
  let usuariosSalvos = localStorage.getItem('usuarios');
  if (usuariosSalvos) {
    usuarios = JSON.parse(usuariosSalvos);
  }
});

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

  for (let i = 0; i < Object.values(pessoa).length; i++) {
    console.log(Object.values(pessoa)[i])
    if (Object.values(pessoa)[i] == "") {
      inputs[i].style.boxShadow = "0 0 10px 0 rgba(128, 0, 128, 0.5)";
      return
    }
  }

  if (inputs[3].value != inputs[4].value) {
    inputs[4].style.boxShadow = "0 0 10px 0 rgba(128, 0, 128, 0.5)";
    window.alert("Senhas diferentes!")
    return
  }

  localStorage.setItem('usuarioAtual', JSON.stringify(pessoa));
  usuarios.push(pessoa);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  localStorage.setItem("usuarioLogado", usuarios.length - 1)
  window.location.href = "Home.html"
}

function deletarConta() {
  let usuarioLogado = localStorage.getItem("usuarioLogado")
  if (usuarioLogado) {
    usuarios.splice(usuarioLogado, 1)
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    localStorage.removeItem("usuarioLogado")
    window.location.href = "Home.html";
  }
}

function eventos() {
  alert("Evento.html");
}