import ns from '../module/ns';
import Htjs from '../module/Htjs';

export default class PugGithub {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.htjs = new Htjs({
      prefixStr: '',
    });

    // from https://github.com/pugjs/pug
    document.querySelector('html').appendChild(
      html({lang: "ja"})(
        head(
          title("Htjs"),
          script({type: "text/javascript"})(
            "if (foo) bar(1 + 5)"
          )
        ),
        body(
          h1("Htjs - node template engine"),
          div({id: "container", class: "col"})(
            p("すごいぞ！"),
            p("Htjsはかんたんできょうりょくなテンプレートエンジンだぞ！")
          )
        )
      ).elm
    )
  }
}
