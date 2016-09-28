import ns from '../module/ns';
import HtjsCreator from '../module/Htjs';

export default class Index {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.htjsCreator = new HtjsCreator();

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