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
    if (event.target.nodeName !== "IMG") {
        return;
    };
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.sourse}" width="800" height="600">
    `, {
        onShow: (instance) => document.addEventListener('keydown', (event) => {
            console.log(event)
        if (event.code === 'Escape') {
            instance.close();
        }
    }),
        onClose: (instance) => document.removeEventListener('keydown', (event) => {
            console.log('must remove')
        if (event.code === 'Escape') {
            instance.close();
        }
    })
        })
    instance.show();
};

