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

      $(function () {
        _this.router = new _Router2.default();
      });
    }
  }]);

  return Main;
}();

_ns2.default.main = new Main();

},{"./module/Router":3,"./module/ns":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Htjs = function () {
  function Htjs() {
    _classCallCheck(this, Htjs);

    this.initialize();
  }

  _createClass(Htjs, [{
    key: 'initialize',
    value: function initialize() {}
  }, {
    key: 'template',
    value: function template() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return new HtjsTemplate(opts);
    }
  }, {
    key: 'createElement',
    value: function createElement() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      return new HtjsElement(opts);
    }
  }]);

  return Htjs;
}();

exports.default = Htjs;

var HtjsTemplate = function () {
  function HtjsTemplate() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, HtjsTemplate);

    return this.createGenerator(opts);
  }

  _createClass(HtjsTemplate, [{
    key: 'createGenerator',
    value: function createGenerator() {
      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var tagName = opts.tagName;
      var attribute = opts.attribute;

      return function (arg) {
        return new HtjsElement({
          tagName: tagName,
          attribute: attribute,
          contentArr: [arg]
        });
      };
    }
  }]);

  return HtjsTemplate;
}();

var HtjsElement = function () {
  function HtjsElement() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, HtjsElement);

    this.tagName = opts.tagName || 'div';
    this.attribute = opts.attribute || {};
    this.contentArr = opts.contentArr || [];

    this.initialize();
  }

  _createClass(HtjsElement, [{
    key: 'initialize',
    value: function initialize() {
      this.create();
      this.setAttribute();
    }
  }, {
    key: 'create',
    value: function create() {
      this.elm = document.createElement('div');
      this.setAttribute({
        attribute: this.attribute
      });
      this.innerHtjs({
        contentArr: this.contentArr
      });

      return this.elm;
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute() {
      var _this = this;

      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var attrLi = this.attribute || {};
      Object.keys(attrLi).forEach(function (key) {
        _this.elm.setAttribute(key, attrLi[key]);
      });
    }
  }, {
    key: 'innerHtjs',
    value: function innerHtjs() {
      var _this2 = this;

      var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var contentArr = opts.contentArr || [];

      contentArr.forEach(function (content) {
        if (content == null) {} else if (typeof content === 'string') {
          _this2.elm.innerText += content;
        } else if (content instanceof HtjsElement) {
          _this2.elm.appendChild(content.elm);
        }
      });
    }
  }]);

  return HtjsElement;
}();

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
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

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
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
      global.$div = function (arg) {
        var htjs = new _Htjs2.default();

        var tagName = 'div';
        var attribute;
        var content;

        var attribute;
        var option;

        if (arg == null) {
          return htjs.createElement({
            tagName: tagName,
            attribute: null,
            contentArr: null
          });
        } else if (typeof arg === 'string') {
          return htjs.createElement({
            tagName: tagName,
            attribute: null,
            contentArr: [arg]
          });
        } else if (arg instanceof Array) {
          return htjs.createElement({
            tagName: tagName,
            attribute: null,
            contentArr: arg
          });
        } else if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {
          var _attribute = arg;
          return htjs.template({
            tagName: tagName,
            attribute: _attribute
          });
        }
      };

      document.body.append($div([$div({
        "class": 'test',
        "id": 'div1'
      })('hoge'), $div('piyo'), $div('fuga')]).elm);
    }
  }]);

  return Index;
}();

exports.default = Index;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../module/Htjs":2,"../module/ns":4}]},{},[1]);
