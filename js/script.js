// OffCanvas
const offCanvas = document.querySelector(".offcanvas");
const stickyTop = document.querySelector(".sticky-top");

offCanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

offCanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// Confirmation Form
window.addEventListener("load", function () {
  const form = document.getElementById("confirmation-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Confirmation Success!");
    });
  });
});
