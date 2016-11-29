import ns from '../module/ns';
import Htjs from '../module/Htjs';

export default class Common {
  constructor(opts = {}) {
    this.initialize();
  }

  initialize() {
    this.htjs = new Htjs({
      prefixStr: '',
    });

    const url = 'http://butchi.github.io/htjs/';
    const title = 'HyperText JavaScript';
    const siteName = 'HTJS';
    const description = 'HyperText JavaScript Template Engine';
    const keywords = ['HyperText', 'JavaScript', 'Hyper', 'Text'];
    const webclipiconUrl = `${url}webclipicon.png`;
    const facebookAppId = '903742642995033';
    const ogpImageUrl = `${url}ogp.png`;
    const ogpImageWidth = 128;
    const ogpImageHeight = 128;
    const ogpType = 'website';
    const ogpLocale = 'ja_JP';

    html({lang: "ja"})(
      head(
        meta({charset: "utf-8"})(),

        // meta
        meta({name: "description", content: `${description}`})(),
        meta({name: "keywords", content: keywords.join(', ')})(),
        link({rel: "shortcut icon", href: 'favicon.ico', type: "image/vnd.microsoft.icon"})(),
        link({rel: "icon", href: 'favicon.ico', type: "image/vnd.microsoft.icon"})(),

        meta({"http-equiv": "X-UA-Compatible", content: "IE=Edge"})(),
          
        // smartphone meta
        meta({name: "viewport", content: "width=device-width"})(),
        meta({name: "apple-mobile-web-app-capable", content: "yes"})(),
        meta({name: "apple-mobile-web-app-status-bar-style", content: 'default'})(),
        link({rel: "apple-touch-icon", href: webclipiconUrl})(),

        // ogp
        meta({property: "fb:app_id", content: facebookAppId})(),
        meta({property: "og:url", content: url})(),
        meta({property: "og:image", content: ogpImageUrl})(),
        meta({property: "og:image:width", content: ogpImageWidth})(),
        meta({property: "og:image:height", content: ogpImageHeight})(),
        meta({property: "og:type", content: ogpType})(),
        meta({property: "og:title", content: title})(),
        meta({property: "og:site_name", content: siteName})(),
        meta({property: "og:description", content: description})(),
        meta({property: "og:locale", content: ogpLocale})(),

        // twitter card
        meta({property: "twitter:card", content: (ogpImageUrl ? "summary_large_image" : "summary")})(),
        meta({property: "twitter:title", content: title})(),
        meta({property: "twitter:description", content: description})(),
        meta({property: "twitter:image", content: ogpImageUrl})(),
        // meta({property: "twitter:site", content: twitterCardOwner})(),
        // meta({property: "twitter:creator", content: twitterCardOwner})(),

        // canonical url
        link({rel: "canonical", href: url})(),

        // stylesheet
        link({rel: "stylesheet", href: "css/style.css"})()
      ),

      body(
        div({id: "fb-root"}),
        script(`
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.7&appId=";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
        `),

        header(
          ul({class: "list-share"})(
            li({class: "item facebook"})(),
            li({class: "item twitter"})(),
            li({class: "item line"})(),
            li({class: "item gplus"})()
          )
        ),

        script(`
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-2779957-9', 'auto');
ga('send', 'pageview');
        `)
      )
    );

    // from http://qiita.com/butchi_y/items/f2253ddd504d30686f62
    (function likeButton() {
      var likeElm = document.createElement('div');
      likeElm.innerHTML = `<div class="fb-like" data-action="like" data-href="${url}" data-layout="button_count" data-share="false" data-size="small"></div>`;

      window.addEventListener('load', function() {
        document.querySelector('.facebook').appendChild(likeElm);

        window.fbAsyncInit = function() {
          FB.init({
            appId      : facebookAppId,
            xfbml      : true,
            version    : 'v2.8'
          });
        };

        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = `//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.8&appId=${facebookAppId}`;
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
      });
    })();

    (function tweetButton() {
      window.addEventListener('load', function() {
        var tweetElm = document.createElement('div');
        tweetElm.innerHTML = `<a href="https://twitter.com/share" class="twitter-share-button" data-url="${url}" data-text="${description}" data-lang="ja">ツイート</a>`;

        document.querySelector('.twitter').appendChild(tweetElm);

        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
      });
    })();

    (function lineButton() {
      var scriptElm = document.createElement('script');
      scriptElm.src = '//scdn.line-apps.com/n/line_it/thirdparty/loader.min.js';
      document.body.appendChild(scriptElm);

      window.addEventListener('load', function() {
        var lineElm = document.createElement('div');
        lineElm.innerHTML = '<div class="line-it-button" style="display: none;" data-type="share-a" data-lang="ja" ></div>';

        document.querySelector('.line').appendChild(lineElm);

        LineIt.loadButton();
      });
    })();

    (function plusoneButton() {
      var scriptElm = document.createElement('script');
      scriptElm.src = 'https://apis.google.com/js/platform.js';
      scriptElm.innerHTML = "{lang: 'ja', parsetags: 'explicit'}";
      document.body.appendChild(scriptElm);

      window.addEventListener('load', function() {
        var gplusElm = document.createElement('div');
        gplusElm.innerHTML = '<div class="g-plusone" data-size="medium"></div>';

        document.querySelector('.gplus').appendChild(gplusElm);

        gapi.plusone.go();
      });
    })();
  }
}