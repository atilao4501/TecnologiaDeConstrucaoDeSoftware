class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class Auth {
  constructor() {
    this.users = [];
  }

  registerUser(name, email, password) {
    if (!this.isEmailRegistered(email)) {
      const newUser = new User(name, email, password);
      this.users.push(newUser);
      return true;
    } else {
      return false;
    }
  }

  loginUser(email, password) {
    const user = this.users.find(
      (user) => user.email === email && user.password === password
    );
    return user ? true : false;
  }

  isEmailRegistered(email) {
    return this.users.some((user) => user.email === email);
  }

  validatePassword(password, confirmPassword) {
    return password === confirmPassword;
  }

  showError(message) {
    const errorDiv = document.getElementById("error");
    errorDiv.innerHTML = `<p class="text-danger">${message}</p>`;
  }
}

const auth = new Auth();

// Função para cadastrar usuário
function cadastrarUsuario() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("emailRegister").value;
  const password = document.getElementById("passwordRegister").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (name && email && password && confirmPassword) {
    if (auth.validatePassword(password, confirmPassword)) {
      if (auth.registerUser(name, email, password)) {
        alert("Usuário cadastrado com sucesso!");
        $("#registerModal").modal("hide");
      } else {
        document.getElementById("registerError").innerHTML =
          "<p class='text-danger'>Email já cadastrado</p>";
      }
    } else {
      document.getElementById("registerError").innerHTML =
        "<p class='text-danger'>As senhas não coincidem</p>";
    }
  } else {
    document.getElementById("registerError").innerHTML =
      "<p class='text-danger'>Preencha todos os campos</p>";
  }
}

// Função para realizar login
document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    if (auth.loginUser(email, password)) {
      window.location.href = "main.html"; // Redireciona para main.html
    } else {
      auth.showError("Usuário ou senha inválidos.");
    }
  } else {
    auth.showError("Preencha todos os campos.");
  }
});
