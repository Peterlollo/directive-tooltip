angular.module('tip.tooltip', [])
.directive('toolTip', function(){
  return {
    restrict: 'E',
    template: '<a href="#/">Hover Over Me</a>',
    link: link
  };
  function link (scope, elem, attr){
    function showTip(){
      $(elem).next().show();
    }
    function hideTip(){
      $(elem).next().hide();
    }
    elem.on('mouseover', showTip);
    elem.on('mouseout', hideTip);
  }
});