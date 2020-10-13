import apiService from './apiService';
import {error, alert} from './notification'
import {
  updateLi_item_Markup,
  cleanMarkupBefore,
  scrollPage,
} from './updateMarkup';
import refs from './refs';
import { data } from 'autoprefixer';


refs.searcForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.search = form.elements.query.value;
  cleanMarkupBefore();
  form.reset();

  apiService.resetPage();
  apiService.getResourse().then(data => {
    const mach = data.hits.length 
    if(mach === 0){
      error(`На Ваш запрос
      ${apiService.search}
      найдено ${mach} 
      картинок`)
      return
    }

    alert({
      text:(`Ваш запрос ${apiService.search}  
      обработан успешно`),
      hide:true,
      delay:1500,
    });
    updateLi_item_Markup(data)
    
  })
});

refs.loadMore.addEventListener('click', () => {
  apiService.getResourse().then(data => {
    alert({
      text:(`Ваш запрос ${apiService.search}  
      обработан успешно`),
      hide:true,
      delay:1500,
    });
    updateLi_item_Markup(data);
    scrollPage();
  })
})
