
let formulario = document.getElementById("ingresar");

formulario.addEventListener("submit", async (esc) => {
  esc.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let resp = await fetch(`../api/users/${email}`);
  let data = await resp.json();
  if (data.email === email && data.password === password) {

      Swal.fire({
          title: "Bienvenido",
          text: "Has iniciado sesión correctamente",
          icon: "success",
      })
      if (data.rol === "Comprador") {
          localStorage.setItem("rol", "Comprador");
          window.location.href = "../web/social.html";
        
      }else{

      }
     // window.location ="../web/social.html";
  } else {
      Swal.fire({
          title: "Usuario no encontrado",
          text: "El usuario no existe, o los datos no coinciden con nuestros registros",
          icon: "error",
      })
  }

});
//Versión Funcional al 100%, conectada a PostgreSQL


