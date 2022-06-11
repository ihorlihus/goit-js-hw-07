import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryInEl = document.querySelector('.gallery');
const items = createImagesElements(galleryItems);
gallaryInEl.insertAdjacentHTML('afterbegin', items);
gallaryInEl.addEventListener('click', openModalLadgeImage)

function createImagesElements() {
    return galleryItems.map(({original, preview, description}) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</div>`
    }).join('')
};

function openModalLadgeImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    };
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,
        {
        onShow: () => window.addEventListener('keydown', modalClose),
        onClose: () => window.removeEventListener('keydown', modalClose),
        })
    instance.show();

function modalClose(event) {
    if (event.code === 'Escape') {
        instance.close();
        console.log(event)
    }
}};