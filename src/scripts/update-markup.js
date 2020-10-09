import li_itemTPL from '../templates/li_item.hbs';
import refs from './refs.js';


function updateLi_item_Markup(data) {
  const markup = li_itemTPL(data);
  refs.galeryUl.insertAdjacentHTML('beforeend', markup);
  
  showBtnLoadMore()

}

function showBtnLoadMore () {
  refs.loadMore.classList.remove('not_visible');
}



function cleanMarkupBefore() {
  refs.galleryUi.innerHTML = " ";

}








export {
  updateLi_item_Markup,
  // countriesListMarkup,default
  // cleanCountryMarkup,
  cleanMarkupBefore,
  // message,
}
