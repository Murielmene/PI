document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const senha = document.querySelector("#senha");

        // Verificação dos campos vazios
        if (nome.value.trim() === "" || email.value.trim() === "" || senha.value.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Conta criada
        alert("Conta criada com sucesso!");

        // Redirecionamento
        window.location.href = "./login.html";
    });
});
