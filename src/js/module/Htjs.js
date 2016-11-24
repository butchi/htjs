const tagNameArr = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "command",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "doctype",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

export default class Htjs {
  constructor(opts = {}) {
    this.globalize(opts);
  }

  globalize(opts) {
    let prefixStr = opts.prefixStr || '';
    tagNameArr.forEach((tagName) => {
      global[`${prefixStr}${tagName}`] = (arg) => {
        return this.element({
          tagName,
          arg,
        });
      }
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
      var contentArr = [];

      if(arg == null) {
      } else if(typeof arg === 'string') {
        contentArr = [arg];
      } else if(arg instanceof Array) {
        contentArr = arg;
      } else if(typeof arg === 'object') {
      }

      return new HtjsElement({
        tagName,
        attribute,
        contentArr,
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
    this.elm = document.createElement(this.tagName);
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
      if(key === 'style') {
        let styleArr = [];
        let styleLi = attrLi[key];

        Object.keys(styleLi).forEach((propName) => {
          var prop = styleLi[propName];

          styleArr.push(`${propName}: ${prop};`);
        });

        let style = styleArr.join(' ');

        this.elm.setAttribute(key, style);
      } else {
        this.elm.setAttribute(key, attrLi[key]);
      }
    });
  }

  innerHtjs(opts = {}) {
    var contentArr = opts.contentArr || [];

    contentArr.forEach((content) => {
      if(content == null) {
      } else if(typeof content === 'string') {
        this.elm.innerHTML += content;
      } else if(content instanceof HtjsElement) {
        this.elm.appendChild(content.elm);
      }
    });
  }
}