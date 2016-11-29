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
    head(
      title("Htjs"),

      link({rel: "stylesheet", href: "css/style.css"})(),

      script({type: "text/javascript"})(
        "if (foo) bar(1 + 5)"
      )
    );

    document.querySelector('body').appendChild(
      div({class: "wrapper"})(
        h1("Htjs - node template engine"),
        div({id: "container", class: "col"})(
          p("すごいぞ！"),
          p("Htjsはかんたんできょうりょくなテンプレートエンジンだぞ！")
        )
      ).elm
    );
  }
}
