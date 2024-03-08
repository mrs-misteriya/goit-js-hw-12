import{a as y,S as b,i as l}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function m(r,o=1){const s="42637407-5960a3c72fe4db0c907723fc7";return(await y.get("https://pixabay.com/api/",{params:{key:s,q:r,page:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}})).data}function p(r){return r.hits.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:i,comments:h,downloads:g})=>`<li class="js-list-item"
        <a class="js-list-link" href=${n} >
	      <img 
		  class="js-list-image" 
		  src=${s} 
		  alt=${e} 
		  />
        </a>
        <div class="js-info">
        <p class="js-info-item">Likes<span>${t}</span></p>
        <p class="js-info-item">Views<span>${i}</span></p>
        <p class="js-info-item">Comments<span>${h}</span></p>
        <p class="js-info-item">Downloads<span>${g}</span></p>
        </div>
        </li>`).join("")}const u=document.querySelector(".search-form"),a=document.querySelector(".loader"),f=document.querySelector(".js-list"),c=document.querySelector(".load-btn");let d=1;const L=new b(".js-list-item",{captionsData:"alt",captionDelay:250});function j(r){r.preventDefault();const o=r.target.elements.field.value;a.hidden=!1,c.hidden=!0,o.trim()===""?(a.hidden=!0,l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"}),u.reset()):m(o).then(s=>{if(a.hidden=!0,s.hits.length!==0){f.innerHTML=p(s),L.refresh(),c.hidden=!1;const e=document.querySelector(".js-list-item").getBoundingClientRect().x*2;window.scrollBy(e,0)}else f.innerHTML="",l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"});u.reset()}).catch(s=>{console.log(s)})}function S(){a.hidden=!1,m(d).then(r=>{f.insertAdjacentHTML("beforeend",p(r)),d+=1,r.totalHits>15&&(c.hidden=!0,a.hidden=!0,l.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#ef4040",titleColor:"#fff"}))}).catch(r=>console.log(r))}u.addEventListener("submit",j);c.addEventListener("click",S);
//# sourceMappingURL=commonHelpers.js.map
