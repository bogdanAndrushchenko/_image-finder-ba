import apiService1 from './apiService';
import {
  updateLi_item_Markup,
  cleanMarkupBefore,
  scrollPage,
} from './updateMarkup';
import refs from './refs';


refs.searcForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService1.search = form.elements.query.value;
  cleanMarkupBefore();
  form.reset();

  apiService1.resetPage();
  apiService1.getResourse().then(data => updateLi_item_Markup(data))
  console.log(apiService1.search);
});

refs.loadMore.addEventListener('click', () => {
  apiService1.getResourse().then(data => {
    updateLi_item_Markup(data);
    scrollPage();
    console.log(apiService1.search, apiService1.page);
  })
})
