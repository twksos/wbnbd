import copy from 'copy-to-clipboard';
import Velocity from 'velocity-animate';

export class Searcher {
    constructor() {
        this.text = '';
    }

    copyText() {
        copy(this.text);
    }

    search() {
        const share = document.querySelector('#share');
        Velocity(share, {opacity: 1}, {display: 'block'});
        console.log(this.text);
    }
}
Searcher.instance = null;
Searcher.getInstance = function () {
    if (!Searcher.instance) Searcher.instance = new Searcher();
    return Searcher.instance;
};