import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(n){const i=`https://pixabay.com/api/?${n}`;return fetch(i).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let a=null;function p(n){const i=document.querySelector(".photo-list");i.innerHTML="";const o=n.map(t=>`
      <li class="photo-item">
        <a href="${t.largeImageURL}" class="gallery-item">
          <img src="${t.webformatURL}" alt="${t.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${t.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${t.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${t.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`).join("");i.insertAdjacentHTML("beforeend",o),a?a.refresh():a=new d(".gallery-item",{captionsData:"alt",captionDelay:250})}const m=document.querySelector(".form"),u=document.querySelector(".search-input"),c=document.querySelector(".loader");m.addEventListener("submit",n=>{n.preventDefault();const i=u.value,o=document.querySelector(".photo-list");c.style.display="block";const t=new URLSearchParams({key:"46706614-1dc051161d475bf769026fdc5",q:`${i}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});f(t).then(e=>{c.style.display="none",u.value="",e.hits.length===0?(o.innerHTML="",l.error({title:"Error",message:"Sorry, no images found for your search query. Please try again!"})):p(e.hits)}).catch(e=>{c.style.display="none",l.error({title:"Error",message:`Something went wrong. Error: ${e.message}`})})});l.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",onOpening:function(){},onClosing:function(){}});
//# sourceMappingURL=index.js.map
