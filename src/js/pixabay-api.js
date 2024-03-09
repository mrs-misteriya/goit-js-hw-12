import axios from 'axios';

export async function getImages(request, page=1) {
    const KEY = '42637407-5960a3c72fe4db0c907723fc7';
    const BASE_URL = 'https://pixabay.com/api/';

    const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${request}&page=${page}&per_page=15&image_type=photo&orientation=horizontal&safesearch=true`)

    return response.data;
}


