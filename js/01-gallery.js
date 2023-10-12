import { galleryItems } from './gallery-items.js';

const ul = document.querySelector('.gallery')
const markup = galleryItems.map(({ description, original, preview }) => {
    const img = document.createElement('img');
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.classList.add("gallery__item")
    a.classList.add('gallery__link')
    img.classList.add("gallery__image")
    img.src = preview;
    a.href = original;
    img.alt = description;
    img.dataset.sourse = original;
    a.append(img);
    li.append(a);
    return li;
});
ul.append(...markup);

ul.addEventListener('click', handlerClick);
function handlerClick(evt) {
    evt.preventDefault();
    
    if (!evt.target.classList.contains('gallery__image')) {
        return
    };
    
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.sourse}" width="800" height="600">
`)
    instance.show()
    document.addEventListener('keydown', handlerKey);
    function handlerKey(evt){
        if (evt.code === 'Escape') {
            instance.close();
            evt.currentTarget.removeEventListener("keydown", handlerKey);
        }
    };
    
}





