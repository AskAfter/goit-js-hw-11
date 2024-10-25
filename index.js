import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function u(s){const i=`https://pixabay.com/api/?${s}`;return fetch(i).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let a=null;function f(s){const i=document.querySelector(".photo-list");i.innerHTML="";const o=s.map(e=>`
      <li class="photo-item">
        <a href="${e.largeImageURL}" class="gallery-item">
          <img src="${e.webformatURL}" alt="${e.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${e.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${e.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${e.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${e.downloads}</p>
          </div>
        </div>
      </li>`).join("");i.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new d(".gallery-item",{captionsData:"alt",captionDelay:250})}const m=document.querySelector(".form"),p=document.querySelector(".search-input"),c=document.querySelector(".loader");m.addEventListener("submit",s=>{s.preventDefault();const i=p.value;c.style.display="block";const o=new URLSearchParams({key:"46706614-1dc051161d475bf769026fdc5",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});u(o).then(e=>{c.style.display="none",e.hits.length===0?l.error({title:"Error",message:"Sorry, no images found for your search query. Please try again!"}):f(e.hits)}).catch(e=>{c.style.display="none",l.error({title:"Error",message:`Something went wrong. Error: ${e.message}`})})});
//# sourceMappingURL=index.js.map
