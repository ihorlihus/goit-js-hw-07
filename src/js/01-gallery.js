import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryInEl = document.querySelector('.gallery');

const imageLib = { ...galleryItems };

addImages(imageLib)
function addImages() {
    const items = [];
    for (let i = 0; i < galleryItems.length; i += 1) {
        const item = document.createElement("div");
        item.classList.add('.gallery__item');
        const ref = document.createElement("a");
        ref.classList.add('gallery__link');
        ref.href = imageLib[i].original;
        item.append(ref);
        const img = document.createElement("img");
        img.classList.add('gallery__image');
        img.src = imageLib[i].preview;
        img.dataset.sourse = imageLib[i].original;
        img.alt = imageLib[i].description;
        ref.append(img);
        items.push(item);
    };
    gallaryInEl.append(...items);
};

gallaryInEl.addEventListener('click', openModalLadgeImage)

function openModalLadgeImage(event) {
    event.preventDefault();
    if (event.target.classList.contains('.gallery__image')) {
        return
    };
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.sourse}" width="800" height="600">
    `)
    instance.show();

    // const openModalEl = document.querySelector('.basicLightbox__placeholder')
    // openModalEl.addEventListener('keydown', keydown())

    // console.log(openModalEl);
}

// function keydown (event) {
//     console.log("Keydown: ", event);
// }