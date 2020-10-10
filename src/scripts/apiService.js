export default {
  page:1,
  search: '',
  per_page: 12,
  APIkey: '18613871-d09d7f4d1ad86f8a51a1289a6',
  baseURL: "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q",
  async getResourse   ()  {

    const responce = await fetch(`${this.baseURL}=${this.search}&page=${this.page}&per_page=${this.per_page}&key=${this.APIkey}`);

    if (!responce.ok) {
        throw new Error(`Ошибка по ${this.search} статус${responce.status}`)
    }
    this.page +=1;
    return await responce.json();
    
  },

  resetPage(){
  this.page = 1;
  },
  
}
