import copy from 'copy-to-clipboard';
import Velocity from 'velocity-animate';

export class Searcher {
    constructor() {
        this.text = '';
    }

    copyText() {
        if (this.playing) return;
        copy('http://wbnbd.com/?q=' + encodeURIComponent(this.text));
        const shareHintDOM = document.querySelector('#share-hint');
        shareHintDOM.innerHTML = '已复制';
    }

    search() {
        if (this.playing) return;
        if (!this.text) alert("(╯‵□′)╯︵┻━┻");
        const shareDOM = document.querySelector('#share');
        const shareInputDOM = document.querySelector('#generated-url');
        shareInputDOM.value = 'http://wbnbd.com/?q=' + encodeURIComponent(this.text);
        Velocity(shareDOM, {opacity: 1}, {display: 'block'});
    }

    play() {
        const search = window.location.search;
        const hash = window.location.hash;
        if (!search.startsWith('?q='))return;
        if (hash === '#ad') return;
        this.playing = true;

        const text = decodeURIComponent(search.slice(3));
        console.log('text', text);
        const navTextDOM = document.querySelector('#nv .welcome');
        const cursorDOM = document.querySelector('#cursor');
        const inputDOM = document.querySelector('#kw');
        const searchButtonDOM = document.querySelector('#su');
        const inputPosition = inputDOM.getBoundingClientRect();
        const searchButtonPosition = searchButtonDOM.getBoundingClientRect();

        navTextDOM.innerHTML = '想知道“'+ text + '”是什么？';
        cursorDOM.style['background-image'] = 'url(/img/mouse_arrow_windows_aero.png)';
        Velocity(cursorDOM, {left: inputPosition.left, top: inputPosition.top}, {
            duration: 1500,
            complete: function () {
                cursorDOM.style['background-image'] = 'url(/img/mouse_text_windows_aero.png)';
                navTextDOM.innerHTML = '只要在这里输入“'+ text + '”...';
                setTimeout(function () {
                    let textTyped = 0;
                    const interval = setInterval(function () {
                        textTyped += 1;
                        inputDOM.value = text.slice(0, textTyped);
                        if (textTyped === text.length) {
                            clearInterval(interval);
                            navTextDOM.innerHTML = '然后点右边那个按钮，简单吧~';
                            cursorDOM.style['background-image'] = 'url(/img/mouse_arrow_windows_aero.png)';
                            Velocity(cursorDOM, {
                                left: searchButtonPosition.left + 5,
                                top: searchButtonPosition.top + 5
                            }, {
                                duration: 1500,
                                complete: function () {
                                    window.location.hash = 'ad';
                                    window.location.href = 'https://baidu.com/s?wd=' + text;
                                }
                            });
                        }
                    }, 300);
                }, 300);
            }
        });
    }
}
Searcher.instance = null;
Searcher.getInstance = function () {
    if (!Searcher.instance) Searcher.instance = new Searcher();
    return Searcher.instance;
};
