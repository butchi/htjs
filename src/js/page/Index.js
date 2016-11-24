import ns from '../module/ns';
import Htjs from '../module/Htjs';

export default class Index {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.htjs = new Htjs();

    document.querySelector('.wrapper').append(
      $div(
        [
          $div({
            "class": 'test',
          })([
            $h1('HTJS(仮)'),
            $p({
              "class": "content",
            })([
              "これは",
              $a({
                "href": 'http://example.com',
                "target": '_blank',
              })('アンカー'),
              "の",
              $span('テスト'),
              "です。",
              $br(),
              $span({
                style: {
                  "color": '#f00',
                  "font-weight": 'bold',
                  "font-size": '20px',
                }
              })('スタイルも効いた！'),
              $span('うまくいってよかった！')
            ])
          ])
        ]
      ).elm
    );
  }
}
