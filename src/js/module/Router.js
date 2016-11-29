import ns from './ns';
import PageCommon from '../page/Common';
import PageIndex from '../page/Index';
import PagePugGithub from '../page/PugGithub';
import PageJquery from '../page/Jquery';

export default class Router {
  constructor() {
    this.initialize();
  }

  initialize() {
    const bodyElm = document.querySelector('body');

    this.pageCommon = new PageCommon();

    if(bodyElm.classList.contains('page-index')) {
      this.pageIndex = new PageIndex();
    }

    if(bodyElm.classList.contains('page-pug-github')) {
      this.pagePugGithub = new PagePugGithub();
    }

    if(bodyElm.classList.contains('page-jquery')) {
      this.pagePugGithub = new PageJquery();
    }
  }
}
