import ns from '../module/ns';
import Htjs from '../module/Htjs';

export default class Index {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.htjs = new Htjs({
      prefixStr: '',
    });

    let wrapperElm = document.createElement('div');
    wrapperElm.classList.add('wrapper');
    document.querySelector('body').append(wrapperElm);

    wrapperElm.append(
      div(
        div({class: "test"})(
          h1("HTJS(仮)"),
          p({class: "content"})(
            "これは",
            a({href: "http://example.com", target: "_blank"})("アンカー"),
            "の",
            br(),
            span("テ", "ス", "ト"),
            "です。"
          ),
          span({
            style: {
              "color": "#f00",
              "font-weight": "bold",
              "font-size": "20px",
            }
          })("スタイルも効いた！"),
          span("うまくいってよかった！")
        )
      ).elm
    );
  }
}
