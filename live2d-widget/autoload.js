const myLive2dApi = "https://ryder.pw/live2dApi/";

try {
    $("<link>").attr({
        href: "/live2d-widget/assets/waifu.min.css?v=1.4.2",
        rel: "stylesheet",
        type: "text/css"
    }).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span><span class="fui-cross"></span></div></div>');
    $.ajax({
        url: '/live2d-widget/assets/waifu-tips.min.js?v=1.4.2',
        dataType: "script",
        cache: true,
        async: false
    });
    $.ajax({url: '/live2d-widget/assets/live2d.min.js?v=1.0.5', dataType: "script", cache: true, async: false});

    // 获取当前服务器ip地址
    function getRootPath() {
        //获取当前网址，
        var curPath = window.document.location.href;
        //获取主机地址之后的目录，
        var pathName = window.document.location.pathname;
        var pos = curPath.indexOf(pathName);
        //获取主机地址
        var localhostPaht = curPath.substring(0, pos);
        //获取带"/"的项目名，
        var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
        return (localhostPaht);
    }

    live2d_settings['modelAPI'] = myLive2dApi;

    /* 可直接修改部分参数 */
    live2d_settings['hitokotoAPI'] = 'hitokoto.cn';  // 一言 API
    live2d_settings['modelId'] = 15;                  // 默认模型 ID
    live2d_settings['modelTexturesId'] = 12;          // 默认材质 ID

    /*模型切换模式*/
    live2d_settings['modelStorage'] = true;         // 记录 ID (刷新后恢复)，可选 true(真), false(假)
    live2d_settings['modelRandMode'] = 'rand';     // 模型切换，可选 'rand'(随机), 'switch'(顺序)
    live2d_settings['modelTexturesRandMode'] = 'switch';       // 材质切换，可选 'rand'(随机), 'switch'(顺序)

    /*提示消息选项*/
    live2d_settings['showHitokoto'] = true;         // 显示一言
    live2d_settings['showF12Status'] = true;         // 显示加载状态
    live2d_settings['showF12Message'] = false;        // 显示看板娘消息
    live2d_settings['showF12OpenMsg'] = false;         // 显示控制台打开提示
    live2d_settings['showCopyMessage'] = true;         // 显示 复制内容 提示
    live2d_settings['showWelcomeMessage'] = true;         // 显示进入面页欢迎词

    /*看板娘样式设置*/
    live2d_settings['waifuSize'] = '280x250';    // 看板娘大小，例如 '280x250', '600x535'
    live2d_settings['waifuTipsSize'] = '250x70';     // 提示框大小，例如 '250x70', '570x150'
    live2d_settings['waifuFontSize'] = '17px';       // 提示框字体，例如 '12px', '30px'
    live2d_settings['waifuToolFont'] = '17px';       // 工具栏字体，例如 '14px', '36px'
    // live2d_settings['waifuToolLine'] = '20px';       // 工具栏行高，例如 '20px', '36px'
    live2d_settings['waifuToolTop'] = '-37px'         // 工具栏顶部边距，例如 '0px', '-60px'
    live2d_settings['waifuMinWidth'] = '768px';      // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
    live2d_settings['waifuEdgeSide'] = 'left:0';     // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
    live2d_settings['waifuDraggable'] = 'disable';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
    live2d_settings['waifuDraggableRevert'] = true;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)

    /*其他杂项设置*/
    live2d_settings['l2dVersion'] = '1.0.0';        // 当前版本
    live2d_settings['l2dVerDate'] = '2021.9.1'; // 版本更新日期
    live2d_settings['homePageUrl'] = getRootPath();       // 主页地址，可选 'auto'(自动), '{URL 网址}'
    live2d_settings['aboutPageUrl'] = 'https://www.fghrsh.net/post/123.html';   // 关于页地址, '{URL 网址}'
    live2d_settings['screenshotCaptureName'] = 'live2d.png'; // 看板娘截图文件名，例如 'live2d.png'

    // 判断是否在手机上打开此网站
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //     $(".waifu-tool").attr("style","margin-top:-50px");
    //     // console.log("this is a mobile");
    //     /*看板娘样式设置*/
    //     live2d_settings['waifuSize'] = '200x180';    // 看板娘大小，例如 '280x250', '600x535'
    //     live2d_settings['waifuTipsSize'] = '175x49';     // 提示框大小，例如 '250x70', '570x150'
    //     live2d_settings['waifuFontSize'] = '10px';       // 提示框字体，例如 '12px', '30px'
    //     live2d_settings['waifuToolFont'] = '17px';       // 工具栏字体，例如 '14px', '36px'
    //     live2d_settings['waifuToolLine'] = '30px';       // 工具栏行高，例如 '20px', '36px'
    //     live2d_settings['waifuToolTop'] = '-37px';         // 工具栏顶部边距，例如 '0px', '-60px'
    //     live2d_settings['waifuMinWidth'] = '100px';      // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
    //     live2d_settings['waifuEdgeSide'] = 'left:0';     // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
    //     // live2d_settings['waifuDraggable'] = 'axis-x';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
    //     live2d_settings['waifuDraggableRevert'] = true;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)
    // }


    /* 在 initModel 前添加 */
    initModel('/live2d-widget/assets/waifu-tips.json');
} catch (err) {
    console.log('[Error] JQuery is not defined.')
}