const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("novoLogin")
const campoNovaSenha = document.getElementById("novaSenha")
const campoRepSenha = document.getElementById("repSenha")
let usuarios = [];

function login(){
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuario ou senha incorreto!"
    for (let usuario of usuarios){
        if (usuario.login == login && usuario.senha == senha){
            mensagem = "Seu login foi um sucesso!"
            localStorage.setItem("logado", JSON.stringify(usuario));
            window.location.href="./logado/home.html"
            break;
        }
    }
    alert(mensagem);
}
function cadastrar(){
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login:campoNovoLogin.value,
            senha:campoNovaSenha.value
        }
        usuarios.push(usuario);
        alert("Usuario cadastrado com sucesso!")
    } else{
        alert("As senhas não coicidem!")
    } 
    
    }
