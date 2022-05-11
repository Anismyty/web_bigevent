// 根目录额外设置，便于之后根目录修改
$.ajaxPrefilter(function (options) {
  options.url = "http://www.liulongbin.top:3007" + options.url;
});
