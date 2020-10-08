// import getResourse from './apiService';
import li_itemTPL from '../templates/li_item.hbs';
import refs from './refs.js';


function updateLi_item_Markup(data) {
  const markup = li_itemTPL(data);
  refs.galeryUl.insertAdjacentHTML('beforeend', markup);

}












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





export default updateLi_item_Markup; //
// countriesListMarkup,
// cleanCountryMarkup,
// cleanMarkupBefore,
// cleanInputValue,
// message,
