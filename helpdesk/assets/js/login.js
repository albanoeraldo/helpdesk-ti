document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const errorMsg = document.getElementById("error");

    // Login simples, sem backend
    const emailCorreto = "admin@helpdesk.com";
    const senhaCorreta = "123456";

    if (email === emailCorreto && senha === senhaCorreta) {
        // Salva sessão no navegador
        localStorage.setItem("logado", "true");

        // Vai para o dashboard
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Email ou senha incorretos!";
    }
});
