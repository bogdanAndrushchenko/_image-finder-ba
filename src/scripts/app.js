import getResourse from './apiService';
import {
  updateLi_item_Markup,
  cleanMarkupBefore,
} from './update-markup';
import refs from './refs';

let search = '';
let page = 1;

refs.searcForm.addEventListener('submit', (event) => {
  event.preventDefault();


  const form = event.currentTarget;
  const search = form.elements.query.value;
  refs.galleryUi.innerHTML = "";
  form.reset();


  console.log(search);
  page = 1;
  getResourse(search, page).then(data => {
    updateLi_item_Markup(data);
    page += 1
  })
});

refs.loadMore.addEventListener('click', () => {
  getResourse(search, page).then(data => {
    updateLi_item_Markup(data);
    page += 1
  })
})
