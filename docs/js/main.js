(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('./module/ns');

var _ns2 = _interopRequireDefault(_ns);

var _Router = require('./module/Router');

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Main);

    console.log('Hello, world!');

    this.initialize();

    console.log('Thanks, world!');
  }

  _createClass(Main, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      $(function () {
        _this.router = new _Router2.default();
      });
    }
  }]);

  return Main;
}();

_ns2.default.main = new Main();

},{"./module/Router":3,"./module/ns":4}],2:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tagNameArr = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "command", "datalist", "dd", "del", "details", "dfn", "div", "dl", "doctype", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

var Htjs = function () {
  function Htjs() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Htjs);

    this.globalize(opts);
  }

  _createClass(Htjs, [{
    key: "globalize",
    value: function globalize(opts) {
      var _this = this;

      var prefixStr = opts.prefixStr || '';
      tagNameArr.forEach(function (tagName) {
        global["" + prefixStr + tagName] = function () {
          for (var _len = arguments.length, argArr = Array(_len), _key = 0; _key < _len; _key++) {
            argArr[_key] = arguments[_key];
          }

          return _this.element({
            tagName: tagName,
            argArr: argArr
          });
        };
      });
    }

    /*
      param: opts.tagName
      param: opts.argArr
    */

  }, {
    key: "element",
    value: function element() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var argArr = opts.argArr;

      var tagName = opts.tagName || 'div';

      if (argArr.length === 0) {
        return new HtjsElement({
          tagName: tagName,
          content: null
        });
      } else if (argArr.length === 1) {
        var _ret = function () {
          var arg = argArr[0];
          if (arg == 'null') {
            return {
              v: new HtjsElement({
                tagName: tagName
              }).create({
                content: null
              })
            };
          } else if (typeof arg === 'string') {
            return {
              v: new HtjsElement({
                tagName: tagName
              }).create({
                content: argArr
              })
            };
          } else if (arg instanceof Array) {
            return {
              v: new HtjsElement({
                tagName: tagName
              }).create({
                content: arg
              })
            };
          } else if (arg instanceof HtjsElement) {
            return {
              v: new HtjsElement({
                tagName: tagName
              }).create({
                content: argArr
              })
            };
          } else if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object') {
            return {
              v: function v() {
                for (var _len2 = arguments.length, content = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  content[_key2] = arguments[_key2];
                }

                return new HtjsElement({
                  tagName: tagName,
                  attribute: arg
                }).create({
                  content: content
                });
              }
            };
          }
        }();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
      } else if (argArr.length > 1) {
        return new HtjsElement({
          tagName: tagName,
          content: argArr
        });
      }
    }
  }]);

  return Htjs;
}();

exports.default = Htjs;

var HtjsElement = function () {
  function HtjsElement() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, HtjsElement);

    this.initialize(opts);
  }

  _createClass(HtjsElement, [{
    key: "initialize",
    value: function initialize() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.tagName = opts.tagName || 'div';
      this.elm = document.createElement(this.tagName);
      this.attribute = opts.attribute || {};

      this.setAttribute();
    }
  }, {
    key: "create",
    value: function create() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var content = opts.content || [];

      this.innerHtjs({
        content: content
      });

      return this;
    }
  }, {
    key: "setAttribute",
    value: function setAttribute() {
      var _this2 = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var attrLi = this.attribute || {};
      Object.keys(attrLi).forEach(function (key) {
        if (key === 'style') {
          (function () {
            var styleArr = [];
            var styleLi = attrLi[key];

            Object.keys(styleLi).forEach(function (propName) {
              var prop = styleLi[propName];

              styleArr.push(propName + ": " + prop + ";");
            });

            var style = styleArr.join(' ');

            _this2.elm.setAttribute(key, style);
          })();
        } else {
          _this2.elm.setAttribute(key, attrLi[key]);
        }
      });

      return this.create;
    }
  }, {
    key: "innerHtjs",
    value: function innerHtjs() {
      var _this3 = this;

      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var content = opts.content || [];

      content.forEach(function (content) {
        if (content == null) {} else if (typeof content === 'string') {
          _this3.elm.innerHTML += content;
        } else if (content instanceof HtjsElement) {
          _this3.elm.appendChild(content.elm);
        }
      });
    }
  }]);

  return HtjsElement;
}();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('./ns');

var _ns2 = _interopRequireDefault(_ns);

var _Common = require('../page/Common');

var _Common2 = _interopRequireDefault(_Common);

var _Index = require('../page/Index');

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
  function Router() {
    _classCallCheck(this, Router);

    this.initialize();
  }

  _createClass(Router, [{
    key: 'initialize',
    value: function initialize() {
      var $body = $('body');

      this.pageCommon = new _Common2.default();

      if ($body.hasClass('page-index')) {
        this.pageIndex = new _Index2.default();
      }
    }
  }]);

  return Router;
}();

exports.default = Router;

},{"../page/Common":5,"../page/Index":6,"./ns":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * グローバル直下に変数を置かないよう、ネームスペースを切る。
 * ネームスペース以下の変数にアクセスしたいときは各クラスでこれをimportする
 */

window.licker = window.licker || {};
var ns = window.licker;
exports.default = ns;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Common = function () {
  function Common() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Common);

    this.initialize();
  }

  _createClass(Common, [{
    key: 'initialize',
    value: function initialize() {}
  }]);

  return Common;
}();

exports.default = Common;

},{"../module/ns":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = require('../module/ns');

var _ns2 = _interopRequireDefault(_ns);

var _Htjs = require('../module/Htjs');

var _Htjs2 = _interopRequireDefault(_Htjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
  function Index() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Index);

    this.initialize();
  }

  _createClass(Index, [{
    key: 'initialize',
    value: function initialize() {
      this.htjs = new _Htjs2.default({
        prefixStr: ''
      });

      document.querySelector('.wrapper').append(div(div({ class: "test" })(h1("HTJS(仮)"), p({ class: "content" })("これは", a({ href: "http://example.com", target: "_blank" })("アンカー"), "の", span("テ", "ス", "ト"), "です。", br()), span({
        style: {
          "color": "#f00",
          "font-weight": "bold",
          "font-size": "20px"
        }
      })("スタイルも効いた！"), span("うまくいってよかった！"))).elm);
    }
  }]);

  return Index;
}();

exports.default = Index;

},{"../module/Htjs":2,"../module/ns":4}]},{},[1]);
