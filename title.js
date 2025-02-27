const title = document.querySelector('.button');
const container = document.querySelector('.container');

title.addEventListener('click', function(){
    container.classList.toggle('modify');
});