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
        [
          $div({
            "class": 'wrapper',
          })([
            $h1('HTJS(仮)'),
            $p({
              "class": "content",
            })([
              "これは",
              $a({
                "href": 'http://example.com',
                "targer": '_blank',
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