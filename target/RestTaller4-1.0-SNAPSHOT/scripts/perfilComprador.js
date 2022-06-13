let info_p = document.getElementById("#info-p");
let data = sessionStorage.getItem("newUser");
let userData = JSON.parse(data);

if (userData.rol === "Comprador") {
  info_p.innerHTML = `<div>
  <img style="margin-left:100px" class="profile-pic" src=${userData.imagen} alt="userPicture"/>
  <h5 style="color:white;font-weight:normal">${userData.name}</h5>
  <h5><p style="color:white;font-weight:bold">Username:${userData.username}</p></h5>
  <h5><p style="color:white;font-weight:bold">Fcoins:${userData.fcoins}</p></h5>
  </div>`;
} else {
}

console.log(userData.imagen);
console.log(info_p);
