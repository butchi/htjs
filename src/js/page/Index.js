import ns from '../module/ns';
import Htjs from '../module/Htjs';

export default class Index {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    global.$div = (arg) => {
      var htjs =  new Htjs();

      var tagName = 'div';
      var attribute;
      var content;

      var attribute;
      var option;

      if(arg == null) {
        return htjs.createElement({
          tagName,
          attribute: null,
          contentArr: null,
        });
      } else if(typeof arg === 'string') {
        return htjs.createElement({
          tagName,
          attribute: null,
          contentArr: [arg],
        });
      } else if(arg instanceof Array) {
        return htjs.createElement({
          tagName,
          attribute: null,
          contentArr: arg,
        });
      } else if(typeof arg === 'object') {
        let attribute = arg;
        return htjs.template({
          tagName,
          attribute,
        });
      }
    };

    document.body.append(
      $div(
        [$div({
          "class": 'test',
          "id": 'div1',
        })('hoge'),
        $div('piyo'),
        $div('fuga')]
      ).elm
    );
  }
}