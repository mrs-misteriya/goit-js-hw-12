import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(s){return fetch(`https://pixabay.com/api//?key=42637407-5960a3c72fe4db0c907723fc7&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return i.json()})}function u(s){if(loaderSpan.classList.add("hidden"),s.hits.length===0)form.reset(),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"});else{const t=s.hits.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:n,comments:c,downloads:l})=>`<li class="js-list-item"
        <a class="js-list-link" href=${i} >
	      <img 
		  class="js-list-image" 
		  src=${o} 
		  alt=${e} 
		  />
        </a>
        <div class="js-info">
        <p class="js-info-item">Likes<span>${r}</span></p>
        <p class="js-info-item">Views<span>${n}</span></p>
        <p class="js-info-item">Comments<span>${c}</span></p>
        <p class="js-info-item">Downloads<span>${l}</span></p>
        </div>
        </li>`);return form.reset(),list.innerHTML=t.join("")}}const m=document.querySelector(".search-form"),d=document.querySelector(".loader");document.querySelector(".js-list");function p(s){s.preventDefault();const t=s.target.elements.field.value;d.classList.remove("hidden"),t.trim()===""?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"}):f(t).then(o=>u(o)).catch(o=>{console.log(o)})}m.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
