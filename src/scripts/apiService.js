console.log(5);

let page = 1;
const per_page = 12;
const APIkey = '18613871-d09d7f4d1ad86f8a51a1289a6'
const baseURL = "https://pixabay.com/api/?image_type=photo&orientation=horizontal&q"


const getResourse = async (search) => {

    const responce = await fetch(`${baseURL}=${search}&page=${page}&per_page=${per_page}&key=${APIkey}`);

    if (!responce.ok) {
        throw new Error(`Ошибка по ${search} статус${responce.status}`)
    }
    return await responce.json();
}

export default getResourse;
