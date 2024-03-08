import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getImages } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";


const form = document.querySelector('.search-form');
const loaderSpan = document.querySelector('.loader');
const list = document.querySelector('.js-list');
const loadBtn = document.querySelector('.load-btn');
let currentPage = 1;

const lightbox = new SimpleLightbox('.js-list-item', {
    captionsData: 'alt',
    captionDelay: 250,
});

function onSearch(event) {
    event.preventDefault();
    const inputValue = event.target.elements.field.value;
    loaderSpan.hidden=false;
    loadBtn.hidden=true;

    if (inputValue.trim() === "") {
        loaderSpan.hidden=true;
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#ef4040',
            titleColor: '#fff',
        });
        form.reset();
    } else {
       getImages(inputValue).then(data => {
           loaderSpan.hidden = true;
        if (data.hits.length !== 0) {
            list.innerHTML = createMarkup(data);
            lightbox.refresh();  
            loadBtn.hidden = false;
            const listItem = document.querySelector('.js-list-item').getBoundingClientRect();
            const x = listItem.x * 2;
            window.scrollBy(x, 0);
        } else {
            list.innerHTML = "";
            iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#ef4040',
            titleColor: '#fff',
            })                
           }
           form.reset();
        }).catch(error => {
        console.log(error);
        });
    }
}   

function onClick() {
    loaderSpan.hidden = false;
    getImages(currentPage).then((data) => {
        list.insertAdjacentHTML('beforeend', createMarkup(data));
        currentPage += 1;

        if (data.totalHits > 15) {
            loadBtn.hidden = true;
            loaderSpan.hidden = true;
            iziToast.error({
              title: 'Error',
              message: "We're sorry, but you've reached the end of search results.",
              backgroundColor: '#ef4040',
              titleColor: '#fff',
            })
        }
    }).catch((err) => console.log(err));
}

form.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onClick);
