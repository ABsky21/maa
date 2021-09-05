// ==UserScript==
// @name          复制授权plus
// @description     管理网页剪贴板写入行为
// @version         1.8
// @include         *
// @run-at       document-end
// ==/UserScript==

!function () {
    const
    /* 等号后的数可供修改1为是 0为否 */
    needc = 0, /* 拦截时是否弹窗确认 */
    /*－－－－以下勿改－－－－*/
    key = encodeURIComponent('复制授权:执行判断');
    if (window[key]) { return; }  
    try {
        window[key] = true;
        let red = true;
        let green = false;
        let orange = false;
        function Toast(msg,duration){
        duration=isNaN(duration)?3000:duration;
        var m = document.createElement('div');
        m.innerHTML = msg;
        m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 8px;position: fixed;top: 90%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
        document.body.appendChild(m);
          setTimeout(function() {
          var d = 0.5;
          m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
          m.style.opacity = '0';setTimeout(function() { document.body.removeChild(m) }, d * 1000);
          }, duration);
        }
        function pc(e) { if (red && !(needc && confirm('网页尝试复制内容到剪贴板，是否允许？'))) { e.preventDefault(); e.stopPropagation();if (!needc) { Toast('已阻止网页写入剪贴板',500 ) }} }
        document.addEventListener('copy', (e) => pc(e), { 'passive': false, 'capture': true });
        Array.from(document.getElementsByTagName('iframe')).forEach((i) => i.contentDocument.addEventListener('copy', (e) => pc(e), { 'passive': false, 'capture': true }));

        const sw = document.createElement("div");
        sw.style = 'position:fixed!important;bottom:30%;right:10px;z-index:999999;width:14px;height:14px;opacity:0.4;border-radius:7px;background:red';
        document.body.appendChild(sw);
        sw.addEventListener('touchmove', function (e) {
            sw.style.right = sw.style.bottom = '';
            sw.style.left = (e.touches[0].clientX - 7) + 'px';
            sw.style.top = (e.touches[0].clientY - 7) + 'px';
        }, { 'passive': true });
        sw.addEventListener('click', function (e) {
            if (!orange) {
            sw.style.background = red ? 'green' : 'red';
            red = !red;
            green = !green;
            }
            else {
            sw.style.background = 'red';
            red = !red;
            orange = !orange;
            }            
        }, { 'passive': true });
        document.addEventListener('contextmenu', function (e) {
            if (!green) {
            sw.style.background = 'orange';
            red = false;
            orange = true;
            }
        }, { 'passive': true });
        document.addEventListener('copy', function (e) {
            if (orange) {
            sw.style.background = 'red';
            red = true;
            orange = false;
            }
        }, { 'passive': true });
        document.addEventListener('mousedown', function (e) {
            if (orange) {
            sw.style.background = 'red';
            red = true;
            orange = false;
            }
        }, { 'passive': true });
    } catch (err) { console.log('复制授权：', err); }
}();
