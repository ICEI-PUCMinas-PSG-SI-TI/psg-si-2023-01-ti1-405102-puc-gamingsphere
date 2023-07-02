let usuarios = [];
let usuariosSalvos = localStorage.getItem('usuarios');
if (usuariosSalvos) {
  usuarios = JSON.parse(usuariosSalvos);
}

function logar() {
  let nomedigitado = document.getElementById("nomeUsuario").value;
  let userdigitado = document.getElementById("usuarioUsuario").value;
  let emaildigitado = document.getElementById("emailUsuario").value;
  let senhadigitada = document.getElementById("senhaUsuario").value;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nome === nomedigitado && usuarios[i].usuario === userdigitado && usuarios[i].email === emaildigitado && usuarios[i].senha === senhadigitada) {
      alert("usuarioEncontrado")
      console.log("XXX")
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarios[i]));
      window.location.href = "https://tela-home.aniellevic.repl.co/"
      return;
    }
  }

  alert('Usuário ou senha inválidos!');
}