var botaoAdicionar = document.querySelector("#adicionar-player");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var nick = form.nick.value;
    var login = form.login.value;
    var senha = form.senha.value;
    var dtnascimento = form.dtnascimento.value;
    var sexo = form.sexo.value; 
    var email = form.email.value;
    var endereco = form.endereco.value;
    var numeroend = form.numeroend.value;
    var complemento = form.complemento.value;

    console.log(nome);
    console.log(nick);
    console.log(login);
    console.log(senha);
    console.log(dtnascimento);
    console.log(sexo);
    console.log(email);
    console.log(endereco);
    console.log(numeroend);
    console.log(complemento);


    alert("Player Cadastrado!");


});


