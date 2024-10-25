import { fetchPhotos } from './js/pixabay-api'; //I can use function from first js file
import { renderPhotos } from './js/render-functions'; // the same from second file
//I have this library but it is work
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const fetchSubmit = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');
const loader = document.querySelector('.loader');

fetchSubmit.addEventListener('submit', event => {
  event.preventDefault();
  const searchRequest = searchInput.value;
  const photoList = document.querySelector('.photo-list'); //I have no idea why with variable don't work in second js file
  loader.style.display = 'block'; //just asked gpt to help with this library

  //creating our object with parameters we need in research
  const searchParams = new URLSearchParams({
    key: '46706614-1dc051161d475bf769026fdc5',
    q: `${searchRequest}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
  });

  fetchPhotos(searchParams) //call a function from first js that doing https job and bring back converted from JSON into js files
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
        renderPhotos(photos.hits); //if everything good this will do photo in window
      }
    })
    //I don't know for what I need .catch here if I have almost the same in .then
    .catch(error => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: `Something went wrong. Error: ${error.message}`,
      });
    });
});

//took this code from library
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
