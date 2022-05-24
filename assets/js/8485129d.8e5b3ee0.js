"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12453],{79874:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return l}});var n=r(93106);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=d(r),l=a,f=g["".concat(u,".").concat(l)]||g[l]||s[l]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function l(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59555:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});r(93106);var n=r(79874);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},c=void 0,u={unversionedId:"apis/media/background-audio/getBackgroundAudioManager",id:"apis/media/background-audio/getBackgroundAudioManager",title:"Taro.getBackgroundAudioManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002",source:"@site/docs/apis/media/background-audio/getBackgroundAudioManager.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/getBackgroundAudioManager",permalink:"/taro-docs/docs/next/apis/media/background-audio/getBackgroundAudioManager",editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/media/background-audio/getBackgroundAudioManager.md",tags:[],version:"current",frontMatter:{title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},sidebar:"API",previous:{title:"getBackgroundAudioPlayerState",permalink:"/taro-docs/docs/next/apis/media/background-audio/getBackgroundAudioPlayerState"},next:{title:"BackgroundAudioManager",permalink:"/taro-docs/docs/next/apis/media/background-audio/BackgroundAudioManager"}},d={},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2}],s={toc:p};function g(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u83b7\u53d6",(0,n.kt)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002\n\u5c0f\u7a0b\u5e8f\u5207\u5165\u540e\u53f0\uff0c\u5982\u679c\u97f3\u9891\u5904\u4e8e\u64ad\u653e\u72b6\u6001\uff0c\u53ef\u4ee5\u7ee7\u7eed\u64ad\u653e\u3002\u4f46\u662f\u540e\u53f0\u72b6\u6001\u4e0d\u80fd\u901a\u8fc7\u8c03\u7528API\u64cd\u7eb5\u97f3\u9891\u7684\u64ad\u653e\u72b6\u6001\u3002"),(0,n.kt)("p",null,"\u4ece\u5fae\u4fe1\u5ba2\u6237\u7aef6.7.2\u7248\u672c\u5f00\u59cb\uff0c\u82e5\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u540e\u7ee7\u7eed\u64ad\u653e\u97f3\u9891\uff0c\u9700\u8981\u5728 ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"}),"app.json")," \u4e2d\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"requiredBackgroundModes")," \u5c5e\u6027\u3002\u5f00\u53d1\u7248\u548c\u4f53\u9a8c\u7248\u4e0a\u53ef\u4ee5\u76f4\u63a5\u751f\u6548\uff0c\u6b63\u5f0f\u7248\u8fd8\u9700\u901a\u8fc7\u5ba1\u6838\u3002"),(0,n.kt)("p",null,"\u652f\u6301\u60c5\u51b5\uff1a",(0,n.kt)("img",{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f",src:r(98548).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f",src:r(89598).Z,className:"icon_platform",width:"25px"})," ",(0,n.kt)("img",{title:"H5",src:r(30304).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"React Native",src:r(38309).Z,className:"icon_platform icon_platform--not-support",width:"25px"})," ",(0,n.kt)("img",{title:"Harmony",src:r(69768).Z,className:"icon_platform icon_platform--not-support",width:"25px"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"}),"\u53c2\u8003\u6587\u6863"))),(0,n.kt)("h2",a({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"() => BackgroundAudioManager\n")),(0,n.kt)("h2",a({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.epname = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.singer = '\u8bb8\u5dcd'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // \u8bbe\u7f6e\u4e86 src \u4e4b\u540e\u4f1a\u81ea\u52a8\u64ad\u653e\n")))}g.isMDXComponent=!0},30304:function(e,t,r){t.Z=r.p+"assets/images/h5-81f73c447874b6528e84ee395bece16e.png"},69768:function(e,t,r){t.Z=r.p+"assets/images/harmony-736bf88652a8ed1b8d792107239a9004.png"},38309:function(e,t,r){t.Z=r.p+"assets/images/rn-ecec68ba194e4b5e9fc3e853cc00c569.png"},89598:function(e,t,r){t.Z=r.p+"assets/images/tt-f4ec120e570f924e7ef763dcaf7fc69d.png"},98548:function(e,t,r){t.Z=r.p+"assets/images/weapp-0e8fbe2d5eb3676de4961b54ee7f5ba4.png"}}]);