function injectCustomJs(jsPath)
{
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function()
    {
        // 放在页面不好看，执行完后移除掉
        //this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
}

(function() {
    console.log('这是 simple-chrome-plugin-demo 的content-script！');
    injectCustomJs("injected.js")
//    injectCustomJs("https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js");
//    injectCustomJs("https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css");
//    injectCustomJs("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js");
//    injectCustomJs("autoload.js");
//    injectCustomJs("jquery.min.js");
})();
