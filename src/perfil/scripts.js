const campoSenha = document.getElementById("senha"); // Função de ocultar e vizualizar senha
const alternar = document.getElementById("alternar");
alternar.addEventListener("click", function () {
    const opcao = campoSenha.getAttribute("type") === "password" ? "text" : "password";
    campoSenha.setAttribute("type", opcao);

    alternar.src = opcao === "text" ? "midia/open.png" : "midia/close.png";

}) 

// Função de salvar
const salvarAlt = document.getElementById("salvar");

salvarAlt.addEventListener("mousedown", function () {
    const salvou = salvarAlt
    salvou.innerHTML = "Salvo!"
    salvou.style.background ="rgb(74, 157, 74)"
})

// permitindo que o usuário adicione foto de perfil
const editarIcone = document.getElementById('editar');
const inputFoto = document.getElementById('foto');
const imagemUser = document.getElementById('user');

editarIcone.addEventListener('click', function () {
    inputFoto.click(); // abre o seletor de arquivos
});

inputFoto.addEventListener('change', function () {
    const arquivo = this.files[ 0 ];
    if (arquivo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagemUser.src = e.target.result;
        };
        reader.readAsDataURL(arquivo);
    }
});
