(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=function(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))},s=document.getElementsByTagName(`link`),c=document.querySelector(`meta[property=csp-nonce]`),l=c?.nonce||c?.getAttribute(`nonce`);o=r(i.map(r=>{if(r=t(r,a),r in n)return;n[r]=!0;let i=r.endsWith(`.css`),o=i?`[rel="stylesheet"]`:``,c=!!a;if(c)for(let e=s.length-1;e>=0;e--){let t=s[e];if(t.href===r&&(!i||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${r}"]${o}`))return;let u=document.createElement(`link`);if(u.rel=i?`stylesheet`:e,i||(u.as=`script`),u.crossOrigin=``,u.href=r,l&&u.setAttribute(`nonce`,l),document.head.appendChild(u),i)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${r}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};function i(){return`
    <footer class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto py-8 text-center text-gray-500">
        <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
      </div>
    </footer>`}function a(){return`
    <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
      </svg>

      ${Y.get(`cart`)>0?`
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                ${Y.get(`cart`)}
                </span>
        `:``}

    </button>   
  `}const o={isProductDetailPage:!1};s.init=()=>{let e=Z();o.isProductDetailPage=e.includes(`product`)},s.mount=()=>{let e=JSON.parse(window.localStorage.getItem(`cart`));e&&(Y.set(`cart`,e.length),q.draw(`#cart-box`,a()),Y.watch(e=>{Y.set(`cart`,e),q.draw(`#cart-box`,a())},[`cart`]))};function s(){return`
    <div class="max-w-md mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
      ${o.isProductDetailPage?`
        <div class="flex items-center space-x-3">
          <button onclick="window.history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
        </div>
        `:`
        
        <h1 class="text-xl font-bold text-gray-900">
          <a href="javascript:void(0)"  data-link="home">쇼핑몰</a>
        </h1>
        `}

        <div class="flex items-center space-x-2" id="cart-box">
          <!-- 장바구니 아이콘 -->
          ${a()}
        </div>
      </div>
    </div>
  `}c.mount=()=>{s.init(),q.draw(`header`,s()),q.draw(`footer`,i()),s.mount()};function c(){return`
    <div class="min-h-screen bg-gray-50">
      <header  class="bg-white shadow-sm sticky top-0 z-40"></header>
      <main  class="max-w-md mx-auto px-4 py-4"></main>
      <footer></footer>
    </div>
  `}const l=()=>{let e=(e={},t)=>{let n=Q(t);window.history.pushState(e,``,n),q.view()};return{push:e}};var u=l;function d(e){return RegExp(`^`+e.replace(/:\w+/g,`([^/]+)`).replace(`*`,`.*`)+`$`)}async function f(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function p(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function m(){let e=await fetch(`/api/categories`);return await e.json()}h.mount=()=>{let e=document.querySelector(`button[data-breadcrumb='reset']`),t=document.querySelector(`button[data-breadcrumb='category1']`);e.addEventListener(`click`,()=>{Y.set(`params.category1`,``),Y.set(`params.category2`,``)}),t?.addEventListener(`click`,()=>{Y.set(`params.category2`,null)})};function h(){let e=Y.get(`params`).category1,t=Y.get(`params`).category2;return`              
    <label class="text-sm text-gray-600" >카테고리:</label>
    <button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>
    ${e?`
        <span class="text-xs text-gray-500">&gt;</span>
        <button data-breadcrumb="category1" data-category1="${e}" class="text-xs hover:text-blue-800 hover:underline">${e}</button>
      `:``}
    ${t?`
        <span class="text-xs text-gray-500">&gt;</span>
        <button data-breadcrumb="category2" data-category1="${t}" class="text-xs hover:text-blue-800 hover:underline">${t}</button>
      `:``}
  `}const g=e=>{switch(e){case`category`:return`
        <div class="flex flex-wrap gap-2">
          <div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>
        </div>
      `;case`products`:return`
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
              <div class="aspect-square bg-gray-200"></div>
              <div class="p-3">
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div class="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
          
          <div class="text-center py-4">
            <div class="inline-flex items-center">
              <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
            </div>
          </div>
        </div>
      `;case`product`:return`
        <div class="py-20 min-h-screen bg-gray-50 flex items-center justify-center">
          <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-600">상품 정보를 불러오는 중...</p>
          </div>
        </div>
      `;default:return null}};function _({type:e}){return g(e)}const v={product:{}};y.mount=()=>{let e=document.querySelectorAll(`.product-card`);e.forEach(e=>{let t=e.getAttribute(`data-product-id`);e.querySelector(`img`).addEventListener(`click`,async()=>{J.push({},`/product/${t}`)})})};function y(e){v.product=e;let t=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,`,`);return`
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
    data-product-id="${e.productId}">
      <!-- 상품 이미지 -->
      <div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
        <img src="${e.image}"
            alt="${e.title}"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
            loading="lazy">
      </div>
      <!-- 상품 정보 -->
      <div class="p-3">
        <div class="cursor-pointer product-info mb-3">
          <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
            ${e.title}
          </h3>
          <p class="text-xs text-gray-500 mb-2">${e.brand?e.brand:e.maker?e.maker:e.mallName}</p>
          <p class="text-lg font-bold text-gray-900">
            ${t(e.lprice)}원
          </p>
        </div>
        <!-- 장바구니 버튼 -->
        <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
              hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}"
              >
          장바구니 담기
        </button>
      </div>
    </div>
  `}const b=e=>{switch(e){case`addCart`:return`
      <div class="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
        <div class="flex-shrink-0">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p class="text-sm font-medium">장바구니에 추가되었습니다</p>
        <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      `;case`deleteCart`:return`
        <div class="fixed bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <p class="text-sm font-medium">선택된 상품들이 삭제되었습니다</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `;case`error`:return`
        <div class="fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
          <p class="text-sm font-medium">오류가 발생했습니다.</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `;default:return`
        <div class="bg-red-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </div>
          <p class="text-sm font-medium">오류가 발생했습니다.</p>
          <button id="toast-close-btn" class="flex-shrink-0 ml-2 text-white hover:text-gray-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      `}},x=()=>{let e=document.querySelector(`#toast`);e&&e.remove()};S.init=()=>{setTimeout(()=>{x()},3e3)},S.mount=e=>{S.init(),document.querySelector(`main`).insertAdjacentHTML(`beforeend`,S(e));let t=document.getElementById(`toast-close-btn`);t.addEventListener(`click`,e=>{let t=e.target.closest(`#toast`);t.remove()})};function S(e){return`<div id="toast">${b(e)}</div>`}function C(){let e=window.localStorage.getItem(`cart`);return e?JSON.parse(e):[]}function w(e){let t=C();S.mount(`addCart`);let n=t.findIndex(t=>t.productId===e.productId);if(n===-1){let n=[...t,e];window.localStorage.setItem(`cart`,JSON.stringify(n)),Y.set(`cart`,n.length)}else{let r=t[n];r.quantity===e.quantity?t[n].quantity=parseInt(r.quantity)+parseInt(e.quantity):t[n]=e,window.localStorage.setItem(`cart`,JSON.stringify(t))}q.draw(`header`,s()),s.mount()}T.mount=e=>{document.querySelectorAll(`.add-to-cart-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-product-id`),r=e.find(e=>e.productId===n);w(r)})})};function T({products:e,pagination:t}){return`
    <div class="mb-6" id="product-list">
      <div>
        <!-- 상품 개수 정보 -->
        <div class="mb-4 text-sm text-gray-600">
          총 <span class="font-medium text-gray-900">${t?.total}개</span>의 상품
        </div>
        <!-- 상품 그리드 -->
        <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
          ${e?.map(e=>y(e)).join(``)}
        </div>
      </div>
    </div>
  `}E.mount=()=>{let e=new URLSearchParams(window.location.search),t={};for(let[n,r]of e.entries())t[n]=r;let n=document.querySelector(`#limit-select`),r=document.querySelector(`#sort-select`),i=document.querySelector(`#search-input`),a=t.limit||Y.get(`params`).limit,o=t.sort||Y.get(`params`).sort,s=t.search||Y.get(`params`).search;n.value=a,r.value=o,i.value=s;let c=e=>{e.key===`Enter`&&Y.set(`params`,{...Y.get(`params`),search:e.target.value,page:1})};window.addEventListener(`keypress`,c),document.querySelector(`#limit-select`).addEventListener(`change`,e=>{Y.set(`params`,{...Y.get(`params`),limit:e.target.value,page:1})}),document.querySelector(`#sort-select`).addEventListener(`change`,e=>{Y.set(`params`,{...Y.get(`params`),sort:e.target.value,page:1})});let l=document.querySelectorAll(`.category1-filter-btn`),u=`category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors`;l.forEach(e=>{e.addEventListener(`click`,()=>{Y.set(`params.category1`,e.getAttribute(`data-category1`))})});let d=document.querySelectorAll(`.category2-filter-btn`);d.forEach(e=>{e.addEventListener(`click`,t=>{d.forEach(e=>{e.classList=u+` bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}),t.target.classList=u+` bg-blue-100 border-blue-300 text-blue-800`,Y.set(`params.category2`,e.getAttribute(`data-category2`))})})};function E(e={},t=!0){return`
    <!-- 검색 및 필터 -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <!-- 검색창 -->
      <div class="mb-4">
        <div class="relative">
          <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      <!-- 필터 옵션 -->
      <div class="space-y-3">
        <!-- 카테고리 필터 -->
        <div class="space-y-2">
          <div class="flex items-center gap-2" id="breadcrumb-container">
            ${h()}
          </div>
          <!-- 1depth 카테고리 -->
          <div class="flex flex-wrap gap-2">
          ${t?_({type:`category`}):Y.get(`params`).category1?``:Object.keys(e).map(e=>`
                  <button
                  data-category1="${e}"
                  class="category1-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
              bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    ${e}
                  </button>
                  `).join(``)}
        <!-- 2depth 카테고리 -->
        
          ${Y.get(`params`).category1&&e[Y.get(`params`).category1]?Object.keys(e[Y.get(`params`).category1]).map(e=>`
                      <button
                        data-category2="${e}"
                        class="category2-filter-btn text-left px-3 py-2 text-sm rounded-md border transition-colors
                          bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        ${e}
                      </button>
                    `).join(``):``}
  
          
          </div>
          <!-- 2depth 카테고리 -->
        </div>
        <!-- 기존 필터들 -->
        <div class="flex gap-2 items-center justify-between">
          <!-- 페이지당 상품 수 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">개수:</label>
            <select id="limit-select"
                    class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="10">
                10개
              </option>
              <option value="20" selected>
                20개
              </option>
              <option value="50">
                50개
              </option>
              <option value="100">
                100개
              </option>
            </select>
          </div>
          <!-- 정렬 -->
          <div class="flex items-center gap-2">
            <label class="text-sm text-gray-600">정렬:</label>
            <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                          focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
              <option value="price_asc" selected>가격 낮은순</option>
              <option value="price_desc">가격 높은순</option>
              <option value="name_asc">이름순</option>
              <option value="name_desc">이름 역순</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `}const D={isLoading:!0,isLoadingMore:!1,products:[],pagination:{},categories:{},watchRegistered:!1},O=async(e={})=>{e.page&&e.page>1&&D.pagination&&D.pagination.hasNext?(D.isLoadingMore=!0,N()):D.isLoading=!0;let t=await f(e);e.page&&e.page>1?(D.products=[...D.products,...t.products],setTimeout(()=>{D.isLoadingMore=!1},500)):(D.products=t.products,D.isLoading=!1),D.pagination=t.pagination},k=async()=>{let e=await m();D.categories=e,D.isLoading=!1};let A=null,j=null;const M=()=>{let e=Z();if(e!==`/`)return;let t=100,n=()=>{var e;let n=Z();if(n!==`/`||D.isLoadingMore||D.isLoading||!(e=D.pagination)?.hasNext)return;let r=window.scrollY,i=document.documentElement.clientHeight,a=document.body.scrollHeight;if(r+i>a-t){if(D.isLoadingMore)return;j&&clearTimeout(j),j=setTimeout(()=>{if(D.isLoadingMore||D.isLoading)return;D.isLoadingMore=!0;let e=Y.get(`params`).page||1;Y.set(`params`,{...Y.get(`params`),page:e+1})},300)}};return A&&window.removeEventListener(`scroll`,A),A=n,window.addEventListener(`scroll`,A),A},N=()=>{q.draw(`main`,P({products:D.products,pagination:D.pagination,isLoading:D.isLoading,isLoadingMore:D.isLoadingMore,categories:D.categories}))};P.init=()=>{D.isLoading=!0,D.watchRegistered=!1},P.mount=async()=>{let e=new URLSearchParams(window.location.search),t={};for(let[n,r]of e.entries())t[n]=r;await O(t),await k(),N(),E.mount(),y.mount(),Y.set(`categories`,D.categories),T.mount(D.products),M(),D.watchRegistered||(D.watchRegistered=!0,Y.watch(async e=>{if(console.log(`test`),D.isLoadingMore&&e.page){await O(e),D.isLoadingMore=!1,q.draw(`#product-list`,T({products:D.products,pagination:D.pagination})),T.mount(D.products),y.mount();return}let t=new URL(window.location);Object.entries(e).forEach(([e,n])=>{n!==``&&n?t.searchParams.set(e,n):t.searchParams.delete(e)}),window.history.pushState({},``,t.toString()),await O(e),D.isLoadingMore=!1,q.draw(`#search-container`,E(Y.get(`categories`),!1)),E.mount(),q.draw(`#breadcrumb-container`,h()),h.mount(),q.draw(`#product-list`,T({products:D.products,pagination:D.pagination})),T.mount(D.products),y.mount()},`params`))},P.unmount=()=>{A&&(window.removeEventListener(`scroll`,A),A=null),j&&(clearTimeout(j),j=null)};function P({products:e,pagination:t,isLoading:n,categories:r,isLoadingMore:i}){return`
  <div id="search-container">
    ${E(r,n)}
    </div>
    <!-- 상품 목록 -->
    <div class="mb-6 min-h-dvh">
      <div >
        <!-- 상품 그리드 -->
        ${D.isLoading?_({type:`products`}):T({products:e,pagination:t})}
        ${i?_({type:`products`}):`
              <div class="text-center py-4 text-sm text-gray-500">
                모든 상품을 확인했습니다
              </div>`}
        </div>
        <div id="scroll-trigger"  class="h-4"></div>
        </div>
        `}F.mount=()=>{let e=document.querySelector(`#notFound [data-link]`);e.addEventListener(`click`,e=>{e.preventDefault(),J.push({},`/`)})},F.unmount=()=>{let e=document.querySelector(`#notFound [data-link]`);e&&e.removeEventListener(`click`,e=>{e.preventDefault(),J.push({},`/`)})};function F(){return`
  <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg" id="notFound">
  <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
      </linearGradient>
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
      </filter>
    </defs>
    
    <!-- 404 Numbers -->
    <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
    
    <!-- Icon decoration -->
    <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
    <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
    <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
    <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
    
    <!-- Message -->
    <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
    
    <!-- Subtle bottom accent -->
    <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
  </svg>
  
  <a href="/" data-link="home"  class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
</div>
  `}const I={isLoading:!0,product:{},relatedProducts:[]},L={fetchProduct:async e=>{I.product=await p(e)},fetchRelatedProducts:async(e,t)=>{let n=await f({category1:e,category2:t});I.relatedProducts=n.products.filter(e=>e.productId!==I.product.productId)},goToRelatedProducts:async e=>{R.init(),J.push({},`/product/${e}`)},goToProductList:async()=>{J.push({},`/`),s.init(),q.draw(`header`,s()),s.mount(),await q.view()},handleUpQuantity:()=>{let e=document.querySelector(`#quantity-input`);e.value++},handleDownQuantity:()=>{let e=document.querySelector(`#quantity-input`);e.value!==`1`&&e.value--},handleAddCard:e=>{let t={...I.product,quantity:e};w(t)}};R.init=async()=>{I.isLoading=!0,s.init(),q.draw(`header`,s())},R.mount=async()=>{let e=Z().match(/\d+/)[0];q.draw(`main`,R()),await L.fetchProduct(e),await L.fetchRelatedProducts(I.product.category1,I.product.category),I.isLoading=!1,q.draw(`main`,R());let t=document.querySelector(`.go-to-product-list`);t.addEventListener(`click`,()=>{L.goToProductList()});let n=document.querySelector(`a`);n.addEventListener(`click`,e=>{e.preventDefault(),L.goToProductList()});let r=document.querySelector(`#quantity-input`),i=document.querySelector(`#quantity-increase`),a=document.querySelector(`#quantity-decrease`),o=document.getElementById(`add-to-cart-btn`);o.addEventListener(`click`,()=>{L.handleAddCard(r.value)}),r.addEventListener(`change`,e=>{e.target.value<1&&(e.target.value=1)}),i.addEventListener(`click`,L.handleUpQuantity),a.addEventListener(`click`,L.handleDownQuantity);let s=document.querySelectorAll(`.related-product-card`);s.forEach(e=>{let t=e.getAttribute(`data-product-id`);e.addEventListener(`click`,()=>{L.goToRelatedProducts(t)})})},R.unmount=()=>{let e=document.querySelector(`.go-to-product-list`),t=document.querySelector(`a`),n=document.querySelector(`#quantity-input`),r=document.querySelector(`#quantity-increase`),i=document.querySelector(`#quantity-decrease`),a=document.getElementById(`add-to-cart-btn`),o=document.querySelectorAll(`.related-product-card`);e&&e.removeEventListener(`click`,L.goToProductList),t&&t.removeEventListener(`click`,L.goToProductList),n&&n.removeEventListener(`change`,e=>{e.target.value<1&&(e.target.value=1)}),r&&r.removeEventListener(`click`,L.handleUpQuantity),i&&i.removeEventListener(`click`,L.handleDownQuantity),a&&a.removeEventListener(`click`,()=>{L.handleAddCard(n.value)}),o.length>0&&o.forEach(e=>{let t=e.getAttribute(`data-product-id`);e.removeEventListener(`click`,()=>{L.goToRelatedProducts(t)})})};function R(){return`
    ${I.isLoading?_({type:`product`}):`
        <!-- 브레드크럼 -->
        <nav class="mb-4">
          <div class="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" data-link="home" class="hover:text-blue-600 transition-colors">홈</a>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category1="${I.product.category1}">
              ${I.product.category1}
            </button>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <button class="breadcrumb-link" data-category2="${I.product.category2}">
              ${I.product.category2}
            </button>
          </div>
        </nav>
        <!-- 상품 상세 정보 -->
        <div class="bg-white rounded-lg shadow-sm mb-6">
          <!-- 상품 이미지 -->
          <div class="p-4">
            <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img src="${I.product.image}" alt="${I.product.title}" class="w-full h-full object-cover product-detail-image">
            </div>
            <!-- 상품 정보 -->
            <div>
              <p class="text-sm text-gray-600 mb-1"></p>
              <h1 class="text-xl font-bold text-gray-900 mb-3">${I.product.title}</h1>
              <!-- 평점 및 리뷰 -->
              <div class="flex items-center mb-3">
                <div class="flex items-center">
                ${Array.from({length:5},(e,t)=>{let n=t<I.product.rating?`text-yellow-400`:`text-gray-300`;return`
                    <svg class="w-4 h-4 ${n}" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  `}).join(``)}
                
                </div>
                <span class="ml-2 text-sm text-gray-600">${I.product.rating}.0 (${I.product.reviewCount}개 리뷰)</span>
              </div>
              <!-- 가격 -->
              <div class="mb-4">
                <span class="text-2xl font-bold text-blue-600">${I.product.lprice}원</span>
              </div>
              <!-- 재고 -->
              <div class="text-sm text-gray-600 mb-4">
              재고 ${I.product.stock}개
              </div>
              <!-- 설명 -->
              <div class="text-sm text-gray-700 leading-relaxed mb-6">
                ${I.product.description}
              </div>
            </div>
          </div>
          <!-- 수량 선택 및 액션 -->
          <div class="border-t border-gray-200 p-4">
            <div class="flex items-center justify-between mb-4">
              <span class="text-sm font-medium text-gray-900">수량</span>
              <div class="flex items-center">
                <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-l-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input type="number" id="quantity-input" value="1" min="1" max="107" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300 
                  focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 
                   rounded-r-md bg-gray-50 hover:bg-gray-100">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>
            <!-- 액션 버튼 -->
            <button id="add-to-cart-btn" data-product-id="85067212996" class="w-full bg-blue-600 text-white py-3 px-4 rounded-md 
                 hover:bg-blue-700 transition-colors font-medium">
              장바구니 담기
            </button>
          </div>
        </div>
        <!-- 상품 목록으로 이동 -->
        <div class="mb-6">
          <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md 
            hover:bg-gray-200 transition-colors go-to-product-list">
            상품 목록으로 돌아가기
          </button>
        </div>
        <!-- 관련 상품 -->
        <div class="bg-white rounded-lg shadow-sm">
          <div class="p-4 border-b border-gray-200">
            <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
            <p class="text-sm text-gray-600">같은 카테고리의 다른 상품들</p>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-2 gap-3 responsive-grid">
              ${I.relatedProducts.map(e=>`
              <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
                <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                  <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
                </div>
                <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
                <p class="text-sm font-bold text-blue-600">${e.lprice}원</p>
              </div>
                `).join(``)}

            </div>
          </div>
        </div>
      `}
  `}const z=[{path:d(`/`),component:P},{path:d(`/product/:productId`),component:R},{path:d(`*`),component:F}];var B=z;let V=null;const H=()=>{let e=()=>{document.querySelector(`#root`).innerHTML=c()},t=(e,t)=>{e&&(document.querySelector(e).innerHTML=t)},n=async()=>{V&&V.unmount&&V.unmount();for(let r of B){var e,n;let i=Z().match(r.path);if(!i)continue;let a=r.component;V=a,(e=a.init)?.call(a,i?.[1]),t(`main`,a({})),await(n=a.mount)?.call(a);return}};return{init:e,draw:t,view:n}};var U=H;const W=(()=>{let e={params:{category1:``,category2:``,search:``,sort:`price_asc`,page:1,limit:20},pagination:{hasNext:!1,hasPrev:!1,limit:20,page:1,total:0,totalPages:0},categories:{},cart:0},t=[],n=(e,t,n)=>{let r=t.split(`.`),i=e;r.slice(0,-1).forEach(e=>{i[e]||(i[e]={}),i=i[e]}),i[r[r.length-1]]=n},r=(e,t)=>t.split(`.`).reduce((e,t)=>e?.[t],e),i=t=>t?e[t]:e,a=(i,a)=>{n(e,i,a),t.forEach(({callback:t,targetKey:n})=>{if(!n||i===n||i.startsWith(`${n}.`)){let i=r(e,n);t(i,e)}})},o=(e,n=null)=>(t.push({callback:e,targetKey:n}),()=>{let r=t.findIndex(t=>t.callback===e&&t.targetKey===n);r!==-1&&t.splice(r,1)});return()=>({get:i,set:a,watch:o})})();var G=W;const K=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-CRjX2EoE.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));K().then($);const q=U(),J=u(),Y=G(),X=`/front_6th_chapter1-1`,Z=(e=window.location.pathname)=>{let t=e.startsWith(X)?e.slice(X.length)||`/`:e;return t===`/`&&window.location.hash?window.location.hash.slice(1)||`/`:t},Q=e=>X+e;function $(){var e;if(q.init(),window.location.pathname.includes(`404.html`)){window.location.href=X+`/`;return}q.view(),(e=c.mount)?.call(c),window.addEventListener(`popstate`,()=>{var e;q.init(),(e=c.mount)?.call(c),q.view()})}K().then($);