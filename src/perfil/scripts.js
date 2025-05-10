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
