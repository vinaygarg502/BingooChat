angular.module('bingoo.directives', [])
.directive('chatName',function(){
   var directive = {};
            directive.restrict = 'E';
            directive.scope = {
               items : "=name"
            }
            directive.templateUrl = "../directives/chatName.html";
            return directive;
});
