import ns from './ns';
import PageCommon from '../page/Common';
import PageIndex from '../page/Index';
import PagePugGithub from '../page/PugGithub';

export default class Router {
  constructor() {
    this.initialize();
  }

  initialize() {
    const $body = $('body');

    this.pageCommon = new PageCommon();

    if($body.hasClass('page-index')) {
      this.pageIndex = new PageIndex();
    }

    if($body.hasClass('page-pug-github')) {
      this.pagePugGithub = new PagePugGithub();
    }
  }
}
