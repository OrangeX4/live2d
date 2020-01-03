
function loadjscssfile(filename,filetype){
    //判断js文件
    if(filetype == "js"){
    //创建script标签
    var fileref = document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src",filename);
    }else if(filetype == "css"){  //判断css文件
    //创建link标签
    var fileref = document.createElement('link');
    fileref.setAttribute("rel","stylesheet");
    fileref.setAttribute("type","text/css");
    fileref.setAttribute("href",filename);
    }
    if(typeof fileref != "undefined"){
    document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

(function() {
    if(window.location.href.lastIndexOf('baidu')==-1){
        loadjscssfile("https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js","js");
        loadjscssfile("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js","js");
        loadjscssfile("https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css","css");
    //    injectCustomJs("https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js");
    //    injectCustomJs("https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css");
    //    injectCustomJs("https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/autoload.js");
    //    injectCustomJs("autoload.js");
    //    injectCustomJs("jquery.min.js");
    }
    

})();
