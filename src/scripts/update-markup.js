import func from './apiService';
import li_itemTPL from '../templates/li_item.hbs'

const galeryRef = document.querySelector(".gallery")

function updateLi_item_Markup(data) {
  const markup = li_itemTPL(data);
  galeryRef.insertAdjacentHTML('beforeend', markup);

}

const data = func('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=yelow+flowers&page=1&per_page=12&key=18613871-d09d7f4d1ad86f8a51a1289a6');
// console.log(data);
data.then(data=>updateLi_item_Markup(data))


function countriesListMarkup(data) {
  const markup = countriesTpl(data);
  refs.countriesList.insertAdjacentHTML('beforeend', markup);
}



function cleanCountryMarkup() {
  refs.countryContainer.classList.remove('countries');
  refs.countryContainer.innerHTML = " ";
}


function cleanMarkupBefore() {
  refs.countriesList.innerHTML = " ";

}

function cleanInputValue() {
  refs.searchInput.value = " ";
}

const message = 'Too many matches found. Please enter a more specific query!'





export {
  updateLi_item_Markup, //
  countriesListMarkup,
  cleanCountryMarkup,
  cleanMarkupBefore,
  cleanInputValue,
  message,
}
