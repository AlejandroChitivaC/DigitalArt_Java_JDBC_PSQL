function getData() {
  let data = {
    name: document.getElementById("name").value,
    username: document.getElementById("username").value,
    coleccion: document.getElementById("coleccion").value,
};
  if (data.name === "" || data.username === "" || data.coleccion === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Todos los campos son requeridos",
    });
  }
  fetch(`../api/coleccion/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));
}