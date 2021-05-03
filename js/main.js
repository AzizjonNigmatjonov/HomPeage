var form = document.getElementById("my-form");
const leftArrow = document.querySelector('.mail-back-btn');
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Habar muvvafaqiyatli jo'natildi!";
    status.classList.add('success');
    form.reset()
  }).catch(error => {
    status.innerHTML = "Afsus habar jo'natilmadi qandaydir muomo mavjud!"
    status.classList.add('error');
  });
}
form.addEventListener("submit", handleSubmit);

leftArrow.addEventListener('click', e => {
  window.location.href = "index.html"
})