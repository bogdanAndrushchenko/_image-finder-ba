console.log(5);

let page = 1;
const per_page = 12;
const APIkey = '18613871-d09d7f4d1ad86f8a51a1289a6'
// const baseURL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q"`=что_искать&page=${page}&per_page=${per_page}&key=${APIkey}`


const getResourse = async (url) => {

    const responce = await fetch(url);

    if (!responce.ok) {
        throw new Error(`Ошибка по ${url} статус${responce.status}`)
    }
    return await responce.json();
}

export default getResourse;
