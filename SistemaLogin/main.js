document.getElementById("logoutBtn").addEventListener("click", () => {
  // Limpa o armazenamento de sessão (se estiver usando)
  sessionStorage.clear();
  // Redireciona para a página de login
  window.location.href = "index.html";
});
