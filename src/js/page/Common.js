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

        div({class: "wrapper"})(),

        script(`
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-XXXXXXX-X', 'auto');
ga('send', 'pageview');
        `),
      )
    );
  }
}