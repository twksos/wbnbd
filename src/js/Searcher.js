export class Searcher {
    constructor() {
        this.text = '';
    }

    copyText() {
        // copy(this.text);
    }

    search() {
        console.log(this.text);
    }
}
Searcher.instance = null;
Searcher.getInstance = function () {
    if (!Searcher.instance) Searcher.instance = new Searcher();
    return Searcher.instance;
};