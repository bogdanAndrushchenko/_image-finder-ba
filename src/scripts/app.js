import getResourse from './apiService';
import updateLi_item_Markup from './update-markup';
import refs from './refs';


refs.searcForm.addEventListener('submit',(event)=>{
  event.preventDefault();


  const form = event.currentTarget.elements.query.value;
  console.log(form);
  getResourse(form).then(data => updateLi_item_Markup(data))
})