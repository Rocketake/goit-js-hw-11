export const API_KEY = '46333898-2c3ef88233fdb340cf3d447ca';

export const fetchImages = params => {
  const urlParams = new URLSearchParams(params);
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&${urlParams}`).then(
    response => {
      if (!response.ok) {
        throw new Error('opps');
      }
      return response.json();
    }
  );
};
