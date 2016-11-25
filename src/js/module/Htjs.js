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
      global[`${prefixStr}${tagName}`] = (...argArr) => {
        return this.element({
          tagName,
          argArr,
        });
      }
    });
  }

  /*
    param: opts.tagName
    param: opts.argArr
  */
  element(opts = {}) {
    let argArr = opts.argArr;

    let tagName = opts.tagName || 'div';

    if(argArr.length === 0) {
      return new HtjsElement({
        tagName,
        content: null,
      });
    } else if(argArr.length === 1) {
      let arg = argArr[0];
      if(arg == 'null') {
        return new HtjsElement({
          tagName,
        }).create({
          content: null,
        });
      } else if(typeof arg === 'string') {
        return new HtjsElement({
          tagName,
        }).create({
          content: argArr,
        });
      } else if(arg instanceof Array) {
        return new HtjsElement({
          tagName,
        }).create({
          content: arg,
        });
      } else if(arg instanceof HtjsElement) {
        return new HtjsElement({
          tagName,
        }).create({
          content: argArr,
        });
      } else if(typeof arg === 'object') {
        return (...content) => {
          return new HtjsElement({
            tagName,
            attribute: arg,
          }).create({
            content: content,
          })
        }
      }
    }　else if(argArr.length > 1) {
      return new HtjsElement({
        tagName: tagName,
        content: argArr,
      });
    }
  }
}

class HtjsElement {
  constructor(opts = {}) {
    this.initialize(opts);
  }

  initialize(opts = {}) {
    this.tagName = opts.tagName || 'div';
    this.elm = document.createElement(this.tagName);
    this.attribute = opts.attribute || {};

    this.setAttribute();
  }

  create(opts = {}) {
    let content = opts.content || [];

    this.innerHtjs({
      content,
    });

    return this;
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

    return this.create;
  }

  innerHtjs(opts = {}) {
    var content = opts.content || [];

    content.forEach((content) => {
      if(content == null) {
      } else if(typeof content === 'string') {
        this.elm.innerHTML += content;
      } else if(content instanceof HtjsElement) {
        this.elm.appendChild(content.elm);
      }
    });
  }
}
