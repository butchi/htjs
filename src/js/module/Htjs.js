export default class Htjs {
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