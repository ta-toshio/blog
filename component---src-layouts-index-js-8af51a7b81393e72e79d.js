webpackJsonp([0x67ef26645b2a,60335399758886],{288:function(e,t){e.exports={layoutContext:{}}},382:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(4),s=r(o),a=n(385),u=r(a),l=n(288),p=r(l);t.default=function(e){return s.default.createElement(u.default,i({},e,p.default))},e.exports=t.default},473:function(e,t){function n(e){var t=e.target||e.srcElement;t.__resizeRAF__&&i(t.__resizeRAF__),t.__resizeRAF__=r(function(){var n=t.__resizeTrigger__;n.__resizeListeners__.forEach(function(t){t.call(n,e)})})}var r=function(){var e=this,t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){return e.setTimeout(t,20)};return function(e){return t(e)}}(),i=function(){var e=this,t=e.cancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelAnimationFrame||e.clearTimeout;return function(e){return t(e)}}(),t=function(e,t){function r(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",n)}var i,o=this,s=o.document,a=s.attachEvent;if("undefined"!=typeof navigator&&(i=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!e.__resizeListeners__)if(e.__resizeListeners__=[],a)e.__resizeTrigger__=e,e.attachEvent("onresize",n);else{"static"===getComputedStyle(e).position&&(e.style.position="relative");var u=e.__resizeTrigger__=s.createElement("object");u.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),u.setAttribute("class","resize-sensor"),u.__resizeElement__=e,u.onload=r,u.type="text/html",i&&e.appendChild(u),u.data="about:blank",i||e.appendChild(u)}e.__resizeListeners__.push(t)};e.exports="undefined"==typeof window?t:t.bind(window),e.exports.unbind=function(e,t){var r=document.attachEvent;t?e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1):e.__resizeListeners__=[],e.__resizeListeners__.length||(r?e.detachEvent("onresize",n):(e.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",n),delete e.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,e.__resizeTrigger__=!e.removeChild(e.__resizeTrigger__)),delete e.__resizeListeners__)}},553:function(e,t,n){for(var r=n(554),i="undefined"==typeof window?{}:window,o=["moz","webkit"],s="AnimationFrame",a=i["request"+s],u=i["cancel"+s]||i["cancelRequest"+s],l=!0,p=0;p<o.length&&!a;p++)a=i[o[p]+"Request"+s],u=i[o[p]+"Cancel"+s]||i[o[p]+"CancelRequest"+s];if(!a||!u){l=!1;var c=0,d=0,h=[],f=1e3/60;a=function(e){if(0===h.length){var t=r(),n=Math.max(0,f-(t-c));c=n+t,setTimeout(function(){var e=h.slice(0);h.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return h.push({handle:++d,callback:e,cancelled:!1}),d},u=function(e){for(var t=0;t<h.length;t++)h[t].handle===e&&(h[t].cancelled=!0)}}e.exports=function(e){return l?a.call(i,function(){try{e.apply(this,arguments)}catch(e){setTimeout(function(){throw e},0)}}):a.call(i,e)},e.exports.cancel=function(){u.apply(i,arguments)}},554:function(e,t,n){(function(t){(function(){var n,r,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},i=n()):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(t,n(243))},555:function(e,t,n){var r=n(289),i=n(473);e.exports={getInitialState:function(){return void 0!==this.props.initialComponentWidth&&null!==this.props.initialComponentWidth?{componentWidth:this.props.initialComponentWidth}:{}},componentDidMount:function(){this.setState({componentWidth:r.findDOMNode(this).getBoundingClientRect().width}),i(r.findDOMNode(this),this.onResize)},componentDidUpdate:function(){0===r.findDOMNode(this).getElementsByClassName("resize-sensor").length&&i(r.findDOMNode(this),this.onResize)},onResize:function(){this.setState({componentWidth:r.findDOMNode(this).getBoundingClientRect().width})}}},619:function(e,t,n){var r;r=n(620),e.exports={getInitialState:function(){return this.props.initialPageWidth?{pageWidth:this.props.initialPageWidth}:{}},componentDidMount:function(){return r.on(this.onResize)},componentWillUnmount:function(){return r.off(this.onResize)},onResize:function(e){return this.setState({pageWidth:e})}}},620:function(e,t,n){var r,i,o,s,a,u;o=n(553),r=void 0,s=[],a=!1,"undefined"!=typeof window&&null!==window&&(r=window.innerWidth),i=function(){if(!a)return a=!0,o(u)},u=function(){var e,t,n;for(r=window.innerWidth,e=0,t=s.length;e<t;e++)(n=s[e])(r);return a=!1},"undefined"!=typeof window&&null!==window&&window.addEventListener("resize",i),e.exports={on:function(e){return e(r),s.push(e)},off:function(e){return s.splice(s.indexOf(e),1)}}},621:function(e,t,n){var r,i,o,s,a,u;s=n(4),a=n(555),o=n(619),u=n(3),r=s.createClass({displayName:"Breakpoint",mixins:[a],propTypes:{minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return s.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?s.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=u({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.componentWidth&&this.props.minWidth<=(t=this.state.componentWidth)&&t<this.props.maxWidth?s.createElement("div",Object.assign({},e),this.renderChildren()):s.createElement("div",null)}}),i=s.createClass({displayName:"Breakpoint",mixins:[o],propTypes:{minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return s.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=(n=t.type)?n.displayName:void 0)?s.cloneElement(t,{context:e.props.context}):t}}(this))},render:function(){var e,t;return e=u({},this.props),delete e.maxWidth,delete e.minWidth,delete e.widthMethod,this.state.pageWidth&&this.props.minWidth<=(t=this.state.pageWidth)&&t<this.props.maxWidth?s.createElement("div",Object.assign({},e),this.renderChildren()):s.createElement("div",null)}}),e.exports=s.createClass({displayName:"Breakpoint",propTypes:{widthMethod:s.PropTypes.string.isRequired,minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{widthMethod:"pageWidth"}},render:function(){return"pageWidth"===this.props.widthMethod?s.createElement(i,Object.assign({},this.props)):"componentWidth"===this.props.widthMethod?s.createElement(r,Object.assign({},this.props)):void 0}})},622:function(e,t,n){var r,i;r=n(4),i=n(3),e.exports=r.createClass({displayName:"Container",render:function(){var e,t,n,o;return t={maxWidth:"960px",marginLeft:"auto",marginRight:"auto"},o=i(t,this.props.style),e=this.props.children,n=i({},this.props),delete n.children,delete n.style,r.createElement("div",Object.assign({},n,{style:o}),e,r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},623:function(e,t,n){var r,i;r=n(4),i=n(3),e.exports=r.createClass({displayName:"Grid",propTypes:{columns:r.PropTypes.number,gutterRatio:r.PropTypes.number},getDefaultProps:function(){return{columns:12,gutterRatio:.25}},renderChildren:function(){return r.Children.map(this.props.children,function(e){return function(t){var n,i;return"Breakpoint"===(n=null!=(i=t.type)?i.displayName:void 0)||"Span"===n?r.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.gutterRatio}}):t}}(this))},render:function(){var e;return e=i({},this.props),delete e.gutterRatio,delete e.columns,r.createElement("div",Object.assign({},e),this.renderChildren(),r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},624:function(e,t,n){var r,i,o;r=n(4),i=n(3),o=n(626),e.exports=r.createClass({displayName:"Span",propTypes:{context:r.PropTypes.object,columns:r.PropTypes.number,at:r.PropTypes.number,pre:r.PropTypes.number,post:r.PropTypes.number,squish:r.PropTypes.number,last:r.PropTypes.bool,break:r.PropTypes.bool},getDefaultProps:function(){return{at:0,pre:0,post:0,squish:0,last:!1,first:!1,break:!1}},renderChildren:function(){return r.Children.map(this.props.children,function(e){return function(t){var n;return"Span"===(null!=t&&null!=(n=t.type)?n.displayName:void 0)?r.cloneElement(t,{context:{columns:e.props.columns,gutterRatio:e.props.context.gutterRatio}}):t}}(this))},render:function(){var e,t;return t=o({contextColumns:this.props.context.columns,gutterRatio:this.props.context.gutterRatio,columns:this.props.columns,at:this.props.at,pre:this.props.pre,post:this.props.post,squish:this.props.squish,last:this.props.last,break:this.props.break}),t=i(t,this.props.style),e=i({},this.props,{style:t}),delete e.at,delete e.break,delete e.columns,delete e.context,delete e.first,delete e.last,delete e.post,delete e.pre,delete e.squish,delete e.style,r.createElement("div",Object.assign({},e,{style:t}),this.renderChildren(),r.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},625:function(e,t,n){t.Container=n(622),t.Grid=n(623),t.Breakpoint=n(621),t.Span=n(624)},626:function(e,t,n){var r;r=n(3),e.exports=function(e){var t,n,i,o,s,a,u,l,p,c;return i={columns:3,at:0,pre:0,post:0,squish:0,contextColumns:12,gutterRatio:.25,first:!1,last:!1},p=r(i,e),l=100/(p.contextColumns+(p.contextColumns-1)*p.gutterRatio),s=p.gutterRatio*l,n=function(e){return l*e+s*(e-1)},t=function(e){return 0===e?0:n(e)+s},c=n(p.columns),a=0===p.at&&0===p.pre&&0===p.squish?0:t(p.at)+t(p.pre)+t(p.squish),p.last&&0===p.post&&0===p.squish?u=0:0!==p.post||0!==p.squish?(u=t(p.post)+t(p.squish),p.last||(u+=s)):u=s,o=p.last?"right":"left",c+="%",a+="%",u+="%",{float:o,marginLeft:a,marginRight:u,width:c,clear:p.break?"both":"none"}}},385:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(4),l=r(u),p=n(283),c=r(p),d=n(625),h=n(51),f=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.children,r=void 0,i="/";return i="/blog/",r=t.pathname===i?l.default.createElement("h1",{style:a({},(0,h.scale)(1.5),{marginBottom:(0,h.rhythm)(1.5),marginTop:0})},l.default.createElement(c.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Toshio Blog")):l.default.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:(0,h.rhythm)(-1)}},l.default.createElement(c.default,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Toshio Blog")),l.default.createElement(d.Container,{style:{maxWidth:(0,h.rhythm)(24),padding:(0,h.rhythm)(1.5)+" "+(0,h.rhythm)(.75)}},r,n())},t}(l.default.Component);t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-8af51a7b81393e72e79d.js.map