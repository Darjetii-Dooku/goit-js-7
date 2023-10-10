import { galleryItems } from './gallery-items.js';

// Change code below this line

const list = document.querySelector('.gallery');
const markup = galleryItems.map(({description, original, preview}) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}">
  </a>
</li>`
).join('');
list.insertAdjacentHTML('afterbegin', markup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    fadeSpeed: 250,
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: 'bottom',
});