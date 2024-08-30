function calculadora() {
  let numero1 = Number(document.getElementById("valor1").value);
  let numero2 = Number(document.getElementById("valor2").value);
  let opcao = document.getElementById("operacao").value;
  let resposta;

  // Validação básica
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira apenas números.");
    return;
  }

  switch (opcao) {
    case "soma":
      resposta = numero1 + numero2;
      break;
    // ... outros casos ...
    case "divisao":
      if (numero2 === 0) {
        alert("Divisão por zero não é permitida.");
        return;
      }
      resposta = numero1 / numero2;
      break;
    default:
      alert("Operação inválida.");
  }

  document.getElementById("resultado").textContent = resposta.toFixed(2); // Formata com 2 casas decimais
}
