document.getElementById("logoutBtn").addEventListener("click", () => {
  sessionStorage.clear();

  window.location.href = "index.html";
});
