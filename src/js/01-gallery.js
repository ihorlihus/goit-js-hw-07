import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryInEl = document.querySelector('.gallery');


addImages(galleryItems)
function addImages() {
    const items = [];
    for (let i = 0; i < galleryItems.length; i += 1) {
        const item = document.createElement("div");
        item.classList.add('.gallery__item');
        const ref = document.createElement("a");
        ref.classList.add('gallery__link');
        ref.href = 'large-image.jpg';
        item.append(ref);
        const img = document.createElement("img");
        img.classList.add('gallery__image');
        img.src = 'small-image.jpg';
        img.dataset.sourse = 'large-image.jpg';
        img.alt = 'Image description'
        ref.append(img)


        console.log(item)

        // item.dataset.color = color;
        // item.style.backgroundColor = color;
        // item.style.width = 30 + i* 10 + 'px';
        // item.style.height = 30 + i* 10 + 'px';
        items.push(item);
    }
    gallaryInEl.append(items);
}




console.log(gallaryInEl);
    console.log(galleryItems);
