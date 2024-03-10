import{a as b,S as j,i as u}from"./assets/vendor-5401a4b0.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();async function p(r,n=1){const t="42637407-5960a3c72fe4db0c907723fc7",i="https://pixabay.com/api/";return(await b.get(`${i}?key=${t}&q=${r}&page=${n}&per_page=15&image_type=photo&orientation=horizontal&safesearch=true`)).data}function f(r){return r.hits.map(({webformatURL:t,largeImageURL:i,tags:e,likes:s,views:a,comments:y,downloads:L})=>`<li class="js-list-item"
        <a class="js-list-link" href=${i} >
	      <img 
		  class="js-list-image" 
		  src=${t} 
		  alt=${e} 
		  />
        </a>
        <div class="js-info">
        <p class="js-info-item">Likes<span>${s}</span></p>
        <p class="js-info-item">Views<span>${a}</span></p>
        <p class="js-info-item">Comments<span>${y}</span></p>
        <p class="js-info-item">Downloads<span>${L}</span></p>
        </div>
        </li>`).join("")}const h=document.querySelector(".search-form"),l=document.querySelector(".loader"),o=document.querySelector(".js-list"),c=document.querySelector(".load-btn");let m,g;const d=new j(".js-list-item",{captionsData:"alt",captionDelay:250});function S(r){r.preventDefault();const n=r.target.elements.field.value.trim();l.hidden=!1,c.hidden=!0,n===""?(l.hidden=!0,o.innerHTML=null,u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"}),h.reset()):p(n,1).then(t=>{l.hidden=!0,o.innerHTML=null,g=n,m=1,t.hits.length!==0&&t.hits.length<=14?(c.hidden=!0,o.innerHTML=f(t),d.refresh(),u.info({message:"We're sorry, but you've reached the end of search results."})):t.hits.length>14?(c.hidden=!1,o.innerHTML=f(t),d.refresh()):(o.innerHTML=null,u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",titleColor:"#fff"})),h.reset()}).catch(t=>{console.log(t)})}function $(){l.hidden=!1,m+=1,p(g,m).then(r=>{if(l.hidden=!0,r.hits.length<=14)o.insertAdjacentHTML("beforeend",f(r)),d.refresh(),c.hidden=!0,u.info({message:"We're sorry, but you've reached the end of search results."});else{o.insertAdjacentHTML("beforeend",f(r)),d.refresh();const t=document.querySelector(".js-list-item").getBoundingClientRect().x*2;window.scrollBy({top:t,behavior:"smooth"})}}).catch(r=>console.log(r))}h.addEventListener("submit",S);c.addEventListener("click",$);
//# sourceMappingURL=commonHelpers.js.map
