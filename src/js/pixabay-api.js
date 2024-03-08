import axios from 'axios';

export async function getImages(request, page=1) {
    const KEY = '42637407-5960a3c72fe4db0c907723fc7';

    const response = await axios.get('https://pixabay.com/api/', {
        params: {
            key: KEY,
            q: request,
            page: page,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: 15,
        }
    });
    return response.data;
}


