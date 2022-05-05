var scroll_position,
    document_height,
    window_height,
    current_position,
    listen_top,
    about_top,
    survey_top;

var body = document.body,
    html = document.documentElement;

window.addEventListener("load", setup);

function setup(){

  current_position = 0

  calculateSectionPositions();

  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('resize', calculateSectionPositions);
  document.querySelector('.page_title').addEventListener('click', scrollToTop);
}

function scrollToTop(){
   window.scrollTo(0, 0);
}


function scrollHandler(){
  scroll_position = window.scrollY;
  console.log(scroll_position);
  console.log(listen_top - window_height * 0.5);
  if (scroll_position <= about_top - window_height * 0.5 && current_position != 1){
    setSection(1);
  } else if (scroll_position > about_top - window_height * 0.5 && scroll_position < survey_top - window_height * 0.5 && current_position != 2 ){
    setSection(2)
  } else if (scroll_position > survey_top - window_height * 0.5 && current_position != 3 ){
    setSection(3)
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
}

function calculateSectionPositions(){
  document_height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
  window_height = window.innerHeight;
  listen_top = document.getElementById('listen').offsetTop;
  about_top = document.getElementById('about').offsetTop;
  survey_top = document.getElementById('survey').offsetTop;

  scrollHandler();
}