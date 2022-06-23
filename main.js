(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-button",errorClass:"popup__form-error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r)}var n,r;return n=e,(r=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._nameElement.textContent=t,this._jobElement.textContent=n}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._section=document.querySelector(n),this._items=t.items,this._renderer=t.renderer}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._section.prepend(e)}},{key:"renderContent",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupClose=this._popup.querySelector(".popup__close"),this._bindedEscCloseHandler=this._handleEscClose.bind(this),this._bindOversideClickHandler=this._handleOversideClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_show"),document.addEventListener("keyup",this._bindedEscCloseHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_show"),document.removeEventListener("keyup",this._bindedEscCloseHandler)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._bindOversideClickHandler),this._popupClose.addEventListener("click",this.close.bind(this))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOversideClick",value:function(e){e.target===e.currentTarget&&this.close()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._submitHandler=t,n}return t=c,(n=[{key:"setEventListeners",value:function(){var e=this;f(m(c.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault();var n=e._getInputValues();e._submitHandler(n),e.close()}))}},{key:"close",value:function(){f(m(c.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){return Array.from(this._form.querySelectorAll(".popup__form-input")).reduce((function(e,t){return a(a({},e),{},s({},t.name,t.value))}),{})}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(c);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function w(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._image=t._popup.querySelector(".popup__figure-img"),t._imageName=t._popup.querySelector(".popup__figure-text"),t}return t=c,(n=[{key:"open",value:function(e,t){this._image.setAttribute("src",e),this._image.setAttribute("alt",t),this._imageName.textContent=t,g(j(c.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(c);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._submit=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners(this._form,this._submit,this._inputs)}},{key:"checkFormValidityBeforeOpen",value:function(){this._hideAllErrorMessages(this._form,this._inputs),this._toggleButtonState(this._submit,this._inputs)}},{key:"_toggleButtonState",value:function(e,t){t.some((function(e){return 1!=e.validity.valid}))?e.setAttribute("disabled",!0):e.removeAttribute("disabled")}},{key:"_checkInputValidity",value:function(e,t){t.validity.valid?this._hideErrorMessage(e,t):this._showErrorMessage(e,t)}},{key:"_showErrorMessage",value:function(e,t){e.querySelector(".".concat(t.id,"-error")).textContent=t.validationMessage}},{key:"_hideErrorMessage",value:function(e,t){e.querySelector(".".concat(t.id,"-error")).textContent=""}},{key:"_hideAllErrorMessages",value:function(e,t){var n=this;t.forEach((function(t){n._hideErrorMessage(e,t)}))}},{key:"_setEventListeners",value:function(e,t,n){var r=this;n.forEach((function(o){o.addEventListener("input",(function(){r._checkInputValidity(e,o),r._toggleButtonState(t,n)}))}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=n.name,this._link=n.link,this._popupOpenHandler=r,this._templateSelector=t,this._element=document.querySelector(this._templateSelector).content.cloneNode(!0),this._elementTitle=this._element.querySelector(".element__title"),this._elementImage=this._element.querySelector(".element__image"),this._buttonDeleteCard=this._element.querySelector(".element__trash"),this._like=this._element.querySelector(".element__like")}var t,n;return t=e,(n=[{key:"_handleShowImg",value:function(e,t){this._popupOpenHandler(e,t)}},{key:"_handleElementLikeActive",value:function(e){e.target.classList.toggle("element__like_active")}},{key:"_handleElementRemove",value:function(e){e.target.closest(".element").remove()}},{key:"getElement",value:function(){var e=this;return this._elementTitle.textContent=this._text,this._elementImage.setAttribute("src",this._link),this._elementImage.setAttribute("alt","Фотография места с названием '".concat(this._text,"'.")),this._elementImage.addEventListener("click",(function(){return e._handleShowImg(e._link,e._text)})),this._buttonDeleteCard.addEventListener("click",this._handleElementRemove),this._like.addEventListener("click",this._handleElementLikeActive),this._element}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=document.querySelector(".cards"),x=document.querySelector(".popup_profile"),R=document.querySelector(".profile__edit"),I=x.querySelector(".popup__form"),A=x.querySelector(".popup__form-input[name=name]"),T=x.querySelector(".popup__form-input[name=job]"),B=document.querySelector(".popup_card"),D=document.querySelector(".profile__button"),V=new P(e,B.querySelector(".popup__form")),H=new P(e,I),M=new n({nameSelector:".profile__name",jobSelector:".profile__job"}),U=new o({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=G(e);L.append(t.getElement())}},".cards"),F=new _(".popup_profile",(function(e){M.setUserInfo(e)})),N=new _(".popup_card",(function(e){var t=G({name:e.title,link:e.link});U.addItem(t.getElement())})),z=new E(".popup_image");function G(e){return new q(".template",e,J)}function J(e,t){z.open(e,t)}F.setEventListeners(),N.setEventListeners(),z.setEventListeners(),D.addEventListener("click",(function(){V.checkFormValidityBeforeOpen(),N.open()})),R.addEventListener("click",(function(){var e=M.getUserInfo(),t=e.name,n=e.job;A.value=t,T.value=n,H.checkFormValidityBeforeOpen(),F.open()})),U.renderContent(),V.enableValidation(),H.enableValidation()})();