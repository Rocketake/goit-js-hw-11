import{S as f,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="46333898-2c3ef88233fdb340cf3d447ca",d=n=>{const t=new URLSearchParams(n);return fetch(`https://pixabay.com/api/?key=${l}&${t}`).then(s=>{if(!s.ok)throw new Error("opps");return s.json()})},a=document.querySelector(".gallery"),g=new f(".gallery a"),h=n=>{const t=n.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:i,comments:u,downloads:p})=>`<li class="gallery-item">
      <a href="${o}" class="gallery-link"><img src="${s}" alt="${e}" class="gallery-img"></a>
      <div class="info-wrapper">
        <p class="info-item">likes<span>${r}</span></p>
        <p class="info-item">views<span>${i}</span></p>
        <p class="info-item">comments<span>${u}</span></p>
        <p class="info-item">downloads<span>${p}</span></p>
      </div>
    </li>`).join("");a.innerHTML=t,g.refresh(),a.addEventListener("click",s=>s.preventDefault())},y=document.querySelector(".js-search-form"),c=document.querySelector(".loader-js");y.addEventListener("submit",L);function L(n){n.preventDefault(),a.innerHTML="";const t=n.currentTarget;if(t.elements.query.value==="")return;c.classList.toggle("loader");const s={key:l,q:t.elements.query.value,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:50};d(s).then(o=>{console.log(o.hits),o.hits.length===0&&m.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.classList.toggle("loader"),h(o.hits)}).catch(o=>console.error(o))}
//# sourceMappingURL=index.js.map
