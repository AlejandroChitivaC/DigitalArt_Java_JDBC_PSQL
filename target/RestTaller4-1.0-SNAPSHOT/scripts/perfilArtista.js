let info_p = document.getElementById("#info-p");
let data = sessionStorage.getItem("newUser");
let userData = JSON.parse(data);
console.log(userData);

info_p.innerHTML =`<img>${userData.imagen}</img>`;
userData.imagen

console.log(userData.imagen);
console.log(info_p);
