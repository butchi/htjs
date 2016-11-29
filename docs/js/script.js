(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tagNameArr = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "command", "datalist", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];

var Htjs = function () {
  function Htjs() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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
      var _this2 = this;

      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var argArr = opts.argArr;

      var tagName = opts.tagName || 'div';

      if (tagName == null) {
        tagName = 'div';
      } else if (tagName === 'html') {
        var _ret = function () {
          var arg = argArr[0];
          if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object') {
            (function () {
              var htmlElm = document.querySelector('html');
              Object.keys(arg).forEach(function (key) {
                htmlElm.setAttribute(key, arg[key]);
              });
            })();
          }
          return {
            v: _this2.setup(opts)
          };
        }();

        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
      } else if (tagName === 'head' || tagName === 'body') {
        document.querySelector(tagName).appendChild(this.setup({
          tagName: tagName,
          argArr: argArr
        }).elm);
      } else {
        return this.setup(opts);
      }
    }
  }, {
    key: "setup",
    value: function setup() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var argArr = opts.argArr || [];

      var tagName = opts.tagName || 'div';

      if (tagName === 'script') {}

      if (argArr.length === 0) {
        return new HtjsElement({
          tagName: tagName,
          content: null
        });
      } else if (argArr.length === 1) {
        var arg = argArr[0];
        if (arg == 'null') {
          return new HtjsElement({
            tagName: tagName
          }).create({
            content: null
          });
        } else if (typeof arg === 'string') {
          return new HtjsElement({
            tagName: tagName
          }).create({
            content: argArr
          });
        } else if (arg instanceof Array) {
          return new HtjsElement({
            tagName: tagName
          }).create({
            content: arg
          });
        } else if (arg instanceof HtjsElement) {
          return new HtjsElement({
            tagName: tagName
          }).create({
            content: argArr
          });
        } else if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) === 'object') {
          var _ret3 = function () {
            var htjsElement = new HtjsElement({
              tagName: tagName,
              attribute: arg
            });

            return {
              v: function v() {
                for (var _len2 = arguments.length, content = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  content[_key2] = arguments[_key2];
                }

                return htjsElement.create({
                  content: content
                });
              }
            };
          }();

          if ((typeof _ret3 === "undefined" ? "undefined" : _typeof(_ret3)) === "object") return _ret3.v;
        }
      } else if (argArr.length > 1) {
        return new HtjsElement({
          tagName: tagName
        }).create({
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
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, HtjsElement);

    this.initialize(opts);
  }

  _createClass(HtjsElement, [{
    key: "initialize",
    value: function initialize() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      this.tagName = opts.tagName || 'div';
      this.elm = document.createElement(this.tagName);
      this.attribute = opts.attribute || {};

      return this.setAttribute();
    }
  }, {
    key: "create",
    value: function create() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var content = opts.content || [];

      this.innerHtjs({
        content: content
      });

      return this;
    }
  }, {
    key: "setAttribute",
    value: function setAttribute() {
      var _this3 = this;

      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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

            _this3.elm.setAttribute(key, style);
          })();
        } else {
          _this3.elm.setAttribute(key, attrLi[key]);
        }
      });

      return this;
    }
  }, {
    key: "innerHtjs",
    value: function innerHtjs() {
      var _this4 = this;

      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var content = opts.content || [];

      content.forEach(function (content) {
        if (content == null) {} else if (typeof content === 'string') {
          _this4.elm.innerHTML += content;
        } else if (content instanceof HtjsElement) {
          _this4.elm.appendChild(content.elm);
        }
      });

      return this;
    }
  }]);

  return HtjsElement;
}();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
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

var _PugGithub = require('../page/PugGithub');

var _PugGithub2 = _interopRequireDefault(_PugGithub);

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
      var bodyElm = document.querySelector('body');

      this.pageCommon = new _Common2.default();

      if (bodyElm.classList.contains('page-index')) {
        this.pageIndex = new _Index2.default();
      }

      if (bodyElm.classList.contains('page-pug-github')) {
        this.pagePugGithub = new _PugGithub2.default();
      }
    }
  }]);

  return Router;
}();

exports.default = Router;

},{"../page/Common":4,"../page/Index":5,"../page/PugGithub":6,"./ns":3}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

var Common = function () {
  function Common() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Common);

    this.initialize();
  }

  _createClass(Common, [{
    key: 'initialize',
    value: function initialize() {
      this.htjs = new _Htjs2.default({
        prefixStr: ''
      });

      var url = 'http://butchi.github.io/htjs/';
      var title = 'HyperText JavaScript';
      var siteName = 'HTJS';
      var description = 'HyperText JavaScript Template Engine';
      var keywords = ['HyperText', 'JavaScript', 'Hyper', 'Text'];
      var webclipiconUrl = url + 'webclipicon.png';
      var facebookAppId = '903742642995033';
      var ogpImageUrl = url + 'ogp.png';
      var ogpImageWidth = 128;
      var ogpImageHeight = 128;
      var ogpType = 'website';
      var ogpLocale = 'ja_JP';

      html({ lang: "ja" })(head(meta({ charset: "utf-8" })(),

      // meta
      meta({ name: "description", content: '' + description })(), meta({ name: "keywords", content: keywords.join(', ') })(), link({ rel: "shortcut icon", href: 'favicon.ico', type: "image/vnd.microsoft.icon" })(), link({ rel: "icon", href: 'favicon.ico', type: "image/vnd.microsoft.icon" })(), meta({ "http-equiv": "X-UA-Compatible", content: "IE=Edge" })(),

      // smartphone meta
      meta({ name: "viewport", content: "width=device-width" })(), meta({ name: "apple-mobile-web-app-capable", content: "yes" })(), meta({ name: "apple-mobile-web-app-status-bar-style", content: 'default' })(), link({ rel: "apple-touch-icon", href: webclipiconUrl })(),

      // ogp
      meta({ property: "fb:app_id", content: facebookAppId })(), meta({ property: "og:url", content: url })(), meta({ property: "og:image", content: ogpImageUrl })(), meta({ property: "og:image:width", content: ogpImageWidth })(), meta({ property: "og:image:height", content: ogpImageHeight })(), meta({ property: "og:type", content: ogpType })(), meta({ property: "og:title", content: title })(), meta({ property: "og:site_name", content: siteName })(), meta({ property: "og:description", content: description })(), meta({ property: "og:locale", content: ogpLocale })(),

      // twitter card
      meta({ property: "twitter:card", content: ogpImageUrl ? "summary_large_image" : "summary" })(), meta({ property: "twitter:title", content: title })(), meta({ property: "twitter:description", content: description })(), meta({ property: "twitter:image", content: ogpImageUrl })(),
      // meta({property: "twitter:site", content: twitterCardOwner})(),
      // meta({property: "twitter:creator", content: twitterCardOwner})(),

      // canonical url
      link({ rel: "canonical", href: url })(),

      // stylesheet
      link({ rel: "stylesheet", href: "css/style.css" })()), body(div({ id: "fb-root" }), script('\n(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.7&appId=";\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, \'script\', \'facebook-jssdk\'));\n        '), header(ul({ class: "list-share" })(li({ class: "item facebook" })(), li({ class: "item twitter" })(), li({ class: "item line" })(), li({ class: "item gplus" })())), div({ class: "wrapper" })(), script('\n(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\nga(\'create\', \'UA-2779957-9\', \'auto\');\nga(\'send\', \'pageview\');\n        ')));

      // from http://qiita.com/butchi_y/items/f2253ddd504d30686f62
      (function likeButton() {
        var likeElm = document.createElement('div');
        likeElm.innerHTML = '<div class="fb-like" data-action="like" data-href="' + url + '" data-layout="button_count" data-share="false" data-size="small"></div>';

        window.addEventListener('load', function () {
          document.querySelector('.facebook').appendChild(likeElm);

          window.fbAsyncInit = function () {
            FB.init({
              appId: facebookAppId,
              xfbml: true,
              version: 'v2.8'
            });
          };

          (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);js.id = id;
            js.src = '//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.8&appId=' + facebookAppId;
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'facebook-jssdk');
        });
      })();

      (function tweetButton() {
        window.addEventListener('load', function () {
          var tweetElm = document.createElement('div');
          tweetElm.innerHTML = '<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + url + '" data-text="' + description + '" data-lang="ja">ツイート</a>';

          document.querySelector('.twitter').appendChild(tweetElm);

          !function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0],
                p = /^http:/.test(d.location) ? 'http' : 'https';if (!d.getElementById(id)) {
              js = d.createElement(s);js.id = id;js.src = p + '://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js, fjs);
            }
          }(document, 'script', 'twitter-wjs');
        });
      })();

      (function lineButton() {
        var scriptElm = document.createElement('script');
        scriptElm.src = '//scdn.line-apps.com/n/line_it/thirdparty/loader.min.js';
        document.body.appendChild(scriptElm);

        window.addEventListener('load', function () {
          var lineElm = document.createElement('div');
          lineElm.innerHTML = '<div class="line-it-button" style="display: none;" data-type="share-a" data-lang="ja" ></div>';

          document.querySelector('.line').appendChild(lineElm);

          LineIt.loadButton();
        });
      })();

      (function plusoneButton() {
        var scriptElm = document.createElement('script');
        scriptElm.src = 'https://apis.google.com/js/platform.js';
        scriptElm.innerHTML = "{lang: 'ja', parsetags: 'explicit'}";
        document.body.appendChild(scriptElm);

        window.addEventListener('load', function () {
          var gplusElm = document.createElement('div');
          gplusElm.innerHTML = '<div class="g-plusone" data-size="medium"></div>';

          document.querySelector('.gplus').appendChild(gplusElm);

          gapi.plusone.go();
        });
      })();
    }
  }]);

  return Common;
}();

exports.default = Common;

},{"../module/Htjs":1,"../module/ns":3}],5:[function(require,module,exports){
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
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Index);

    this.initialize();
  }

  _createClass(Index, [{
    key: 'initialize',
    value: function initialize() {
      this.htjs = new _Htjs2.default({
        prefixStr: ''
      });

      document.querySelector('.wrapper').append(div(div({ class: "test" })(h1("HTJS(仮)"), p({ class: "content" })("これは", a({ href: "http://example.com", target: "_blank" })("アンカー"), "の", br(), span("テ", "ス", "ト"), "です。"), span({
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

},{"../module/Htjs":1,"../module/ns":3}],6:[function(require,module,exports){
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

var PugGithub = function () {
  function PugGithub() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, PugGithub);

    this.initialize();
  }

  _createClass(PugGithub, [{
    key: 'initialize',
    value: function initialize() {
      this.htjs = new _Htjs2.default({
        prefixStr: ''
      });

      // from https://github.com/pugjs/pug
      document.querySelector('html').appendChild(html({ lang: "ja" })(head(title("Htjs"), script({ type: "text/javascript" })("if (foo) bar(1 + 5)")), body(h1("Htjs - node template engine"), div({ id: "container", class: "col" })(p("すごいぞ！"), p("Htjsはかんたんできょうりょくなテンプレートエンジンだぞ！")))).elm);
    }
  }]);

  return PugGithub;
}();

exports.default = PugGithub;

},{"../module/Htjs":1,"../module/ns":3}],7:[function(require,module,exports){
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
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Main);

    console.log('Hello, world!');

    this.initialize();

    console.log('Thanks, world!');
  }

  _createClass(Main, [{
    key: 'initialize',
    value: function initialize() {
      var _this = this;

      document.addEventListener('DOMContentLoaded', function () {
        _this.router = new _Router2.default();
      });
    }
  }]);

  return Main;
}();

_ns2.default.main = new Main();

},{"./module/Router":2,"./module/ns":3}]},{},[7]);
