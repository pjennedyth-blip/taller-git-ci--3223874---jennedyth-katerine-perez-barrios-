function suma(a, b) {
  return a + b;
}

// NUEVA FUNCIÓN PARA LA PARTE 3
function agregarItem(texto) {
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.appendChild(li);
}

console.log("App lista");

module.exports = { suma, agregarItem };
