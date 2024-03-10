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
let currentPage;
let currentQuery;

const lightbox = new SimpleLightbox('.js-list-item', {
    captionsData: 'alt',
    captionDelay: 250,
});



function onSearch(event) {
    event.preventDefault();
    const query = event.target.elements.field.value.trim();
    loaderSpan.hidden=false;
    loadBtn.hidden=true;

    if (query === "") {
        loaderSpan.hidden = true;
        list.innerHTML = null;
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#ef4040',
            titleColor: '#fff',
        });
        form.reset();
    } else {
       getImages(query, 1).then(data => {
           loaderSpan.hidden = true;
           list.innerHTML = null;
           currentQuery = query;
           currentPage = 1;
           if (data.hits.length !== 0 && data.hits.length <= 14) {
               loadBtn.hidden = true;
               list.innerHTML = createMarkup(data);
               lightbox.refresh();
               iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });
              
           } else if (data.hits.length > 14) {
               loadBtn.hidden = false;
               list.innerHTML = createMarkup(data);
               lightbox.refresh();
           } else{
            list.innerHTML = null;
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
    currentPage += 1;
   
    getImages(currentQuery, currentPage).then((data) => {
        loaderSpan.hidden = true;

        if (data.hits.length <= 14) {
            list.insertAdjacentHTML('beforeend', createMarkup(data));
            lightbox.refresh(); 
            loadBtn.hidden = true;
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
            });           
        } else {
            list.insertAdjacentHTML('beforeend', createMarkup(data));
            lightbox.refresh(); 
            const listItem = document.querySelector('.js-list-item').getBoundingClientRect();
               const x = listItem.x * 2;
               window.scrollBy({
                   top: x,
                   behavior: "smooth",
               });
        }
    }).catch((err) => console.log(err));
}

form.addEventListener('submit', onSearch);
loadBtn.addEventListener('click', onClick);
