import cardsTemplate from '../templates/cards.hbs';
import words from '../words.json';

const markup = cardsTemplate(words);
const carouselRef = document.querySelector('.carousel-inner');
carouselRef.insertAdjacentHTML('afterbegin', markup);
