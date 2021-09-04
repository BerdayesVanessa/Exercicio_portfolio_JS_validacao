import "./styles.css";

let botaoEnviar = document.getElementById('botaoEnviar')

botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault()

let campoNome = document.getElementById("nome");
let mensagemNome = document.getElementById("mensagemNome");

let campoEmail = document.getElementById("email");
let mensagemEmail = document.getElementById("mensagemEmail");

let campoMensagem = document.getElementById("mensagem");
let mensagemMensagem = document.getElementById("mensagemMensagem");


campoNome.value = "";

if (campoNome.value.length === 0) {
  mensagemNome.innerHTML = "Digite seu nome";
} else {
  mensagemNome.innerHTML = "";
}

//campoEmail.value = "";

if (campoEmail.value === "") {
  mensagemEmail.innerHTML = "Digite seu email";
} else {
  mensagemEmail.innerHTML = "";
}


if (campoEmail.value.indexOf("@") === -1 || campoEmail.value.indexOf(".") === -1 || (campoEmail.value.indexOf(".") - campoEmail.value.indexOf("@") === 1)) {
  campoEmail.classList.add("errorInput")
} else {
  campoEmail.classList.remove("errorInput")
}


campoMensagem.value = "";

if (campoMensagem.value.length === 0) {
  mensagemMensagem.innerHTML = "Digite sua mensagem";
} else {
  mensagemMensagem.innerHTML = "";
}
});


let promessa = fetch("https://api.github.com/users/BerdayesVanessa/repos");

let containerRepositorios = document.getElementById("containerGithub");

promessa
  .then(function (retorno) {
    return retorno.json();
  })
  .then(function (repositorios) {
    let nomes = [];

    for (let repositorio of repositorios) {
      nomes.push(
        "<li>" + repositorio.name + " " + repositorio.svn_url + "</li>"
      );
    }
    containerRepositorios.innerHTML = nomes;
  });



