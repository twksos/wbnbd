export function initGA() {
    window._gaq = window._gaq || [];
    window._gaq.push(['_setAccount', 'UA-32754844-2']);
    window._gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
}

export function initBDTJ() {
    window._hmt = window._hmt || [];
    (function () {
        var hm = document.createElement("script");
        hm.src = "//hm.baidu.com/hm.js?f6b1183b2b2fe89a44597c9b043ab626";
        if (window.location.hash != null) {
            window._hmt.push(['_trackEvent', 'search', 'search', 'keyword', window.location.hash]);
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}