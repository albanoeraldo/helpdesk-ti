const toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("logado");
    window.location.href = "../index.html";
});

