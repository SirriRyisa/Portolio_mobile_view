//  const logoImage = document.querySelector(".logo-img")
//  const desktopView = document.querySelector(".toggleclose")
//  const closeIcon = document.querySelector(".toggle")

//  function show() {
//  closeIcon.style.display = "flex";
//  desktopView.style.top = "0"
//  }

//  function close() {
//  closeIcon.style.top = '-100%';
//  }

//  logoImage.addEventListener("click", show)
//  closeIcon.addEventListener("click", show)

//  document.querySelectorAll('.menu-list').forEach((link) => link.addEventListener('click', close));

document.querySelector(".logo-img").addEventListener("click", () => {
  document.querySelector(".toggle").style.display = "flex";
});

console.log("hello");

document.querySelector(".toggleclose").addEventListener("click", () => {
  document.querySelector(".toggle").style.display = "none";
});

console.log("Another");

document.querySelectorAll(".mobile-menu a").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".hamburger").style.display = "none";
  });
});

document.querySelectorAll('.toggle').forEach((link) => link.addEventListener('click', () => {
document.queryselector('.toggle').style.display = "none";)
}



const form = document.getElementByclassName("dataForm");
const storeName = form.elements.name;
const storeEmail = form.elements.email;
const storeMsg = form.elements.msg;

function store() {
  const formData = {
    name: storeName.value,
    email: storeEmail.value,
    msg: storeMsg.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}

storeName.onchange = store;
storeEmail.onchange = store;
storeMsg.onchange = store;

const storeData = JSON.parse(localStorage.getItem("formData"));

storeName.value = storeData.name;
storeEmail.value = storeData.email;
storeMsg.value = storeData.message;
