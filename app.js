(function(){

  'use strict'

angular.module('appLunchChecker',[])
  .controller('lunchCheckerController',lunchCheckerController)

  lunchCheckerController.$inject = ['$scope']


  function lunchCheckerController($scope){
    let displayResult= "  "
    $scope.submit = function(){
    if($scope.lunch_menu===undefined || $scope.lunch_menu===""){
      displayResult= " No items Entered"
      console.log(" No items Entered ")
    }
    else{
      let array=$scope.lunch_menu.split(',')
      let itemCount=0
      for(let i=0;i<array.length;i++){
        if(array[i]!=""){
          itemCount++
        }
      }

      if(itemCount<=3){
        displayResult= " Enjoy "
        console.log("Enjoy")

      }
      else {
        displayResult= " Too Much "
        console.log("Too much")
      }
      console.log(itemCount)
    }

  }

  $scope.message = function(){
    return displayResult
  }
}

})();
