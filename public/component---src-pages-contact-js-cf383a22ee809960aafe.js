webpackJsonp([70144966829960],{31:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof v&&"undefined"!=typeof window&&window.IntersectionObserver&&(v=new window.IntersectionObserver(function(e){e.forEach(function(e){E.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(v.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),v}t.__esModule=!0;var i=a(24),l=n(i),r=a(28),s=n(r),c=a(27),d=n(c),u=a(51),A=n(u),g=a(50),p=n(g),f=a(2),I=n(f),m=a(6),h=n(m),b=function(e){var t=(0,p.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},C={},y=function(e){var t=b(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!C[a]||(C[a]=!0,!1)},v=void 0,E=[],w=function(e,t){o().observe(e),E.push([e,t])},Q=null,B=function(){if(null!==Q)return Q;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return Q=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.src?'src="'+e.src+'" ':'src=""',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",o=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt=""',l=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+r+t+a+i+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},M=function(e){var t=e.style,a=e.onLoad,n=(0,A.default)(e,["style","onLoad"]);return I.default.createElement("img",(0,p.default)({},n,{onLoad:a,style:(0,p.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};M.propTypes={style:h.default.object,onLoad:h.default.func};var z=function(e){function t(a){(0,l.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),o=!0,i=!0,r=!1,c=y(a);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,i=!1,r=!0),"undefined"==typeof window&&(o=!1,i=!1),n.state={isVisible:o,imgLoaded:i,IOSupported:r},n.handleRef=n.handleRef.bind(n),n}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&w(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=b(this.props),a=t.title,n=t.alt,o=t.className,i=t.outerWrapperClassName,l=t.style,r=void 0===l?{}:l,s=t.imgStyle,c=void 0===s?{}:s,d=t.sizes,u=t.resolutions,A=t.backgroundColor,g=t.Tag,f=void 0;f="boolean"==typeof A?"lightgray":A;var m=(0,p.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c),h=(0,p.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(d){var C=d;return C.srcWebp&&C.srcSetWebp&&B()&&(C.src=C.srcWebp,C.srcSet=C.srcSetWebp),I.default.createElement(g,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},I.default.createElement(g,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,p.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},I.default.createElement(g,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),C.base64&&I.default.createElement(M,{alt:n,title:a,src:C.base64,style:m}),C.tracedSVG&&I.default.createElement(M,{alt:n,title:a,src:C.tracedSVG,style:m}),f&&I.default.createElement(g,{title:a,style:{backgroundColor:f,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&I.default.createElement(M,{alt:n,title:a,srcSet:C.srcSet,src:C.src,sizes:C.sizes,style:h,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),I.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,p.default)({alt:n,title:a},C))}})))}if(u){var y=u,v=(0,p.default)({position:"relative",overflow:"hidden",display:"inline-block",width:y.width,height:y.height},r);return"inherit"===r.display&&delete v.display,y.srcWebp&&y.srcSetWebp&&B()&&(y.src=y.srcWebp,y.srcSet=y.srcSetWebp),I.default.createElement(g,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},I.default.createElement(g,{className:(o?o:"")+" gatsby-image-wrapper",style:v,ref:this.handleRef},y.base64&&I.default.createElement(M,{alt:n,title:a,src:y.base64,style:m}),y.tracedSVG&&I.default.createElement(M,{alt:n,title:a,src:y.tracedSVG,style:m}),f&&I.default.createElement(g,{title:a,style:{backgroundColor:f,width:y.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:y.height}}),this.state.isVisible&&I.default.createElement(M,{alt:n,title:a,width:y.width,height:y.height,srcSet:y.srcSet,src:y.src,style:h,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),I.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,p.default)({alt:n,title:a,width:y.width,height:y.height},y))}})))}return null},t}(I.default.Component);z.defaultProps={fadeIn:!0,alt:"",Tag:"div"},z.propTypes={responsiveResolution:h.default.object,responsiveSizes:h.default.object,resolutions:h.default.object,sizes:h.default.object,fadeIn:h.default.bool,title:h.default.string,alt:h.default.string,className:h.default.oneOfType([h.default.string,h.default.object]),outerWrapperClassName:h.default.oneOfType([h.default.string,h.default.object]),style:h.default.object,imgStyle:h.default.object,position:h.default.string,backgroundColor:h.default.oneOfType([h.default.string,h.default.bool]),onLoad:h.default.func,Tag:h.default.string},t.default=z},622:function(e,t){e.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMdaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRGQUUyM0EwMzExQTExRThCMTU4RUM3QjEwNkJENUZFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkRGQUUyMzlGMzExQTExRThCMTU4RUM3QjEwNkJENUZFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMDc3MUQxNDg1MDVEOTNBQzY3RDNCQ0EyOUJCMkU5QjIiIHN0UmVmOmRvY3VtZW50SUQ9IjA3NzFEMTQ4NTA1RDkzQUM2N0QzQkNBMjlCQjJFOUIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQABAMDAwMDBAMDBAYEAwQGBwUEBAUHCAYGBwYGCAoICQkJCQgKCgwMDAwMCgwMDQ0MDBERERERFBQUFBQUFBQUFAEEBQUIBwgPCgoPFA4ODhQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAlgCWAwERAAIRAQMRAf/EAKMAAQADAQEBAQEAAAAAAAAAAAAGBwgFAwEECQEBAAMBAQAAAAAAAAAAAAAAAAIGBwUEEAABAwMDAgMEBgQPAQAAAAABAAIDEQQFEgYHIRMxQQhRIhQVYXGBMkJiUjMkFpGhsXKCssIjc5OzdDVlFxgRAQABAgMEBwYGAwAAAAAAAAABAgMRBAUhQRITMVFhcZHBMvCBobHRIuFSYoI1BpIjFP/aAAwDAQACEQMRAD8A38gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPP4iDX2+6zuVpo1DVX2UqocdOOGO1HijHB6KaTzZcQSO0MlY5/6LXAnp9AUIrpnZEoxVE73oppCAgICAgICAgIOTui6uLHbOavrSQxXVtYXU0EooS2SOFzmuFajoQgov0o8hbz3/AGO55t4ZaTKyWMli20dIyKPtiZkpfTtMZWpaPFBopAQEBBRs4H/rYP8A2TP6oWa1fy/74+Sl1fyH7l5LSl0ZtwuXOB3THlRXtw3MgnA8TE9xa8fwGqyDKZn/AJ81FzdFU492O1nli/yb8V9U7e7evDdG8MdtnGx3r/2ma6H7FAwgdzpXVXrRoB6laTqGp28paiufumr0x1/gumbztGXo4p2zPRHWrF3LG7HyG4jhtm2rT1jET3MH0F+pUyf7Hm5niiKcO6fnirc6zmJnGIjDun5pnhuQJ9x4PJ/K7eOPddnayzWtlMXOgmlYwllC0tdpLqBw8RVWvS9XozkTExw1xu84d7I6hTmYwmMKo9tiJ+n7mvJcuW+biz1la4/L4mSEtgtO5pdbztcKkSOcatexwP2LvOqimW9TWUx3NB4+Zj7E7WjysOInyLzL8U1z9Mcjqh+j3ZXU+74BBNfUBzFfcQ4TE3eItLa9y2UunxNhvNfbbbwRl0j6RuaaguYB180H5N589RcdbA2/mdz2UVxvrPWUd1DgbRzo4mOkYHuc9z9bmRs1BpJqXO6DzoFKf/S3Pr4DuaPbUH7sj3+4MZeGz7f+47nh+atEGgeF+b8Ly7YTxtg+WbmsGtff4xz+40xuNBNC+gLoyehqKtPQ+RIVfkvVfkNt8g7k29uLE2rtvYSe/trZ9oJfjZ5rZ5ZAwl7zG3Wfvu00CDrbC5r3Zypi98W2Z29Hh8Na4K6usfPG24JkL2PZpMsoax9B191oQR30Q/8AGby/xsd/pzoJYPUHnMvzhDxntOwsMjtz4ttrc5T+9dMGwxdy7ewtfoIYQ5rTSnRBZ43FuqK5dB8HbX7u/ewhsDJLYhtsGCNxMkkgILpBq/KDSp6IO581vP3U+d9pnzD5f8Z2KO7fe7Hc00+9TV09qDsoKMvCIOWQ+Y6GjIxEl3QUc1tP5Vmtz7dW2/njyUuucNQ2/mheRIa0ucaNAqSegAC0nHBdGasdh59wZHIW9j78zI7i6haOuvtvrp/pA9PpWP2MrVmbldNHTEVVR24Szq1YqvV1RT04TLyilv8APXeLxc8rn9vt2NtXxZG6Tw+zUoU1XMzXbtzPRhTHZGKNM13qqKJnqpjxaQtMZYWNhHjbeBjbKNnbEOkFpbShqPOvnVa7bsUW6It0x9sbmhUWqaKeCI2KUxbIMbyjHbYc0tGXz4WNYagRuaQ9o+hvUfYs5y9NNrVIi16eOY929TrMRbz2FHRxYfVVG07yDhr1N7jxV2RbYDKR3r216MEE8XzGCn1OYYgtNXZWDtqX2b4r3BzG8O+bDcsbmTdaiKUOfK7/AD54uv5UE/5JzbebeXOOtvWru5YTWOOku2s6hrr5ovLv7WxNDT9SD9+/cfZbo9XGO2/ugB2DjksbeC1k/VPhjs/iI4qeGmSYkEedaINliKJsQgaxohDdAjAAaGgUpTwpTyQYz27Y2W0/WA/EbRDY8XJcTxz20PSKNlzYG4njAHQNZJ1A/DSnkg5WzdtYndPquzePzdu27sLfLZa+NtIA6OSS2e4xh7T0LQ4h1D40QbH3m0N2ZuBrQA0Yy8DQOgAFu9B/N/a9pyA3Zm4czta7u7fbFibWPckdlcPhq2YPETpI2EF7B7wcfw169EGoPR9tzY42/fbnx8jrnewebLKMnDQbOEnVGyFo/BKAHF56kjT00oNOoCAgrXkbYl5l7gZ3Cs7l6Ghl1bA6XSBn3XsJoNQHSip+uaRXfq51rbVvjr7Y7Vd1PTqrs8y3074Q2XI8k31t8jkbfyROHbdGYC17m+FHSaQSPbVyr9V/UrlPJnj/AMdvvnDzcibudrp5c8Xh5rC492ZJte2nyWULRk7hmlzGmrYYW+9pr5knq6itei6XOUpmu566vhHt0u9puRnL0zVX6p+EKmgx2S3Vmr9+IhElw5014I2kR+53KjT4CvvCiotFi5nL1c2o27aureq1NqvMXauCNu2fi7XzHk9kJxRGS0kaKGFxkp4UEumv26l0edqkRy/9nht8cPN7OZnojg+/w80w472Fd4e4+eZtoZfaS21tahxj19HPeRUaiOlPJd7RNGrsVc276t0dXbPa62madVaq5lzp3R1fip31XcWbm3LnsDujaGHucrcvtpLDJMsozI9ghd3IXup5ESPbX6FcFiT7bfFtzF6bncf3lq6HNX+JnnntnCkjcjcF1yxrh+k2TQ37EFV+lvibd2E33d7n3hg7vER46wdFjzexmPXcXTgx2mvjpja4H+cgsL1DcG5Xfc9nvfZEgh3pi2NY+DX2HXMULu5EY5OgbNG4nSSQCOlRQIKyHLXqrjsv3YO17k5fT2RlDiZjdeFNWsH4cn8+mnmgsb09cGZrZuQu+QN/P7u8cg2RsFs6QTvt23DtUsksgJDppD40JDRXqamgRnjjYm88b6m89ujIYG9ttuXFzmHwZSWItt3tnfWMh35vJBpXddvPd7WzlraxumuZ8fdxQxMFXPe+F7WtA9pJogz56Tthbk27ht4Y7e2AuMdBkzZxttshFpbPEIpmSt0mocPeo760ETZxzyNwRy8M3x/hL7cGyLvrLb2bTKTYSu9+2k6/rIT70Tj49Pa5BsKCYXEEU4Y+MSsa8MkaWPaHCtHNPUEeYKD0QEBAQcXd98cdtnKXbf1jbd7I6eOuQaG/xuXO1K7ystcq/TPx2PHnbnBYrq7EB4Zx5DspkntIoIraMkU9r3f2VVv6vZ9dfdHn9HC0K36qu6FsK9LSICAgICAgICAgICAgICAgIPhAIoRUfSgBrW/dAH1JgPqAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//Z"},258:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.HeroImageQuery=void 0;var r=a(2),s=n(r),c=a(77),d=n(c),u=a(31),A=n(u),g=a(622),p=n(g);a(502);var f=function(e){function t(a){return o(this,t),i(this,e.call(this,a))}return l(t,e),t.prototype.loadHireMe=function(e,t){var a,n="https:"==document.location.protocol,o=e.getElementsByTagName(t)[0],a=e.createElement(t);a.src=(n?"https:":"http:")+"//www.peopleperhour.com/hire/1002307300/1213788.js?width=300&height=135&orientation=vertical&theme=light&rnd="+parseInt(1e4*Math.random(),10);try{o.parentNode.insertBefore(a,o)}catch(e){"undefined"!=typeof console&&console.log&&e.stack&&console.log(e.stack)}},t.prototype.componentDidMount=function(){this.loadHireMe(document,"script")},t.prototype.render=function(){return s.default.createElement("div",null,s.default.createElement("div",{className:"background-svg"},s.default.createElement("svg",{version:"1.2",id:"Layer_1",preserveAspectRatio:"none",viewBox:"0 0 1920 1080",xmlns:"http://www.w3.org/2000/svg"},s.default.createElement("polyline",{className:"line1",points:"-0.5,0.5 960,1080.5 -0.5,1080.5 "}),s.default.createElement("polygon",{className:"line2",points:"-0.5,555.5 1920.5,0.5 1920.5,1080.5 -0.5,1080.5 "}),s.default.createElement("polygon",{className:"line3",points:"-0.5,823.5 1920.5,268.5 1920.5,1080.5 -0.5,1080.5 "}))),s.default.createElement("div",{className:"hero-image"},s.default.createElement(A.default,{sizes:this.props.data.hero.sizes})),s.default.createElement("div",{className:"Content-inner"},s.default.createElement("h1",null,"ContactPage"),s.default.createElement("h2",null,"Direct Contact"),s.default.createElement("p",null,"For anything you need or want to ask, send me a message at ",s.default.createElement("strong",null,s.default.createElement("a",{href:"mailto:giannisdallas81@gmail.com"},"giannisdallas81 @ gmail.com"))),s.default.createElement("h2",null,"Hire me online"),s.default.createElement("p",{className:"upwork"},s.default.createElement("a",{href:"https://www.upwork.com/o/profiles/users/_~0168d059ac7bbd584a/"},s.default.createElement("img",{src:p.default})," Find me on Upwork")),s.default.createElement("div",{id:"pph-hireme"}),s.default.createElement("p",null,s.default.createElement(d.default,{className:"primary-button",to:"/"},"Back to Homepage"))))},t}(r.Component);t.default=f;t.HeroImageQuery="** extracted graphql fragment **"},502:function(e,t){}});
//# sourceMappingURL=component---src-pages-contact-js-cf383a22ee809960aafe.js.map