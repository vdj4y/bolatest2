angular.module('starter.controllers')

.controller('DashCtrl', function($scope, $state, tabsFact, PagesUtilServ) {
tabsArray = tabsFact;
currentState = $state.current.name
currentIndex = tabsArray.indexOf(currentState)
console.log(currentState)
console.log(currentIndex)

$scope.swipeLeft = function(){
  currentIndex = PagesUtilServ.swipeLeft(tabsArray, currentIndex)

  console.log("currentIndex: " + currentIndex)
  console.log(currentState)


}
$scope.swipeRight = function(){
  currentIndex = PagesUtilServ.swipeRight(tabsArray, currentIndex)

  console.log("currentIndex: " + currentIndex)
  console.log(currentState)


}
})
