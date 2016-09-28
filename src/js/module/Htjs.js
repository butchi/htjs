export default class Htjs {
  constructor(opts = {}) {
    this.globalize();
  }

  globalize() {
    global.$h1 = (arg) => {
      return this.$h1(arg);
    };

    global.$div = (arg) => {
      return this.$div(arg);
    };

    global.$span = (arg) => {
      return this.$span(arg);
    };

    global.$br = (arg) => {
      return this.$br(arg);
    };

    global.$a = (arg) => {
      return this.$a(arg);
    };

    global.$img = (arg) => {
      return this.$img(arg);
    };
  }

  $h1(arg) {
    return this.element({
      tagName: 'h1',
      arg: arg,
    });
  }

  $div(arg) {
    return this.element({
      tagName: 'div',
      arg: arg,
    });
  }

  $span(arg) {
    return this.element({
      tagName: 'div',
      arg: arg,
    });
  }

  $br(arg) {
    return this.element({
      tagName: 'br',
      arg: arg,
    });
  }

  $a(arg) {
    return this.element({
      tagName: 'a',
      arg: arg,
    });
  }

  $img(arg) {
    return this.element({
      tagName: 'a',
      arg: arg,
    });
  }

  /*
    param: opts.tagName
    param: opts.arg
  */
  element(opts = {}) {
    var htjsObj =  new HtjsObject();

    var arg = opts.arg;

    var tagName = opts.tagName || 'div';
    var attribute;

    if(arg == null) {
      return htjsObj.createElement({
        tagName,
        attribute: null,
        contentArr: null,
      });
    } else if(typeof arg === 'string') {
      return htjsObj.createElement({
        tagName,
        attribute: null,
        contentArr: [arg],
      });
    } else if(arg instanceof Array) {
      return htjsObj.createElement({
        tagName,
        attribute: null,
        contentArr: arg,
      });
    } else if(typeof arg === 'object') {
      attribute = arg;
      return htjsObj.template({
        tagName,
        attribute,
      });
    }
  }
}

class HtjsObject {
  constructor() {
    this.initialize();
  }

  initialize() {
  }

  template(opts = {}) {
    return new HtjsTemplate(opts);
  }

  createElement(opts = {}) {
    return new HtjsElement(opts);
  }
}

class HtjsTemplate {
  constructor(opts = {}) {
    return this.createGenerator(opts);
  }

  createGenerator(opts = {}) {
    var tagName = opts.tagName;
    var attribute = opts.attribute;

    return function(arg) {
      return new HtjsElement({
        tagName,
        attribute,
        contentArr: [arg],
      });
    }
  }
}

class HtjsElement {
  constructor(opts = {}) {
    this.tagName = opts.tagName || 'div';
    this.attribute = opts.attribute || {};
    this.contentArr = opts.contentArr || [];

    this.initialize();
  }

  initialize() {
    this.create();
    this.setAttribute();
  }

  create() {
    this.elm = document.createElement('div');
    this.setAttribute({
      attribute: this.attribute,
    });
    this.innerHtjs({
      contentArr: this.contentArr,
    });

    return this.elm;
  }

  setAttribute(opts = {}) {
    var attrLi = this.attribute || {};
    Object.keys(attrLi).forEach((key) => {
      this.elm.setAttribute(key, attrLi[key]);
    });
  }

  innerHtjs(opts = {}) {
    var contentArr = opts.contentArr || [];

    contentArr.forEach((content) => {
      if(content == null) {
      } else if(typeof content === 'string') {
        this.elm.innerText += content;
      } else if(content instanceof HtjsElement) {
        this.elm.appendChild(content.elm);
      }
    });
  }
}