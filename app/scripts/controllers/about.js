'use strict';

/**
 * @ngdoc function
 * @name jmlFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jmlFrontendApp
 */
angular.module('jmlFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.message = 'We are totally smart!';
  });
