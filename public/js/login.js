document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        const email = document.querySelector("#email");
        const senha = document.querySelector("#senha");

        // Verificação dos campos
        if (email.value.trim() === "" || senha.value.trim() === "") {
            alert("Preencha todos os campos.");
            return;
        }

        // Login bem-sucedido
        alert("Login realizado com sucesso!");

        // Redirecionamento
        window.location.href = "index.html";
    });
});
