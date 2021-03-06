import ns from './module/ns';
import Router from './module/Router';

class Main {
  constructor(opts = {}) {
    console.log('Hello, world!');

    this.initialize();

    console.log('Thanks, world!');
  }

  initialize() {
    document.addEventListener('DOMContentLoaded', () => {
      this.router = new Router();
    });
  }
}

ns.main = new Main();
