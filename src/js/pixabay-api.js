// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '46333898-2c3ef88233fdb340cf3d447ca';

let form;

export const formSubmit = event => {
  event.preventDefault();
  form = event.currentTarget;
  if (form.elements.query.value === '') {
    return;
  }
  const params = {
    key: API_KEY,
    q: form.elements.query.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  fetchImages(params).then(data => {
    if (data.hits.length === 0) {
      iziToast.error({
        title: '',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    }
  });
};

function fetchImages(params) {
  const urlParams = new URLSearchParams(params);
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&${urlParams}`).then(
    response => {
      return response.json();
    }
  );
}
