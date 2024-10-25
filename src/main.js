import { fetchPhotos } from './js/pixabay-api';
import { renderPhotos } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fetchSubmit = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const loader = document.querySelector('.loader');

fetchSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const searchRequest = searchInput.value;

  loader.style.display = 'block';

  const searchParams = new URLSearchParams({
    key: '46706614-1dc051161d475bf769026fdc5',
    q: `${searchRequest}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });

  fetchPhotos(searchParams)
    .then(photos => {
      loader.style.display = 'none';
      if (photos.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, no images found for your search query. Please try again!',
        });
      } else {
        renderPhotos(photos.hits);
      }
    })
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: `Something went wrong. Error: ${error.message}`,
      });
    });
});
