(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__form-button",errorClass:"popup__form-error_visible"};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){var n=t.id,r=t.nameSelector,o=t.jobSelector,i=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._id=n,this._nameElement=document.querySelector(r),this._jobElement=document.querySelector(o),this._avatarElement=document.querySelector(i)}var n,r;return n=e,(r=[{key:"getUserInfo",value:function(){return{id:this._id,name:this._nameElement.textContent,job:this._jobElement.textContent,avatar:this._avatarElement.getAttribute("src")}}},{key:"setUserInfo",value:function(e){var t=e.id,n=e.name,r=e.job;this._id=t,this._nameElement.textContent=n,this._jobElement.textContent=r}},{key:"setAvatar",value:function(e){this._avatarElement.setAttribute("src",e)}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._section=document.querySelector(t),this._renderer=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._section.prepend(e)}},{key:"renderContent",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupClose=this._popup.querySelector(".popup__close"),this._bindedEscCloseHandler=this._handleEscClose.bind(this),this._bindOversideClickHandler=this._handleOversideClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_show"),document.addEventListener("keyup",this._bindedEscCloseHandler)}},{key:"close",value:function(){this._popup.classList.remove("popup_show"),document.removeEventListener("keyup",this._bindedEscCloseHandler)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._bindOversideClickHandler),this._popupClose.addEventListener("click",this.close.bind(this))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOversideClick",value:function(e){e.target===e.currentTarget&&this.close()}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=y(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function y(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__form-input")),n._submitButton=n._form.querySelector("button"),n._originButtonText=n._submitButton.textContent.trim(),n._submitHandler=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;p(d(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitButton.textContent=e._originButtonText+"...";var n=e._getInputValues();e._submitHandler(n)}))}},{key:"setSuccess",value:function(){this._submitButton.textContent=this._originButtonText}},{key:"close",value:function(){this._form.reset(),p(d(u.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){return this._inputs.reduce((function(e,t){return l(l({},e),{},f({},t.name,t.value))}),{})}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__figure-img"),t._imageName=t._popup.querySelector(".popup__figure-text"),t}return t=u,(n=[{key:"open",value:function(e,t){this._image.setAttribute("src",e),this._image.setAttribute("alt",t),this._imageName.textContent=t,w(j(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(u);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputs=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._submit=this._form.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._setEventListeners(this._form,this._submit,this._inputs)}},{key:"checkFormValidityBeforeOpen",value:function(){this._hideAllErrorMessages(this._form,this._inputs),this._toggleButtonState(this._submit,this._inputs)}},{key:"_toggleButtonState",value:function(e,t){t.some((function(e){return 1!=e.validity.valid}))?e.setAttribute("disabled",!0):e.removeAttribute("disabled")}},{key:"_checkInputValidity",value:function(e,t){t.validity.valid?this._hideErrorMessage(e,t):this._showErrorMessage(e,t)}},{key:"_showErrorMessage",value:function(e,t){e.querySelector(".".concat(t.id,"-error")).textContent=t.validationMessage}},{key:"_hideErrorMessage",value:function(e,t){e.querySelector(".".concat(t.id,"-error")).textContent=""}},{key:"_hideAllErrorMessages",value:function(e,t){var n=this;t.forEach((function(t){n._hideErrorMessage(e,t)}))}},{key:"_setEventListeners",value:function(e,t,n){var r=this;n.forEach((function(o){o.addEventListener("input",(function(){r._checkInputValidity(e,o),r._toggleButtonState(t,n)}))}))}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=t,this._likes=n,this._handler=r.bind(this),this._likeElement=t._element.querySelector(".element__like"),this._likeCounterElement=t._element.querySelector(".element__number"),this._likeElement.addEventListener("click",this._likeHendler.bind(this)),this._likeCounterElement.textContent=n.length}var t,n;return t=e,(n=[{key:"setLike",value:function(e){this._likes=e,this.updateLike()}},{key:"isLike",value:function(){return this._isHasMyLike()}},{key:"getCardId",value:function(){return this._card._id}},{key:"updateLike",value:function(){this._isHasMyLike()?this._likeElement.classList.add("element__like_active"):this._likeElement.classList.remove("element__like_active"),this._likeCounterElement.textContent=this._likes.length}},{key:"_likeHendler",value:function(e){this._likeElement.textContent=e.length,this._handler(this)}},{key:"_isHasMyLike",value:function(){var e=this;return this._likes.some((function(t){return t._id==e._card._userInfo._id}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._card=t,this._confirmPopup=this._card._confirmPopup,this._buttonDeleteCard=this._card._element.querySelector(".element__trash"),this._buttonDeleteCard.addEventListener("click",(function(){return n._openPopup()}))}var t,n;return t=e,(n=[{key:"removeDeleteButton",value:function(){this._card._userInfo._id!=this._card._ownerId&&this._buttonDeleteCard.remove()}},{key:"_openPopup",value:function(){this._confirmPopup._form.id.value=this._card._id,this._confirmPopup.open()}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t,n,r,o,i,u){var c=r.ownerId,a=r.cardId,l=r.name,f=r.link,s=r.likes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._text=l,this._link=f,this._id=a,this._ownerId=c,this._userInfo=n,this._popupOpenHandler=o,this._element=document.querySelector(t).content.cloneNode(!0),this._elementTitle=this._element.querySelector(".element__title"),this._elementImage=this._element.querySelector(".element__image"),this._elementLike=this._element.querySelector(".element__number"),this._confirmPopup=u,this._like=new R(this,s,i),this._trash=new T(this)}var t,n;return t=e,(n=[{key:"getElement",value:function(){var e=this;return this._elementTitle.textContent=this._text,this._element.querySelector(".element").setAttribute("id",this._id),this._elementImage.setAttribute("src",this._link),this._elementImage.setAttribute("alt","Фотография места с названием '".concat(this._text,"'.")),this._elementImage.addEventListener("click",(function(){return e._handleShowImg(e._link,e._text)})),this._like.updateLike(),this._trash.removeDeleteButton(),this._element}},{key:"_handleShowImg",value:function(e,t){this._popupOpenHandler(e,t)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._login=r,this._settings={method:t,headers:{authorization:o}}}var t,n;return t=e,(n=[{key:"_makeUrl",value:function(e){return"".concat(this._baseUrl,"/").concat(this._login,"/").concat(e)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"_query",value:function(e){var t=this;return fetch(this._makeUrl(e),this._settings).then((function(e){return t._checkResponse(e)}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},U(e,t)}function H(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&U(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return H(this,e)});function u(e,t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,"GET",e,t,n)}return t=u,(n=[{key:"query",value:function(e,t){return this._query(e,t)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(B);function F(e){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function G(e,t){if(t&&("object"===F(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function u(e,t,n,r){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,e,t,n,r))._settings.headers["Content-Type"]="application/json",o}return t=u,(n=[{key:"query",value:function(e,t){return this._settings.body=JSON.stringify(t),this._query(e)}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(B);function K(e){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(e)}function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}function W(e,t){if(t&&("object"===K(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Q(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=X(n);if(r){var o=X(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return W(this,e)});function i(e,t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"PATCH",e,t,n)}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}($);function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}function ee(e,t){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ee(e,t)}function te(e,t){if(t&&("object"===Z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}var re=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ee(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ne(n);if(r){var o=ne(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return te(this,e)});function i(e,t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,"POST",e,t,n)}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}($);function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ie(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t){return ue=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},ue(e,t)}function ce(e,t){if(t&&("object"===oe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ae(e){return ae=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ae(e)}var le=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ue(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ae(r);if(o){var n=ae(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ce(this,e)});function u(e,t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,"PUT",e,t,n)}return t=u,(n=[{key:"query",value:function(e,t){return this._query(e,t)}}])&&ie(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}($);function fe(e){return fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fe(e)}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function pe(e,t){return pe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},pe(e,t)}function ye(e,t){if(t&&("object"===fe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function he(e){return he=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},he(e)}var be=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&pe(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=he(r);if(o){var n=he(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return ye(this,e)});function u(e,t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,"DELETE",e,t,n)}return t=u,(n=[{key:"query",value:function(e){return this._query(e)}}])&&se(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}($);function de(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _e=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t,this._login=n,this._token=r,this._get=new V(this._baseUrl,this._login,this._token),this._patch=new Y(this._baseUrl,this._login,this._token),this._post=new re(this._baseUrl,this._login,this._token),this._put=new le(this._baseUrl,this._login,this._token),this._delete=new be(this._baseUrl,this._login,this._token)}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return this._get.query("cards")}},{key:"getUserInfo",value:function(){return this._get.query("users/me")}},{key:"updateUserInfo",value:function(e){return this._patch.query("users/me",e)}},{key:"addCard",value:function(e){return this._post.query("cards",e)}},{key:"updateAvatar",value:function(e){return this._patch.query("users/me/avatar",e)}},{key:"setLike",value:function(e){return this._put.query("cards/".concat(e,"/likes"))}},{key:"deleteLike",value:function(e){return this._delete.query("cards/".concat(e,"/likes"))}},{key:"deleteCard",value:function(e){return this._delete.query("cards/".concat(e))}}])&&de(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ve=document.querySelector(".cards"),we=document.querySelector(".popup_profile"),Oe=document.querySelector(".profile__edit"),ge=we.querySelector(".popup__form"),ke=we.querySelector(".popup__form-input[name=name]"),je=we.querySelector(".popup__form-input[name=job]"),Pe=document.querySelector(".popup_card"),Se=document.querySelector(".profile__button"),Ee=Pe.querySelector(".popup__form"),Ce=document.querySelector(".popup_avatar-editing"),Re=document.querySelector(".profile__avatar"),qe=Ce.querySelector(".popup__form"),Te=new E(e,Ee),Le=new E(e,ge),Ie=new E(e,qe),xe=new _(".popup_profile",(function(e){var t={name:e.name,about:e.job};Fe.updateUserInfo(t).then((function(e){Ne.setUserInfo({id:e._id,name:e.name,job:e.about}),xe.setSuccess()})).catch((function(e){return console.log(e)})).finally((function(e){return xe.close()}))})),Be=new _(".popup_card",(function(e){var t={name:e.title,link:e.link};Fe.addCard(t).then((function(e){t.ownerId=e.owner._id,t.cardId=e._id,t.likes=e.likes;var n=He(t);ze.addItem(n.getElement()),Be.setSuccess()})).catch((function(e){return console.log(e)})).finally((function(e){return Be.close()}))})),Ae=new _(".popup_avatar-editing",(function(e){Fe.updateAvatar({avatar:e.link}).then((function(e){Ne.setAvatar(e.avatar),Ae.setSuccess()})).catch((function(e){return console.log(e)})).finally((function(e){return Ae.close()}))})),De=new P(".popup_image"),Ue=new _(".popup_confirm-deleted",(function(e){var t=e.id;Fe.deleteCard(t).then((function(){Ue.setSuccess()})).catch((function(e){return console.log(e)})).finally((function(){document.getElementById(t).remove(),Ue.close()}))}));function He(e){return new I(".template",Ne,e,Me,Ve,Ue)}function Me(e,t){De.open(e,t)}function Ve(e){e.isLike()?Fe.deleteLike(e.getCardId()).then((function(t){return e.setLike(t.likes)})).catch((function(e){return console.log(e)})).finally():Fe.setLike(e.getCardId()).then((function(t){return e.setLike(t.likes)})).catch((function(e){return console.log(e)})).finally()}xe.setEventListeners(),Be.setEventListeners(),De.setEventListeners(),Ae.setEventListeners(),Ue.setEventListeners(),Se.addEventListener("click",(function(){Te.checkFormValidityBeforeOpen(),Be.open()})),Oe.addEventListener("click",(function(){var e=Ne.getUserInfo(),t=e.name,n=e.job;ke.value=t,je.value=n,Le.checkFormValidityBeforeOpen(),xe.open()})),Re.addEventListener("click",(function(){Ie.checkFormValidityBeforeOpen(),Ae.open()})),Te.enableValidation(),Le.enableValidation(),Ie.enableValidation();var Fe=new _e("https://mesto.nomoreparties.co/v1/","cohort-43","ee068133-e055-42c6-88de-c45211ca2bd0"),Ne=new n({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"}),ze=new o(".cards",(function(e){var t=He(e);ve.append(t.getElement())})),Ge=Fe.getInitialCards(),Je=Fe.getUserInfo();Promise.all([Je,Ge]).then((function(e){var t,n,r,o=(r=2,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?me(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],u=o[1];t=i,Ne.setUserInfo({id:t._id,name:t.name,job:t.about}),Ne.setAvatar(t.avatar),function(e){e.forEach((function(e){var t=He({ownerId:e.owner._id,cardId:e._id,name:e.name,link:e.link,likes:e.likes});ze.addItem(t.getElement())}))}(u)})).catch((function(e){return console.log(e)})).finally()})();