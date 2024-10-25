import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function renderPhotos(photos) {
  const photoList = document.querySelector('.photo-list');
  photoList.innerHTML = '';

  const markup = photos
    .map(photo => {
      return `
      <li class="photo-item">
        <a href="${photo.largeImageURL}" class="gallery-item">
          <img src="${photo.webformatURL}" alt="${photo.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${photo.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${photo.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${photo.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${photo.downloads}</p>
          </div>
        </div>
      </li>`;
    })
    .join('');

  photoList.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery-item', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}
