function mostrarDescripcion(id) {
  let descripcionTexto = "";

  switch (id) {
    case 1:
      descripcionTexto = "Descripción del Proyecto 1...";
      break;
    case 2:
      descripcionTexto = "Descripción del Proyecto 2...";
      break;
    case 3:
      descripcionTexto = "Descripción del Proyecto 3...";
      break;
    default:
      descripcionTexto = "Proyecto desconocido.";
  }

  document.getElementById("texto-descripcion").innerText = descripcionTexto;
  document.getElementById("descripcion-proyecto").classList.remove("oculto");
}

function cerrarDescripcion() {
  document.getElementById("descripcion-proyecto").classList.add("oculto");
}
document.addEventListener("DOMContentLoaded", function () {
  const proyectos = document.querySelectorAll(".proyecto img");

  proyectos.forEach((img) => {
    img.addEventListener("click", function () {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
      document.body.appendChild(modal);

      document.querySelector(".close").addEventListener("click", function () {
        modal.remove();
      });

      modal.addEventListener("click", function (e) {
        if (e.target === modal) modal.remove();
      });
    });
  });
});
