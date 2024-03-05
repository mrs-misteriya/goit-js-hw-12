import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.search-form');
const loaderSpan = document.querySelector('.loader');
const list = document.querySelector('.js-list');


function onSearch(event) {
    event.preventDefault();
    const inputValue = event.target.elements.field.value;
    loaderSpan.classList.remove('hidden');

    if (inputValue.trim() === "") {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#ef4040',
            titleColor: '#fff',
        })
    } else {
        getImages(inputValue).then(data => createMarkup(data)).catch(error => {
            console.log(error);
        })
    }
}   

// const lightbox = new SimpleLightbox('.js-list-item', {
//     captionsData: 'alt',
//     captionDelay: 250,
// });

form.addEventListener('submit', onSearch);