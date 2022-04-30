const open_modal = document.getElementById("open_modal");

const fondo_modal = document.querySelector(".fondo_modal");
const modal = document.querySelector(".modal");

// seleccionamos todos los botones de la modal
const close_modal_btns = document.querySelectorAll(".close_modal");

// evento click
open_modal.addEventListener("click", () => {
  fondo_modal.classList.remove("hidden");
  modal.classList.remove("hidden");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modal of close_modal_btns) {
  btn_modal.addEventListener("click", () => {
    fondo_modal.classList.add("hidden");
    modal.classList.add("hidden");
  });
}
