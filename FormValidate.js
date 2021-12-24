const contactForm = document.getElementById('form-control');
const { email } = contactForm.elements;
const regex = /[A-Z]/g;
const errMsg = document.querySelector('.err-Msg');

email.addEventListener('click', () => {
  errMsg.style.display = 'none';
});

contactForm.addEventListener('submit', (e) => {
  if (email.value.match(regex).length !== 0) {
    e.preventDefault();
    errMsg.style.display = 'block';
    errMsg.innerHTML = 'Invalid Email: your Email should be in lower case';
  }
});
