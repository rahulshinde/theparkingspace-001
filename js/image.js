window.addEventListener("load", setup);

function setup(){
  document.querySelectorAll('.open_image').forEach((e) => {
    e.addEventListener('click', openModal);
  })
  document.querySelectorAll('.close_modal').forEach((e) => {
    e.addEventListener('click', closeModal);
  })
}

function openModal(){
  this.closest('.image_link').classList.add('open');
}

function closeModal(){
  this.closest('.image_link').classList.remove('open');
}