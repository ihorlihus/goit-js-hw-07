import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryInEl = document.querySelector('.gallery');
const items = createImagesElements(galleryItems);
gallaryInEl.insertAdjacentHTML('afterbegin', items);
const lightbox = new SimpleLightbox('.gallery a',
    { captionsData: 'alt', captionDelay: 250 });

function createImagesElements() {
    return galleryItems.map(({original, preview, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
</a>`
    }).join('')
};