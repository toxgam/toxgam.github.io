(this["webpackJsonphappy-author"]=this["webpackJsonphappy-author"]||[]).push([[36],{3456:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return S}));var i=o(8),r=o.n(i),n=o(9),a=o.n(n),s=o(3),c=o.n(s),u=o(11),h=o.n(u),p=o(12),l=o.n(p),m=o(5),d=o.n(m),f=o(1),j=o.n(f),v=o(25),y=o.n(v),k=o(0),E=o.n(k),P=o(130),I=o(121),W=o(590),b=o(599);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,i=d()(e);if(t){var r=d()(this).constructor;o=Reflect.construct(i,arguments,r)}else o=i.apply(this,arguments);return l()(this,o)}}var S=function(e){h()(o,e);var t=R(o);function o(e){var i;return r()(this,o),i=t.call(this,e),j()(c()(i),"ready",!1),i.state={emoji:void 0,loaded:!1},i}return a()(o,[{key:"getChildContext",value:function(){return{emoji:{emojiProvider:this.props.emojiProvider}}}},{key:"refreshEmoji",value:function(e,t){var o=this,i=e.findByEmojiId(t);Object(I.n)(i)?(this.setState({loaded:!1}),i.then((function(e){o.ready&&o.setState({emoji:e,loaded:!0})}))):this.setState({emoji:i,loaded:!0})}},{key:"UNSAFE_componentWillMount",value:function(){this.ready=!0,this.state.emoji||this.refreshEmoji(this.props.emojiProvider,this.props.emojiId)}},{key:"componentWillUnmount",value:function(){this.ready=!1}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.emojiProvider===this.props.emojiProvider&&e.emojiId===this.props.emojiId||this.refreshEmoji(e.emojiProvider,e.emojiId)}},{key:"render",value:function(){var e=this.props,t=e.emojiId,o=e.fitToHeight,i=void 0===o?P.f:o,r=e.showTooltip,n=this.state,a=n.emoji,s=n.loaded,c=t.shortName,u=t.fallback;return a?this.emojiWrapper(E.a.createElement(W.a,{emoji:a,showTooltip:r,fitToHeight:i})):s?this.emojiWrapper(E.a.createElement("span",null,u||c)):this.emojiWrapper(E.a.createElement(b.a,{shortName:c,showTooltip:r,size:i||P.f}))}},{key:"emojiWrapper",value:function(e){var t=this.props.emojiId,o=t.shortName,i=t.id,r=t.fallback;return E.a.createElement("span",{"data-emoji-id":i,"data-emoji-short-name":o,"data-emoji-text":r||o},e)}}]),o}(k.Component);j()(S,"childContextTypes",{emoji:y.a.object})}}]);