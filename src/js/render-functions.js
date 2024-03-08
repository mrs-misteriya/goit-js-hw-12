export function createMarkup(obj) {
    
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
        return markup.join('');
    };    
    

