"use strict";(()=>{var A="https://explorer-backend-1.onrender.com",p={zkevm:"Polygon zkEVM",pos:"Polygon POS",cdk:"Polygon CDK",id:"Polygon ID",miden:"Polygon Miden"},r={dapps:"dApps",solution_providers:"Solution Providers",ecosystem_enablers:"Ecosystem Enablers",enterprises:"Enterprises",chains:"Chains"},S={ascending:"ascending",descending:"descending"},v={public_chains:"Public Chains",app_specific_chains:"App Specific Chains",decentralized_identity:"Decentralized Identity"},z="#filter-wrapper",x="#list-wrapper",P="#list-news-wrapper",O={"Polygon zkEVM":[r.dapps,r.solution_providers,r.ecosystem_enablers,r.enterprises],"Polygon POS":[r.dapps,r.solution_providers,r.ecosystem_enablers,r.enterprises],"Polygon CDK":[r.chains,r.solution_providers],"Polygon ID":[r.dapps,r.solution_providers]};var n={log:(...e)=>{localStorage.getItem("DEBUG_MODE")==="true"&&console.log(...e)},deep:(...e)=>{localStorage.getItem("DEBUG_MODE")==="true"&&console.dir(...e)},info:(...e)=>{localStorage.getItem("DEBUG_MODE")==="true"&&console.info(...e)},warn:(...e)=>{localStorage.getItem("DEBUG_MODE")==="true"&&console.warn(...e)},error:(...e)=>{localStorage.getItem("DEBUG_MODE")==="true"&&console.error(...e)}};var ae=e=>Object.entries(e).map(([t,i])=>Array.isArray(i)?i.map(o=>`${encodeURIComponent(t)}=${encodeURIComponent(o)}`).join("&"):`${encodeURIComponent(t)}=${encodeURIComponent(i)}`).join("&"),le=async(e,t,i)=>{let o={method:t,headers:{"Content-Type":"application/json"}};i&&(o.body=i);let a=await(await fetch(`${A}/${e}`,o)).json();return n.deep(a),a},R=async e=>{n.deep(e);let t=ae(e);return le(`companies?${t}`,"GET")};function de(e={},t="store"){let i=0;function o(g,d){let l=new CustomEvent(g,{bubbles:!0,cancelable:!0,detail:d});i>0&&(document.dispatchEvent(l),i=0)}function s(g,d){return{get:function(l,u){return u==="_isProxy"?!0:(["object","array"].includes(Object.prototype.toString.call(l[u]).slice(8,-1).toLowerCase())&&!l[u]._isProxy&&(l[u]=new Proxy(l[u],s(g,d))),l[u])},set:function(l,u,y){return l[u]===y||(l[u]=y,i+=1),!0},deleteProperty:function(l,u){return delete l[u],i+=1,!0}}}let a=g=>{n.log("ran setState");for(let d in g)g.hasOwnProperty(d)&&(e[d]=g[d]);i+=1,o(t,e)};return{state:new Proxy(e,s(t,e)),setState:a}}var{state:c,setState:h}=de({tab:v.public_chains,chain:p.zkevm,type:r.dapps,categories:[],sort:"ascending",query:"",after:0,limit:9},"filters");var H=e=>{let t=c.categories;return`
  <div class="filtered-projects-container">
  <div class="text-size-med text-gray6">
    <span class="filter-number-text">${e} projects</span> 
  ${t&&t.length>0?"filtered by":""}
  </div>
  ${t&&t.length>0?t.map(o=>`<div class="filtered-projects-tags-container">
    <div class="filtered-projects-tag">
      <div class="filtered-label" data-value="${o}">${o.split("_")[1]||o}</div>
      <div class="filter-close-icon w-embed">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5"
            stroke="currentcolor"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>`).join(""):""}
    </div>
  </div>
</div>
`},B=e=>`
  <div fs-cmsnest-element="list-2" role="list" class="items-cl w-dyn-items">${e.map(o=>pe(o)).join("")}</div>`,pe=e=>{let{id:t,name:i,description:o,icon:s,cardBackground:a,twitterHandle:g,githubRepo:d,category:l,subCategories:u,discordServer:y,telegramChannel:f,coingeckoLink:b,websiteLink:m,linkedinLink:He,spnProfile:N}=e;return`<div role="listitem" class="items-ci w-dyn-item">
  <div class="items-ci-wrapper">
    <div class="items-card-content">
      <div class="item-content">
        <img
          width="112"
          loading="lazy"
          alt=""
          src="${s}"
          class="item-icon-img"
        />
        <div class="item-name-tags">
          <h3 class="text-h3">${i}</h3>
           ${l?`<div class= "item-tags">${l.map(I=>`<div class="items-tag is-primary" > ${I} </div >`).join("")} </div>`:""}
        ${u?`<div class="item-tags"> ${u.map(I=>`<div class="items-tag">${I}</div>`).join("")}</div >`:""}
        </div>
      </div>
    </div>
    <div style="background-image: none" class="items-card-hover-content">
      <div class="item-card-link">
        <h3 class="text-h3">${i}</h3>
        <p class="text-size-med is-item-card-desc">
            ${o}
        </p>
        <div class="item-read-more-container">
          <div class="text-semibold is-item-read-more">Read&nbsp;More</div>
          <div class="item-read-more-tooltip">
            <div class="item-read-more-tooltip-tip w-embed">
              <svg
                width="20"
                height="7"
                viewBox="0 0 20 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.2979 2.43832C12.5825 1.06599 11.7248 0.379828 10.7512 0.193675C10.2549 0.0987752 9.7451 0.0987753 9.24878 0.193675C8.27522 0.379828 7.41751 1.06599 5.7021 2.43832L6.99382e-07 7L20 7L14.2979 2.43832Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </div>
            <div class="item-read-more-tooltip-text">
              ${o}
            </div>
          </div>
        </div>
        <div class="w-embed"></div>
      </div>
      <div class="items-links-wrapper">
        <div class="items-social-links-wrapper">
           ${m?`<a
            href="${m}"
            class="featured-social-link w-inline-block "
            target="_blank"
            ><div class="featured-items-social-icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H2M12 22C6.47715 22 2 17.5228 2 12M12 22C14.5013 19.2616 15.9228 15.708 16 12C15.9228 8.29203 14.5013 4.73835 12 2M12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2M2 12C2 6.47715 6.47715 2 12 2"
                  stroke="currentcolor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg></div></a
          >`:""}
          ${g?`<a
            href="${g}"
            class="featured-social-link w-inline-block"
            target="_blank"
            ><div class="items-social-icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 6.73077C20.325 7.07692 19.65 7.19231 18.8625 7.30769C19.65 6.84615 20.2125 6.15385 20.4375 5.23077C19.7625 5.69231 18.975 5.92308 18.075 6.15385C17.4 5.46154 16.3875 5 15.375 5C13.0125 5 11.2125 7.30769 11.775 9.61538C8.7375 9.5 6.0375 8 4.125 5.69231C3.1125 7.42308 3.675 9.61538 5.25 10.7692C4.6875 10.7692 4.125 10.5385 3.5625 10.3077C3.5625 12.0385 4.8 13.6538 6.4875 14.1154C5.925 14.2308 5.3625 14.3462 4.8 14.2308C5.25 15.7308 6.6 16.8846 8.2875 16.8846C6.9375 17.9231 4.9125 18.5 3 18.2692C4.6875 19.3077 6.6 20 8.625 20C15.4875 20 19.3125 14.1154 19.0875 8.69231C19.875 8.23077 20.55 7.53846 21 6.73077Z"
                  fill="currentcolor"
                ></path>
              </svg></div></a
          >`:""}${d?`<a
            href="${d}"
            class="featured-social-link w-inline-block"
            target="_blank"
            ><div class="featured-items-social-icon w-embed">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9694 2C6.46483 2 2 6.58933 2 12.2474C2 16.7739 4.87462 20.6088 8.78899 21.9919C9.27829 22.0547 9.46177 21.7404 9.46177 21.4889C9.46177 21.2375 9.46177 20.6088 9.46177 19.7286C6.70948 20.3573 6.09786 18.3456 6.09786 18.3456C5.66972 17.1511 4.99694 16.8367 4.99694 16.8367C4.07951 16.2081 5.0581 16.2081 5.0581 16.2081C6.0367 16.2709 6.58716 17.2768 6.58716 17.2768C7.50459 18.8485 8.91131 18.4084 9.46177 18.1569C9.52294 17.4654 9.82875 17.0253 10.0734 16.7739C7.87156 16.5224 5.5474 15.6422 5.5474 11.6816C5.5474 10.55 5.91437 9.66984 6.58716 8.91543C6.52599 8.72682 6.15902 7.65808 6.70948 6.27499C6.70948 6.27499 7.56575 6.02352 9.46177 7.34374C10.2569 7.09227 11.1131 7.0294 11.9694 7.0294C12.8257 7.0294 13.682 7.15514 14.4771 7.34374C16.3731 6.02352 17.2294 6.27499 17.2294 6.27499C17.7798 7.65808 17.4128 8.72682 17.3517 8.97829C17.9633 9.66984 18.3914 10.6128 18.3914 11.7445C18.3914 15.7051 16.0673 16.5224 13.8654 16.7739C14.2324 17.0882 14.5382 17.7169 14.5382 18.6599C14.5382 20.043 14.5382 21.1117 14.5382 21.4889C14.5382 21.7404 14.7217 22.0547 15.211 21.9919C19.1865 20.6088 22 16.7739 22 12.2474C21.9388 6.58933 17.474 2 11.9694 2Z"
                  fill="currentcolor"
                ></path>
              </svg></div
          ></a>`:""}
        </div>
        ${N?`<a href="${N}" class="featured-item-link w-inline-block"
            target="_blank"
          ><div>Connect with SP</div>
          <div class="featured-item-link-arrow w-embed">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83301 14.1667L14.1663 5.83337M14.1663 5.83337V14.1667M14.1663 5.83337H5.83301"
                stroke="currentcolor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg></div
        ></a>`:""}
      </div>
    </div>
  </div>
</div>

`},D=(e,t)=>{let i=c.after,o=c.limit,s=3,a=[],g=parseInt(i/o)+1,d=parseInt((e-1)/o)+1;a.push(1),g>3&&a.push("...");let l=Math.max(g-Math.floor(s/2),2),u=Math.min(l+s-1,d-1);u-l<s-2&&(l=Math.max(u-s+2,2));for(let f=l;f<=u;f++)a.push(f);return u<d-1&&a.push("..."),d>1&&a.push(d),`
        <div class="pagination-wrapper">
  <button
    class="pagination-btn is-previous w-inline-block ${i?"":"is-disabled"}"
  >
    <div class="pagination-icon w-embed">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M15 19L8 12L15 5"
            stroke="currentcolor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </div>
  </button>

  ${a.map(f=>`<button class="pagination-link ${f===g?"w--current":""}"> ${f}</button>`).join("")}
  <button
    class="pagination-btn is-next w-inline-block ${t?"":"is-disabled"}"
  >
    <div class="pagination-icon w-embed">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M9 5L16 12L9 19"
            stroke="currentcolor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </div>
  </button>
</div>
    `},F=()=>{let e=c.query;return`<div class="no-results-wrapper">
  <div class="no-results-abs-overlay">
    <img
      src="https://assets-global.website-files.com/652772322237331bccec35f0/655dc0be222b8fc5ca76f1fa_no-results-icon.svg"
      loading="lazy"
      alt=""
      class="no-results-icon"
    />
    <div class="spacer-1"></div>
    ${e?`<div class="text-size-large">
          No results for \u201C<span id="no-results-search-text">${e}</span>\u201D
        </div>`:""}
    <div class="spacer-p5"></div>
    <div class="text-size-small text-gray6">
      Sorry, we couldn't find anything with this criteria. Please try refining
      your search filters.
    </div>
  </div>
  <div class="no-results-list-grid">
    <div
      id="w-node-db06898f-18f7-fd4c-6ae1-9cf2b0517345-ccec35f7"
      class="no-results-list-card"
    >
      <div class="no-results-ghost-icon w-embed">
        <svg
          width="112"
          height="120"
          viewBox="0 0 112 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            width="64"
            height="64"
            rx="12"
            fill="currentcolor"
          ></rect>
          <rect
            y="80"
            width="112"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
          <rect
            x="31"
            y="108"
            width="50"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
        </svg>
      </div>
    </div>
    <div
      id="w-node-_7c33c881-15de-d637-0626-e04bed95d02a-ccec35f7"
      class="no-results-list-card"
    >
      <div class="no-results-ghost-icon w-embed">
        <svg
          width="112"
          height="120"
          viewBox="0 0 112 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            width="64"
            height="64"
            rx="12"
            fill="currentcolor"
          ></rect>
          <rect
            y="80"
            width="112"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
          <rect
            x="31"
            y="108"
            width="50"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
        </svg>
      </div>
    </div>
    <div
      id="w-node-f57cafe3-d616-b848-5e0c-0bbe56c67509-ccec35f7"
      class="no-results-list-card"
    >
      <div class="no-results-ghost-icon w-embed">
        <svg
          width="112"
          height="120"
          viewBox="0 0 112 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            width="64"
            height="64"
            rx="12"
            fill="currentcolor"
          ></rect>
          <rect
            y="80"
            width="112"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
          <rect
            x="31"
            y="108"
            width="50"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
        </svg>
      </div>
    </div>
    <div
      id="w-node-e6059205-bd3e-82dc-b98a-322c58eb45e5-ccec35f7"
      class="no-results-list-card"
    >
      <div class="no-results-ghost-icon w-embed">
        <svg
          width="112"
          height="120"
          viewBox="0 0 112 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            width="64"
            height="64"
            rx="12"
            fill="currentcolor"
          ></rect>
          <rect
            y="80"
            width="112"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
          <rect
            x="31"
            y="108"
            width="50"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
        </svg>
      </div>
    </div>
    <div
      id="w-node-b9d8de25-2ed9-acf0-a9df-e4e6cc66cc66-ccec35f7"
      class="no-results-list-card"
    >
      <div class="no-results-ghost-icon w-embed">
        <svg
          width="112"
          height="120"
          viewBox="0 0 112 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            width="64"
            height="64"
            rx="12"
            fill="currentcolor"
          ></rect>
          <rect
            y="80"
            width="112"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
          <rect
            x="31"
            y="108"
            width="50"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
        </svg>
      </div>
    </div>
    <div
      id="w-node-_509eb595-fafe-c5a1-887a-d9443c816376-ccec35f7"
      class="no-results-list-card"
    >
      <div class="no-results-ghost-icon w-embed">
        <svg
          width="112"
          height="120"
          viewBox="0 0 112 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            width="64"
            height="64"
            rx="12"
            fill="currentcolor"
          ></rect>
          <rect
            y="80"
            width="112"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
          <rect
            x="31"
            y="108"
            width="50"
            height="12"
            rx="4"
            fill="currentcolor"
          ></rect>
        </svg>
      </div>
    </div>
  </div>
</div>
`};var U=(e,t)=>{let i=document.querySelector(e);i?i.innerHTML=t:n.warn(`Unable to find the DOM element with identifier ${e}`)},ue=async(e,t,i)=>{var u,y,f;let o="";if(e&&e.length>0){let b=B(e),m=D(t,i);o=b+m}else o=F();let s=H(t);U("#filter-count",s),U(x,o);let a=(u=document.querySelector(x))==null?void 0:u.querySelector(".is-previous"),g=(y=document.querySelector(x))==null?void 0:y.querySelector(".is-next"),d=(f=document.querySelector(x))==null?void 0:f.querySelectorAll(".pagination-link"),l=c.after;a==null||a.addEventListener("click",()=>L("prev",l,i,0)),g==null||g.addEventListener("click",()=>L("next",l,i,0)),d==null||d.forEach(b=>{let m=parseInt(b.textContent);b.addEventListener("click",()=>L("goto",l,i,m))}),me(),ve()},j=e=>{let t=document.querySelector(z),i=document.querySelector(P),o=document.querySelector("#filter-count");t&&i&&o&&(e?(t.style.display="block",i.style.display="flex",o.style.display="block"):(t.style.display="none",i.style.display="none",o.style.display="none"))},he=()=>{let t=[r.dapps,r.solution_providers,r.ecosystem_enablers,r.enterprises,r.chains].map(s=>document.querySelector(`[data-type-filter="${s}"]`)),i=c.chain,o=O[i];t.forEach(s=>{let a=s.getAttribute("data-type-filter");o.includes(a)?s.style.display="block":s.style.display="none"})},fe=()=>{let e=c.type;[r.dapps,r.solution_providers,r.ecosystem_enablers,r.enterprises,r.chains].map(o=>document.querySelector(`[data-type-filter="${o}"]`)).forEach(o=>{var a,g,d,l;(a=o==null?void 0:o.querySelector(".w-radio-input"))==null||a.classList.remove("w--redirected-checked","w--redirected-focus"),(g=o==null?void 0:o.querySelector(".filter-radio-label"))==null||g.classList.remove("is-active");let s=o.getAttribute("data-type-filter");e===s&&((d=o==null?void 0:o.querySelector(".w-radio-input"))==null||d.classList.add("w--redirected-checked"),(l=o==null?void 0:o.querySelector(".filter-radio-label"))==null||l.classList.add("is-active"))})},T=async()=>{n.log("Updating Filters"),he(),fe()},E=async()=>{n.log("Updating List");let e={chain:c.chain,type:c.type,categories:c.categories,query:c.query,sort:c.sort,after:c.after,limit:c.limit},t=await R(e),{success:i,status:o,data:s,error:a}=t;if(i){let{total:g,records:d,has_more:l}=s;ue(d,g,l)}else n.warn(a)},L=(e,t,i,o)=>{n.log(e),e==="next"&&i?h({after:c.after+c.limit}):e==="prev"&&t>0?h({after:c.after-c.limit}):e==="goto"&&!isNaN(o)&&h({after:(o-1)*c.limit})},me=()=>{document.querySelectorAll(".filtered-projects-tag").forEach(t=>{let i=t.querySelector(".filtered-label"),o=t.querySelector(".filter-close-icon"),s=document.querySelector(`[data-categories-option="${i==null?void 0:i.getAttribute("data-value")}"]`);s||(s=document.querySelector(`[data-subcategories-option="${i==null?void 0:i.getAttribute("data-value")}"]`)),n.log(t,o,s),t.addEventListener("click",a=>{s==null||s.click()})})};function ve(){let e=document.getElementById("id-categories"),t=document.getElementById("pos-zkevm-categories"),i=document.getElementById("dapps-categories"),o=c.chain,s=c.type;t.style.display="none",e.style.display="none",i.style.display="none",o===p.id&&s===r.solution_providers?(e.style.display="block",t.style.display="none",i.style.display="none"):(o===p.pos||o===p.zkevm||o===p.cdk)&&s===r.solution_providers?(e.style.display="none",t.style.display="block",i.style.display="none"):(o===p.pos||o===p.zkevm)&&s===r.dapps&&(e.style.display="none",t.style.display="none",i.style.display="block")}var k=()=>{document.querySelectorAll(".filter-search-field.is-in-dd").forEach(i=>{i.value=""}),document.querySelectorAll(" .w-checkbox-input").forEach(i=>{i.classList.remove("w--redirected-checked")})};var C=(e,t,i)=>{document.querySelectorAll(e).forEach(s=>{s.addEventListener("click",i)})},ye=e=>{var i,o,s;let t=e.currentTarget.getAttribute("data-tab-name");switch(t){case v.public_chains:h({tab:t,after:0,categories:[],type:r.dapps,chain:p.zkevm}),(i=document.querySelector(`[data-chain-name="${p.zkevm}"]`))==null||i.click();break;case v.app_specific_chains:h({tab:t,after:0,categories:[],type:r.chains,chain:p.cdk}),(o=document.querySelector(`[data-chain-name="${p.cdk}"]`))==null||o.click();break;case v.decentralized_identity:h({tab:t,after:0,categories:[],type:r.dapps,chain:p.id}),(s=document.querySelector(`[data-chain-name="${p.id}"]`))==null||s.click();break}k(),n.log(`Tab selected: ${c.tab}`)},we=e=>{let t=e.currentTarget.getAttribute("data-chain-name");switch(t){case p.zkevm:case p.pos:h({chain:t,after:0,categories:[],type:r.dapps});break;case p.cdk:h({chain:t,after:0,categories:[],type:r.chains});break;case p.id:h({chain:t,after:0,categories:[],type:r.dapps});break}n.log(`Chain selected: ${c.chain}`);let i=[p.cdk,p.id,p.pos,p.zkevm];j(i.includes(t)),k()},be=e=>{let t=e.currentTarget.getAttribute("data-type-filter");h({type:t,after:0,categories:[]}),n.log(`Type selected: ${c.type}`),k()},Se=e=>{let t=e.currentTarget.getAttribute("data-sort-filter");h({sort:t,after:0}),n.log(`Sort selected: ${c.sort}`)},xe=e=>{ke(i=>{n.log(i);let o=i.target.value;h({query:o,after:0}),n.log(`Query: ${c.query}`)},500)(e)},G=()=>{let t=[v.public_chains,v.app_specific_chains,v.decentralized_identity].map(i=>`[data-tab-name="${i}"]`).join(",");C(t,"tab",ye)},Y=()=>{let t=[p.zkevm,p.pos,p.id,p.cdk,p.miden].map(i=>`[data-chain-name="${i}"]`).join(",");C(t,"chain",we)},Q=()=>{let t=[r.dapps,r.solution_providers,r.ecosystem_enablers,r.enterprises,r.chains].map(i=>`[data-type-filter="${i}"]`).join(",");C(t,"type",be)},W=()=>{let t=[S.ascending,S.descending].map(i=>`[data-sort-filter="${i}"]`).join(",");C(t,"sort",Se)};function ke(e,t=300){let i;return(...o)=>{clearTimeout(i),i=setTimeout(()=>{e.apply(this,o)},t)}}var Z=()=>{let e="#filter-search";document.querySelector(e).addEventListener("input",xe)},_=(e,t)=>{t.forEach(i=>{var a;let s=(((a=i.textContent)==null?void 0:a.toLowerCase())||"").includes(e.toLowerCase());i.style.display=s?"flex":"none"})},Ce=e=>{var o;let t=e.currentTarget.value,i=(o=document.querySelector("#pos-zkevm-categories"))==null?void 0:o.querySelectorAll(".filter-checkbox-container");_(t,i),n.log(`Query: ${t}`)},Ie=e=>{var o;let t=e.currentTarget.value,i=(o=document.querySelector("#id-categories"))==null?void 0:o.querySelectorAll(".filter-checkbox-container");_(t,i),n.log(`Query: ${t}`)},$e=e=>{var o;let t=e.currentTarget.value,i=(o=document.querySelector("#dapps-categories"))==null?void 0:o.querySelectorAll(".filter-checkbox-container");n.log(t,i),_(t,i),n.log(`Query: ${t}`)},V=e=>{e.preventDefault();let t=e.currentTarget.getAttribute("data-categories-option"),i=[...c.categories];n.log(i),i.includes(t)?i=i.filter(s=>s!==t):i.push(t),h({categories:i,after:0});let o=e.currentTarget.querySelector(".w-checkbox-input");c.categories.includes(t)?o==null||o.classList.add("w--redirected-checked"):o==null||o.classList.remove("w--redirected-checked"),n.log(`Categories selected: ${c.categories}`)},Le=e=>{e.preventDefault();let t=e.currentTarget.getAttribute("data-subcategories-option");t||(t=e.currentTarget.getAttribute("data-categories-option"));let i=[...c.categories];n.log(i),i.includes(t)?i=i.filter(s=>s!==t):i.push(t),h({categories:i,after:0});let o=e.currentTarget.querySelector(".w-checkbox-input");c.categories.includes(t)?o==null||o.classList.add("w--redirected-checked"):o==null||o.classList.remove("w--redirected-checked"),n.log(`Categories selected: ${c.categories}`)},J=()=>{var y,f,b;let e="#PoS-zkEVM-Categories-Search",t=document.querySelector(e);t==null||t.addEventListener("input",Ce);let i="#ID-Categories-Search",o=document.querySelector(i);o==null||o.addEventListener("input",Ie);let s="#dApps-Categories-Search",a=document.querySelector(s);a==null||a.addEventListener("input",$e);let g=".filter-checkbox-container",d=(y=document.querySelector("#dapps-categories"))==null?void 0:y.querySelectorAll(g);d==null||d.forEach(m=>{m.addEventListener("click",Le)});let l=(f=document.querySelector("#pos-zkevm-categories"))==null?void 0:f.querySelectorAll(g);l==null||l.forEach(m=>{m.addEventListener("click",V)});let u=(b=document.querySelector("#id-categories"))==null?void 0:b.querySelectorAll(g);u==null||u.forEach(m=>{m.addEventListener("click",V)})};var oe=localStorage.getItem("SSO_DEV")==="true"||window.location.hostname==="explorer-staging.polygon.technology",se=oe?"https://ecosystem-staging-api.polygon.technology":"https://ecosystem-api.polygon.technology",w=oe?"https://ecosystem-staging.polygon.technology":"https://ecosystem.polygon.technology",Te="#log-in-btn",Ee="#log-out-btn",re="#user-logged-in",ne="#user-not-logged-in",q="#view-profile",K="#sp-sign-up-btn",X="#dapps-sign-up-btn",ee="#other-sign-up-btn",_e="#modal-sign-in",M={dev:"dev",sp:"sp",dapp:"dapp"},qe={empty:"",pending:"pending",rejected:"rejected",accepted:"accepted",live:"live"},te=async()=>{try{let t=await(await fetch(`${se}/auth/sessionRefresh`,{credentials:"include"})).json();n.log("session refreshed: ",t)}catch(e){n.log(e)}},Me=async(e,t,i)=>{try{let s=await(await fetch(`${se}/auth/sessionCheck`,{credentials:"include"})).json();if(s.success){n.log("session validated"),e(s.data),await te();let a=localStorage.getItem("sessionRefreshIntervalId");a&&(clearInterval(Number(a)),localStorage.removeItem("sessionRefreshIntervalId"));let g=setInterval(te,60*30*1e3);localStorage.setItem("sessionRefreshIntervalId",JSON.stringify(g)),window.addEventListener("beforeunload",()=>{let d=localStorage.getItem("sessionRefreshIntervalId");d&&(clearInterval(Number(d)),localStorage.removeItem("sessionRefreshIntervalId"))})}else t()}catch(o){n.log(o),i()}},Ne=e=>{n.log("Showing authenticatedView"),$(ne).hide(),$(re).show();let t="",{expertise:i}=e;if(i===M.dev){let{userId:o}=e;o&&(t=`${w}/${o}`)}else if(i===M.sp){let{companyId:o}=e;o&&(t=`${w}/${o}`)}else if(i===M.dapp){let{dappStatus:o}=e;if(o===qe.live){let{companyId:s}=e;s&&(t=`${w}/${s}`)}else t=`${w}/complete-profile`}t?($(q).attr("href",t),$(q).attr("target","_blank")):$(q).hide()},ie=()=>{n.log("Showing unauthenticatedView"),$(re).hide(),$(ne).show()},Ae=()=>{$(Te).attr("href",`${w}/login/?redirect=${encodeURIComponent(window.location.href)}&operation=login`),$(_e).attr("href",`${w}/login/?redirect=${encodeURIComponent(window.location.href)}&operation=login`),$(Ee).attr("href",`${w}/login/?redirect=${encodeURIComponent(window.location.href)}&operation=logout`),$(K).attr("href",`${w}/signup/?expertise=sp&persona=entity&view=enter-email`),$(K).attr("target","_blank"),$(X).attr("href",`${w}/signup/?expertise=dapp&persona=entity&view=enter-email`),$(X).attr("target","_blank"),$(ee).attr("href","https://info.polygon.technology/ecosystem-explorer-interest"),$(ee).attr("target","_blank")},ce=()=>{Ae(),Me(Ne,ie,ie)};var ze=()=>{document.addEventListener("filters",function(e){n.log("Event triggered",e),T(),E()})};var Pe=()=>{G(),Y(),Q(),W(),Z(),J()},Oe=()=>{var o;let e=document.querySelector(`[data-tab-name="${v.public_chains}"]`),t=document.querySelector(`[data-tab-name="${p.zkevm}"]`),i=document.querySelector(`[data-sort-filter="${S.ascending}"]`);(o=i==null?void 0:i.querySelector(".filter-radiobox"))==null||o.classList.add("w--redirected-checked"),e==null||e.click()},Re=()=>{window.Webflow||(window.Webflow=[]),window.Webflow.push(async()=>{localStorage.getItem("USE_LOCAL")!=="true"&&(ce(),ze(),Pe(),Oe(),T(),E())})};Re();})();
