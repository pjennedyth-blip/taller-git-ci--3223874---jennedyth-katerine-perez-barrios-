function suma(a, b) {
  return a + b;
}

// Nueva función para agregar elementos a la lista (UI)
function agregarItem(texto) {
  const lista = document.getElementById("lista");

  if (!lista) {
    console.error("No se encontró el elemento #lista");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;

  lista.appendChild(li);
}

// Log para asegurar que el script está cargado
console.log("App lista");

// Exportación para pruebas (Node.js)
module.exports = { suma, agregarItem };
