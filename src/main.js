import { fetchImages, API_KEY } from './js/pixabay-api';

import { createMarkup, list } from './js/render-function';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const formListener = document.querySelector('.js-search-form');

const loader = document.querySelector('.loader-js');

formListener.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  list.innerHTML = '';

  const form = event.currentTarget;

  if (form.elements.query.value === '') {
    return;
  }

  loader.classList.toggle('loader');

  const params = {
    key: API_KEY,
    q: form.elements.query.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 50,
  };

  fetchImages(params)
    .then(data => {
      console.log(data.hits);
      if (data.hits.length === 0) {
        iziToast.error({
          title: '',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      loader.classList.toggle('loader');

      createMarkup(data.hits);
    })
    .catch(e => console.error(e));
}
