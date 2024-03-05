import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


export function createMarkup(obj) {
    loaderSpan.classList.add('hidden');
    
    if (obj.hits.length === 0) {
        form.reset();
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            backgroundColor: '#ef4040',
            titleColor: '#fff',
        })
    } else {
        const markup = obj.hits.map(({ webformatURL: smallImg, largeImageURL: largeImg, tags, likes, views, comments, downloads }) =>
        `<li class="js-list-item"
        <a class="js-list-link" href=${largeImg} >
	      <img 
		  class="js-list-image" 
		  src=${smallImg} 
		  alt=${tags} 
		  />
        </a>
        <div class="js-info">
        <p class="js-info-item">Likes<span>${likes}</span></p>
        <p class="js-info-item">Views<span>${views}</span></p>
        <p class="js-info-item">Comments<span>${comments}</span></p>
        <p class="js-info-item">Downloads<span>${downloads}</span></p>
        </div>
        </li>`);
       

        // list.innerHTML = markup.join('');
        form.reset();
        // lightbox.refresh();
        return list.innerHTML = markup.join('');
    };    
    
}
