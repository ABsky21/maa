(function(){
function remove(sel) {
  document.querySelectorAll(sel).forEach( a => a.remove());
}
var g_times = 0;
function myfun() {
function removeads() {
remove(".ec_wise_ad");
remove(".se-recommend-word-list-container");
remove("#se-recommend-word-list-container");
remove('[class*="ball-wrapper"]');
remove("#page-copyright");
remove('[style="position: fixed; bottom: 0px; left: 0px; z-index: 300; width: 100%; height: 52px; background: rgb(255, 255, 255); opacity: 1; border-top: 1px solid rgb(224, 224, 224); display: flex;"]');
remove('[ad_dot_url*="http"]');
remove(".dl-banner-without-logo");
remove(".ad_result");
remove(".ad_sc");
remove('[data-text-ad="1"]');
}
removeads();
window.setTimeout(removeads);
 if(g_times >= 9999) {
   window.clearInterval(timer);
 }
 g_times ++;
}
var timer = setInterval(myfun,150);
myfun();
})();
