import ns from '../module/ns';

export default class Index {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    $('body').append(
      $('<div>').addClass('wrapper')
        .append(
          $('<div>')
            .append(
              $('<div>').addClass('test')
                .append($('<h1>').text('HTJS(仮)'))
                .append(
                  $('<div>').addClass('content')
                    .append('これは')
                    .append($('<a>').attr({href: 'http://example.com', target: '_blank'}).text('アンカー'))
                    .append('の')
                    .append('<br>')
                    .append(
                      $('<span>').append('テ').append('ス').append('ト')
                    )
                    .append('です。')
                )
                .append(
                  $('<span>')
                    .css({
                      "color": "#f00",
                      "font-weight": "bold",
                      "font-size": "20px",
                    })
                    .append('スタイルも効いた！')
                )
                .append(
                  $('<span>').append('うまくいってよかった！')
                )
            )
        )
    );
  }
}
