// (function(){
//
//   'use strict'
//
// angular.module('appLunchChecker',[])
//   .controller('lunchCheckerController',lunchCheckerController)
//
//   lunchCheckerController.$inject = ['$scope']
//
//
//   function lunchCheckerController($scope){
//     let displayResult= "  "
//     $scope.submit = function(){
//     if($scope.lunch_menu===undefined || $scope.lunch_menu===""){
//       displayResult= " No items Entered"
//       console.log(" No items Entered ")
//     }
//     else{
//       let array=$scope.lunch_menu.split(',')
//       let itemCount=0
//       for(let i=0;i<array.length;i++){
//         if(array[i]!=""){
//           itemCount++
//         }
//       }
//
//       if(itemCount<=3){
//         displayResult= " Enjoy "
//         console.log("Enjoy")
//
//       }
//       else {
//         displayResult= " Too Much "
//         console.log("Too much")
//       }
//       console.log(itemCount)
//     }
//
//   }
//
//   $scope.message = function(){
//     return displayResult
//   }
// }
//
// })();
!function(){"use strict";function e(e){let o="  ";e.submit=function(){if(void 0===e.lunch_menu||""===e.lunch_menu)o=" Empty! ",console.log(" Enpty! ");else{let n=e.lunch_menu.split(","),l=0;for(let e=0;e<n.length;e++)""!=n[e]&&l++;l<=3?(o=" Enjoy! ",console.log("Enjoy!")):(o=" Too Much! ",console.log("Too much!")),console.log(l)}},e.message=function(){return o}}angular.module("appLunchChecker",[]).controller("lunchCheckerController",e),e.$inject=["$scope"]}();
