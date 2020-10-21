import * as basicLightbox from 'basiclightbox';
import refs from './refs';

refs.galleryUl.addEventListener('click', openLargeImage);

function openLargeImage(event){
    if(event.target.nodeName !== "IMG"){
        return
    }
    const largeImageURL = event.target.dataset.source;
    _openMobalBasic(largeImageURL)
    console.log(largeImageURL);
}

function _openMobalBasic(url){
    basicLightbox.create(`<img src="${url}" width="800" height="600">`).show();
}

export {
    openLargeImage,
}
