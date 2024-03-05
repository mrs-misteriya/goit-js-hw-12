export function getImages(request) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '42637407-5960a3c72fe4db0c907723fc7';

    return fetch(`${BASE_URL}/?key=${KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true`).then(resp => {
        if (!resp.ok) {
            throw new Error('Sorry, there are no images matching your search query. Please try again!')
        }
        return resp.json();
    });
    
}