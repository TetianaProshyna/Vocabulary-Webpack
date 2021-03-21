const firstRef = document.querySelectorAll('.first');
const btnNextRef = document.querySelector('.carousel-control-next');
const btnPrevRef = document.querySelector('.carousel-control-prev');

firstRef.forEach(() => addEventListener('click', wordHandleClick));
btnNextRef.addEventListener('click', btnHandleClick);
btnPrevRef.addEventListener('click', btnHandleClick);

function wordHandleClick(event) {
  const carouselItemRef = document.querySelector('.active.carousel-item');
  if (event.target.classList.contains('cardTarget') && carouselItemRef) {
    const wordRef = document.querySelector('.active .word');
    const translationRef = document.querySelector('.active .translation');
    wordRef.classList.toggle('hidden');
    translationRef.classList.toggle('hidden');
  }
}

function btnHandleClick() {
  const carouselItemRef = document.querySelector('.active.carousel-item');
  if (carouselItemRef) {
    const wordRef = document.querySelector('.active .word');
    const translationRef = document.querySelector('.active .translation');
    wordRef.classList.remove('hidden');
    translationRef.classList.add('hidden');
  }
}
