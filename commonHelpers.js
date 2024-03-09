import{a as b,S as j,i as d}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function p(t,n=1){const r="42637407-5960a3c72fe4db0c907723fc7",o="https://pixabay.com/api/";return(await b.get(`${o}?key=${r}&q=${t}&page=${n}&per_page=15&image_type=photo&orientation=horizontal&safesearch=true`)).data}function u(t){return t.hits.map(({webformatURL:r,largeImageURL:o,tags:e,likes:s,views:l,comments:y,downloads:L})=>`<li class="js-list-item"
        <a class="js-list-link" href=${o} >
	      <img 
		  class="js-list-image" 
		  src=${r} 
		  alt=${e} 
		  />
        </a>
        <div class="js-info">
        <p class="js-info-item">Likes<span>${s}</span></p>
        <p class="js-info-item">Views<span>${l}</span></p>
        <p class="js-info-item">Comments<span>${y}</span></p>
        <p class="js-info-item">Downloads<span>${L}</span></p>
        </div>
        </li>`).join("")}const m=document.querySelector(".search-form"),c=document.querySelector(".loader"),i=document.querySelector(".js-list"),a=document.querySelector(".load-btn");let h,g;const f=new j(".js-list-item",{captionsData:"alt",captionDelay:250});function S(t){t.preventDefault();const n=t.target.elements.field.value.trim();c.hidden=!1,a.hidden=!0,n===""?(c.hidden=!0,i.innerHTML=null,d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"}),m.reset()):p(n,1).then(r=>{if(c.hidden=!0,i.innerHTML=null,g=n,h=1,r.hits.length!==0&&r.hits.length<=14){a.hidden=!0,i.innerHTML=u(r),f.refresh();const e=document.querySelector(".js-list-item").getBoundingClientRect().x*2;window.scrollBy(e,0)}else if(r.hits.length>14){a.hidden=!1,i.innerHTML=u(r),f.refresh();const e=document.querySelector(".js-list-item").getBoundingClientRect().x*2;window.scrollBy(e,0)}else i.innerHTML=null,d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"});m.reset()}).catch(r=>{console.log(r)})}function q(){c.hidden=!1,h+=1,p(g,h).then(t=>{c.hidden=!0,t.hits.length<=14?(i.insertAdjacentHTML("beforeend",u(t)),f.refresh(),a.hidden=!0,d.info({title:"Hello",message:"We're sorry, but you've reached the end of search results."})):(i.insertAdjacentHTML("beforeend",u(t)),f.refresh())}).catch(t=>console.log(t))}m.addEventListener("submit",S);a.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
