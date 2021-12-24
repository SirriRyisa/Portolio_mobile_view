document.querySelector('.logo-img').addEventListener('click', () => {
  document.querySelector('.toggle').style.display = 'flex';
});

document.querySelector('.toggleclose').addEventListener('click', () => {
  document.querySelector('.toggle').style.display = 'none';
});

document.querySelectorAll('.mobile-menu a').forEach((element) => {
  element.addEventListener('click', () => {
    document.querySelector('.hamburger').style.display = 'none';
  });
});

document.querySelectorAll('.toggle').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('.toggle').style.display = 'none'
}));

const form = document.getElementByclassName('dataForm');
const storeName = form.elements.name;
const storeEmail = form.elements.email;
const storeMsg = form.elements.msg;

function store() {
  const formData = {
    name: storeName.value,
    email: storeEmail.value,
    msg: storeMsg.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

storeName.onchange = store;
storeEmail.onchange = store;
storeMsg.onchange = store;

const storeData = JSON.parse(localStorage.getItem('formData'));

storeName.value = storeData.name;
storeEmail.value = storeData.email;
storeMsg.value = storeData.message;
