var scroll_position,
    document_height,
    window_height,
    current_position,
    listen_top,
    image_top,
    about_top,
    survey_top;

var body = document.body,
    html = document.documentElement;

window.addEventListener("load", setup);

function setup(){
  document.querySelectorAll('.open_image').forEach((e) => {
    e.addEventListener('click', openModal);
  })
  document.querySelectorAll('.close_modal').forEach((e) => {
    e.addEventListener('click', closeModal);
  })

  current_position = 0

  calculateSectionPositions();

  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('resize', calculateSectionPositions);
}

function openModal(){
  this.closest('.image_link').classList.add('open');
}

function closeModal(){
  this.closest('.image_link').classList.remove('open');
}

function scrollHandler(){
 scroll_position = window.scrollY;
 if (scroll_position <= image_top - window_height * 0.5 && current_position != 1){
  setSection(1);
 } else if (scroll_position > image_top - window_height * 0.5 && scroll_position <= about_top - window_height * 0.5 && current_position != 2 ){
  setSection(2)
 } else if (scroll_position > about_top - window_height * 0.5 && scroll_position <= survey_top - window_height * 0.5 && current_position != 3 ){
  setSection(3);
 } else if (scroll_position > survey_top - window_height * 0.5 && current_position != 4){
  setSection(4);
 }
}

function setSection(i){
  clearClasses();
  document.body.classList.add('section_' + i);
  current_position = i;
}

function clearClasses(){
  document.body.classList.remove('section_1');
  document.body.classList.remove('section_2');
  document.body.classList.remove('section_3');
  document.body.classList.remove('section_4');
}

function calculateSectionPositions(){
  document_height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
  window_height = window.innerHeight;
  listen_top = document.getElementById('listen').offsetTop;
  image_top = document.getElementById('image').offsetTop;
  about_top = document.getElementById('about').offsetTop;
  survey_top = document.getElementById('survey').offsetTop;

  scrollHandler();
}