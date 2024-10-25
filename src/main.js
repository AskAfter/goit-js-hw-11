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
  const photoList = document.querySelector('.photo-list');
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
      searchInput.value = '';
      if (photos.hits.length === 0) {
        photoList.innerHTML = '';
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

iziToast.settings({
  timeout: 10000,
  position: 'topRight',
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  onOpening: function () {
    // console.log('callback abriu!');
  },
  onClosing: function () {
    // console.log('callback fechou!');
  },
});
