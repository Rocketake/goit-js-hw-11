const form = document.querySelector('.js-search-form');

import { formSubmit } from './js/pixabay-api';

form.addEventListener('submit', formSubmit);
