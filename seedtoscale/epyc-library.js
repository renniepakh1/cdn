!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.epyc=t():e.epyc=t()}(self,(function(){return(()=>{var e={112:e=>{const t=algoliasearch("W0HCW4Y865","3c8529be60fd7e001d492c87bcd1d5a6"),n="seedtoscale.com"==window.location.hostname?"":"dev_",a=`${n}CONTENT`,i=`${n}GUEST`,o=`${n}PEOPLE`,s=`${n}AUTHOR`,c=`${n}JOBS`,r=`${a}_epochDate_asc`,l=function(e){e.search()};e.exports={searchClient:t,search:function(e=a,n=l){return instantsearch({indexName:e,searchClient:t,searchFunction:l})},getIndex:function(e=a){return t.initIndex(e)},INDEX:a,GUEST_INDEX:i,PEOPLE_INDEX:o,AUTHOR_INDEX:s,JOBS_INDEX:c,LATEST_RESULT_INDEX:r}},281:(e,t,n)=>{"use strict";n.r(t);var a=n(112),i=n(286);const o=e=>{const t=Object.assign({},{container:"#searchbox",placeholder:"Search blogs",cssClasses:{input:"list-search-field w-input"},showSubmit:!1,showReset:!1},e);return instantsearch.widgets.searchBox(t)},s=e=>{const t=Object.assign({},{hitsPerPage:10,clickAnalytics:!0,enablePersonalization:!0},e);return console.log("configure",t),instantsearch.widgets.configure(t)},c=e=>{const t={container:"#checkbox-filter-author",attribute:"Author",sortBy:["Author:asc"],templates:{item:function({count:e,isRefined:t,label:n,value:a,highlighted:o,url:s}){const c=n.toLowerCase();return i.checkbox.replace(/{{id}}/g,c).replace(/{{url}}/g,s).replace(/{{count}}/g,e).replace(/{{label}}/g,n).replace(/{{value}}/g,a).replace(/{{isChecked}}/g,t?"w--redirected-checked":" ").replace(/{{checkedAttr}}/g,t?"checked":"")}}},n=Object.assign({},t,e);return instantsearch.widgets.refinementList(n)},r=function(e){const t=Object.assign({},{container:"#pagination",showFirst:!0,showPrevious:!0,showNext:!0,showLast:!0,padding:2,cssClasses:{root:"pagination",noRefinementRoot:"pagination-no-result",list:"pagination-list",item:"pagination-item",firstPageItem:"page-first",lastPageItem:"page-last",previousPageItem:"page-previous",nextPageItem:"page-next",pageItem:"page-item",selectedItem:"page-selected",disabledItem:"page-disabled",link:"page-list"}},e);return instantsearch.widgets.pagination(t)};function l(e,t,n="body-medium",a="medium-block"){const{articleLink:o,contentTypeIcon:s,contentType:c,title:r,authorImage:l,authorName:d,featuredImage:p,time:g,tags:u}=e;let m=p,h=t.replace(/{{articleLink}}/g,o).replace(/{{contentTypeIcon}}/g,s).replace(/{{contentType}}/g,c).replace(/{{title}}/g,r).replace(/{{authorImage}}/g,l).replace(/{{authorName}}/g,d).replace(/{{featuredImage}}/g,m).replace(/{{readTime}}/g,g).replace(/{{titleClass}}/g,n).replace(/{{imageClass}}/g,a),b=u.trim().split("--");if(b.length>2){const e=`+${b.length-2} more`;b=[b[0],b[2],e]}let f="";b.forEach((e=>{f+=i.tagTemplate.replace(/{{tag}}/g,e)})),h=h.replace(/{{tags}}/g,f);let v="block",y="none";return h="PODCAST"!=c.toUpperCase()?h.replace(/podcastShow/g,y):h.replace(/podcastShow/g,v),h="VIDEO"!=c.toUpperCase()?h.replace(/videoShow/g,y):h.replace(/videoShow/g,v),h}const d=(e,t)=>l(e,0==t?i.contentGridItem:i.contentListItem,"body-normal","");function p(e){return function(e,t){const{container:n}=e;return instantsearch.connectors.connectHits(((e,a)=>{const{hits:i}=e;document.querySelector(n).innerHTML=`\n              ${i.map(((e,n)=>t(e,n))).join("")}\n          `}))}(e,d)}const g=(e,t)=>l(e,i.contentListItem);function u(e,t=g){return function(e,t=g){const{container:n}=e;return instantsearch.connectors.connectHits(((e,a)=>{const{hits:o,results:s}=e,c=s&&s.query&&0==o.length;document.querySelector(n).innerHTML=c?i.emptyScreenTemplate:`\n                ${o.map(((e,n)=>t(e,n))).join("")}\n            `}))}(e,t)}const m=(e,t)=>i.peopleCardTemplate.replace(/{{profileUrl}}/g,e.profileLink).replace(/{{image}}/g,e.image).replace(/{{name}}/g,e.name).replace(/{{designation}}/g,e.designation);function h(e,t=m){return instantsearch.connectors.connectInfiniteHits(((n,a)=>{const{hits:i,showPrevious:o,isFirstPage:s,showMore:c,isLastPage:r}=n;console.log("[+] params",e);const l=document.querySelector(e.container),d=document.querySelector(e.nextButtonSelector),p=document.querySelector(e.previousSelector);if(a)return p&&p.addEventListener("click",(()=>{o()})),void(d&&d.addEventListener("click",(()=>{c()})));p&&(p.disabled=s),d&&(d.disabled=r),l.innerHTML=`\n            ${i.map(((e,n)=>t(e,n))).join("")}\n        `}))}const b=instantsearch.connectors.connectMenu(((e,t)=>{const{items:n,refine:a,createURL:o,isShowingMore:s,canToggleShowMore:c,toggleShowMore:r,widgetParams:l}=e;l.container.innerHTML=n.map((e=>{{const{count:t,isRefined:n,label:a,value:o,highlighted:s,url:c}=e;return i.podcastRadio.replace(/{{label}}/g,a).replace(/{{id}}/g,a.toLowerCase().replace(/ /g,"-")).replace(/{{isSelected}}/g,n?"w--redirected-checked":"")}})).join(""),[...l.container.querySelectorAll("label")].forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),a(e.currentTarget.dataset.value)}))}))}));function f(e="#hits"){const{pathname:t}=window.location;if(!t.startsWith("/content-hub"))return!1;const n=(0,a.search)(a.LATEST_RESULT_INDEX);n.addWidgets([s({hitsPerPage:5,offset:4}),c({container:"#checkbox-filter-domain",attribute:"domain",sortBy:["domain:asc"]}),c({container:"#checkbox-filter-business",attribute:"businessFunction",sortBy:["businessFunction:asc"]}),c({container:"#checkbox-filter-content-type",attribute:"contentType",sortBy:["contentType:asc"]}),u({container:e})(),r({container:"#algolia-pagination",scrollTo:e})]),n.start()}function v(e="#content-hub-grid-layout"){const{pathname:t}=window.location;if(!t.startsWith("/content-hub"))return!1;const n=(0,a.search)(a.LATEST_RESULT_INDEX);n.addWidgets([s({hitsPerPage:4}),p({container:e})()]),n.start()}function y(e=".content-hub-hero-grid"){const{pathname:t}=window.location;if(!t.startsWith("/content/"))return!1;console.log("[+] initContentItem"),document.getElementsByClassName("content-hub-hero-grid")[0].innerHTML="";const n=(0,a.search)(),i={articleLink:t};n.addWidgets([s({hitsPerPage:1}),instantsearch.widgets.index({indexName:a.INDEX}).addWidgets([instantsearch.widgets.EXPERIMENTAL_configureRelatedItems({hit:i,matchingPatterns:{domain:{score:2},businessFunction:{score:2},authorName:{score:3}}}),s({hitsPerPage:4}),p({container:e})()])]),n.start()}function x(e){var t=$(e);if(t.length)return $("html,body").animate({scrollTop:t.offset().top},1e3),!1}function w(){const e=document.querySelectorAll(".series-card-grid .w-dyn-item");for(var t=0;t<e.length;t++){const n=e[t],a=$(n).find(".filter-trigger-helper div").text();n.addEventListener("click",(()=>{$(`[data-value='${a}']`)[0].click(),x("#podcast-library")}))}}function T(e){a.search.helper.once("result",w),e.search()}function k(e){const{pathname:t}=window.location;if(!t.startsWith("/podcast"))return!1;const n=(0,a.search)(a.INDEX,T);n.addWidgets([o({container:"#podcast-search",placeholder:"Search podcasts"}),s({hitsPerPage:10,filters:"contentType:Podcast"}),c({container:"#checkbox-filter-domain",attribute:"domain",sortBy:["domain:asc"]}),c({container:"#checkbox-filter-business",attribute:"businessFunction",sortBy:["businessFunction:asc"]}),u({container:e})(),r({container:"#algolia-pagination",scrollTo:e}),b({container:document.querySelector("#podcast-series-tabs"),attribute:"seriesName",sortBy:["name:desc"]})]),n.start(),w()}function I(e=".grid-guest"){const{pathname:t}=window.location;if(!t.startsWith("/people"))return!1;document.querySelector(e).innerHTML="";const n=(0,a.search)(a.GUEST_INDEX);n.addWidgets([s({hitsPerPage:12}),h({container:e,nextButtonSelector:"#algolia-show-more"})()]),n.start()}function E(e){const{CompanyName:t,CompanyLogo:n,Department:a,JobTitle:o,JobDescription:s,Location:c,ApplyUrl:r}=e,l=JSON.parse(c)[0].Address;return i.jobCardTemplate.replace(/{{companyLogo}}/g,n).replace(/{{jobTitle}}/g,o).replace(/{{companyName}}/g,t).replace(/{{description}}/g,s).replace(/{{location}}/g,l).replace(/{{applyLink}}/g,r)}function L(e="#job-hits"){const{pathname:t}=window.location;if(!t.startsWith("/smartconnect"))return!1;console.log("[+] INIT SMARTCONNECT");const n=(0,a.search)(a.JOBS_INDEX);n.addWidgets([o({container:"#algolia-jobs-search",placeholder:"Search jobs",cssClasses:{input:"list-search-field w-input"}}),s({hitsPerPage:9}),c({container:"#checkbox-filter-company",attribute:"CompanyName",sortBy:["CompanyName:asc"],limit:5,showMore:!0}),c({container:"#checkbox-filter-department",attribute:"Department",sortBy:["Department:asc"],limit:5,showMore:!0}),c({container:"#checkbox-filter-role",attribute:"AdditionalFields.Value",sortBy:["AdditionalFields.Value:asc"]}),u({container:e},E)(),r({container:"#algolia-pagination",scrollTo:e})]),n.start(),document.querySelectorAll(".filter-group form").forEach((e=>{e.addEventListener("submit",(e=>{e.preventDefault(),e.stopPropagation()}))}))}const S=(0,a.getIndex)(a.INDEX),P=(0,a.getIndex)(a.PEOPLE_INDEX),N=(0,a.getIndex)(a.JOBS_INDEX),C="https://uploads-ssl.webflow.com/600fd2daa260b77b88b8ac84/606cad88ed4007a2e18bacf9_people-search-icon.svg";function _(e,t,n,a,i,o){return{name:n.toLowerCase(),displayKey:a,source:(s=e,c={...t},(e,t)=>s.search(e,c).then((e=>t(e.hits,e))).catch((e=>t([],e)))),templates:{header:function(){return`\n                <div class="content-details-block search-detail-heading"><img\n                        src="${i}"\n                        loading="lazy" alt="" class="content-card-icon">\n                    <div class="content-detail-text capitalize-text search-heading">${n}</div>\n                </div>\n            \n            `},suggestion:o}};var s,c}function z(e){return`\n                    <a href="${e.articleLink}" class="search-result-text">\n                        ${e.title}\n                    </a>\n            \n                    `}function A(e){return`\n    <a href="${e.profileLink}" class="search-result-text">\n        <img src="${e.image}" class="content-profile-image" style="width:32px; height:32px" >\n        ${e.name}\n    </a>\n\n`}function D(e){return`\n    <a href="${e.ApplyUrl}" tareget="_blank" class="search-result-text">\n        ${e.JobTitle} - ${e.CompanyName}\n    </a>\n\n`}function j(e){return{hitsPerPage:3,filters:`contentType:${e}`}}function O(e="#global-search"){const t={hitsPerPage:3};autocomplete(e,{templates:{}},[_(S,j("Blog"),"Blogs","title","https://assets.website-files.com/60116b861ab2dd465de2dfa3/6017c2bbe97688960d22e80c_blog-icon.svg",z),_(S,j("Podcast"),"Podcasts","title","https://assets.website-files.com/60116b861ab2dd465de2dfa3/6017c830710fdfadb56ed42a_podcast-icon.svg",z),_(S,j("Video"),"Videos","title","https://assets.website-files.com/60116b861ab2dd465de2dfa3/6017c821556ad8dffaebf159_video-icon.svg",z),_(P,t,"People","name",C,A),_(N,t,"Jobs","Job.Title",C,D)]).on("autocomplete:selected",(function(e,t){const{profileLink:n,articleLink:a,ApplyUrl:i}=t;location.href=n||a||i})),function(e){const t=document.createElement("style");t.textContent="\n.aa-dropdown-menu {\n  width: 400px;\n  max-width: 400px;\n  padding-right: 24px;\n  padding-bottom: 12px;\n  padding-left: 24px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.06);\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 12px 16px 0 rgb(0 0 0 / 5%);\n  color: #200051;\n  right: 0 !important;\n  left: unset !important;\n}\n\n.aa-dropdown-menu >div {\n  margin-top: 24px;\n}\n.aa-cursor {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 767px) {\n  .aa-dropdown-menu {\n    left: 0 !important;;\n  }\n}\n\n",document.head.append(t)}()}(0,a.getIndex)(a.AUTHOR_INDEX);const R=(0,a.getIndex)(a.PEOPLE_INDEX);function B(e){return{url:"#%QUERY",prepare:function(e,t){return t&&(t.query=e),t},cache:!1,transport:function(t,n,a){let i="";t&&t.query&&(i=t.query),e.search(i).then((function(e,t,a){console.log("result.hits",e.hits),n(e.hits)})).catch((function(e,t,n){a(n)}))}}}function M(e){const t={...B(e)};return new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,matchAnyQueryToken:!0,sufficient:5,remote:t,prefetch:t,identify:function(e){return e.objectID}})}function q(e="#search"){document.querySelector(e)&&(console.log("[+] ACTIVATE PEOPLE SEARCH"),function(e){var t,n,a;!function(e,t){$(e).typeahead({hint:!0,highlight:!0,limit:10},{...t[0]}),$(".twitter-typeahead").on("keyup",(function(e){if("Enter"==e.key)try{document.querySelector(".tt-suggestion").click()}catch(e){console.log(e)}}))}(e,[(t=M(R),n="People",a="name",{name:n.toLowerCase(),display:a,source:t,templates:{suggestion:function(e){return console.log("templates => suggestion",e),`\n                    <a href="${e.profileLink}" class="search-result-text">\n                        <img src="${e.image}" class="content-profile-image" style="width:32px; height:32px" >\n                        ${e.name}\n                    </a>\n\n        `}}})])}(e),function(e){const t=document.createElement("style");t.textContent="\n.tt-menu {\n  width: 400px;\n  max-width: 400px;\n  padding-right: 24px;\n  padding-bottom: 12px;\n  padding-left: 24px;\n  border-style: solid;\n  border-width: 1px;\n  border-color: rgba(0, 0, 0, 0.06);\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 12px 16px 0 rgb(0 0 0 / 5%);\n  color: #200051;\n  right: unset !important;\n  left: 0 !important;\n}\n\n.tt-dataset {\n  margin-top: 24px;\n}\n.tt-cursor {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 767px) {\n  .tt-menu {\n    left: 0 !important;;\n  }\n}\n\n",document.head.append(t)}())}function U(e,t,n,a){try{e(t,n,a)}catch(e){console.log(e)}}document.addEventListener("DOMContentLoaded",(function(e){window.epycLoaded||(console.log("[+] STARTING LIBRARY"),U(f,"#hits"),U(v,"#content-hub-grid-layout"),U(y,".content-hub-hero-grid"),U(I),U(k,"#podcast-hits"),U(O,"#global-search"),U(q,"#search"),U(L),window.hasOwnProperty("epycLoaded")&&(window.epycLoaded=!0))}))},286:(e,t,n)=>{const a=n(174),i=n(122),o=n(997),s=n(598),c=n(416),r=n(42),l=n(98),d=n(539),p=n(200);e.exports={card:a,checkbox:i,contentGridItem:o,contentListItem:s,emptyScreenTemplate:c,jobCardTemplate:r,peopleCardTemplate:l,podcastRadio:d,tagTemplate:p}},174:e=>{e.exports='<a href="{{articleLink}}" class="content-list-card w-inline-block"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="content-list-card-grid"> <div> <div class="body-medium card-title">{{title}}</div> <div class="content-details-block"> <div class="content-profile-container"><img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </div> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">4&nbsp;Min&nbsp;Read</div> </div> <div class="tag-container"><img src="https://assets.website-files.com/600fd2daa260b77b88b8ac84/60102d6f84a92a1b9ad3f849_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> <div class="tag">heathtech</div> <div class="tag">future</div> </div> </div> <div class="content-list-image-container medium-block"><img src="{{featuredImage}}" loading="lazy" alt="" class="content-list-image"> <div class="podcast-indicator big"></div> </div> </div> </a>'},122:e=>{e.exports='<a url="{{url}}" class="w-checkbox filter-row" for="{{id}}"> <div class="w-checkbox-input w-checkbox-input--inputType-custom filter-checkbox {{isChecked}}"> </div> <input type="checkbox" id="{{id}}" name="{{id}}" data-name="name-{{id}}" style="opacity:0;position:absolute;z-index:-1" value="&nbsp; {{label}}\n        {{checkedAttr}}\n        \n        "> <span class="body-small w-form-label">{{label}}</span> <div class="filter-number">{{count}}</div> </a> '},997:e=>{e.exports='<div style="-ms-grid-row:span 3;grid-row-start:span 3;-ms-grid-row-span:3;grid-row-end:span 3;-ms-grid-column:span 1;grid-column-start:span 1;-ms-grid-column-span:1;grid-column-end:span 1"> <a href="{{articleLink}}" class="content-card content-hero w-inline-block"> <div id="w-node-_1785fe08-19cf-0ec6-9450-af7734443a0f-a6b021a3" class="card-featured-image-container big"><img src="{{featuredImage}}" loading="lazy" id="w-node-_8c675ec5-039f-e30a-8cf8-b4bb7a5ef059-a6b021a3" alt="" class="card-featured-image"></div> <div class="card-content-container"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="body-large card-title">{{title}} </div> <div class="content-details-block"> <div class="content-profile-container"><img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </div> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">{{readTime}} Read</div> </div> <div class="tag-container"><img src="https://assets.website-files.com/6034c74e10dad642c6b0219d/6034c74e10dad6925bb021e6_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> {{tags}} </div> </div> </a> </div>'},598:e=>{e.exports='<a href="{{articleLink}}" class="content-list-card w-block"> <div class="content-details-block"><img src="{{contentTypeIcon}}" loading="lazy" alt="" class="content-card-icon"> <div class="content-detail-text capitalize-text">{{contentType}}</div> </div> <div class="content-list-card-grid"> <div> <div class="{{titleClass}} card-title">{{title}}</div> <div class="content-details-block"> <div class="content-profile-container"><img src="{{authorImage}}" loading="lazy" alt="" class="content-profile-image"> <div class="content-detail-text">{{authorName}}</div> </div> <div class="separator-dot"></div> <div class="content-detail-text capitalize-text">{{readTime}} Read</div> </div> <div class="tag-container"> <img src="https://assets.website-files.com/600fd2daa260b77b88b8ac84/60102d6f84a92a1b9ad3f849_tag-icon.svg" loading="lazy" alt="" class="tag-icon"> {{tags}} </div> </div> <div class="content-list-image-container {{imageClass}}"><img src="{{featuredImage}}" loading="lazy" alt="" class="content-list-image"> <div class="podcast-indicator big" style="display:podcastShow"></div> <div class="video-indicator-play big" style="display:videoShow"></div> </div> </div> </a>'},416:e=>{e.exports='<div id="empty-state" class="styleguide-section"> <div class="styleguide-component"> <div class="empty-state"><img src="https://assets.website-files.com/600fd2daa260b77b88b8ac84/603ca7a64964824d08be9f19_empty-state-illustration.svg" loading="lazy" alt=""> <div class="empty-state-heading">No result to show</div> <div>We couldn\'t find what you\'re looking for</div> </div> </div> </div>'},42:e=>{e.exports='<div role="listitem" class="w-dyn-item"> <div class="job-card"> <div> <div class="job-card-logo-block"><img src="{{companyLogo}}" loading="lazy" alt="" class="job-card-logo"> </div> <div class="job-title">{{jobTitle}}</div> <p class="body-small">{{description}}</p> <div class="job-tag-container"> <div class="tag">{{location}}</div> </div> </div><a href="{{applyLink}}" target="_blank" class="button secondary-btn w-button">Apply Now</a> </div> </div>'},98:e=>{e.exports='<div role="listitem" class="w-dyn-item"> <a href="{{profileUrl}}" class="w-inline-block"><img src="{{image}}" loading="lazy" alt="" class="people-image"> <div class="body-normal people-name">{{name}}</div> <div class="body-small people-designation">{{designation}}</div> </a> </div>'},539:e=>{e.exports='<label class="podcast-tab-btn-container w-radio" data-value="{{label}}"> <div class="w-form-formradioinput w-form-formradioinput--inputType-custom button secondary-btn podcast-filter-copy w-radio-input {{isSelected}}"> </div> <input type="radio" data-name="Series" id="{{id}}" name="Series" value="{{label}}" required="" style="opacity:0;position:absolute;z-index:-1"> <span for="{{label}}" class="podcast-tab-btn-label w-form-label"> {{label}}</span> </label>'},200:e=>{e.exports='<div class="tag">{{tag}}</div>'}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}return n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(281)})()}));
