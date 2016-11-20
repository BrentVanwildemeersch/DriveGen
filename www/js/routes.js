angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('driveGen.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('driveGen', {
    url: '/side-menu21',
    templateUrl: 'templates/driveGen.html',
    controller: 'driveGenCtrl'
  })

  .state('driveGen.searchRide', {
    url: '/searchRide',
    views: {
      'side-menu21': {
        templateUrl: 'templates/searchRide.html',
        controller: 'searchRideCtrl'
      }
    }
  })

  .state('driveGen.addRide', {
    url: '/addRide',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addRide.html',
        controller: 'addRideCtrl'
      }
    }
  })

  .state('driveGen.myRides', {
    url: '/myrides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myRides.html',
        controller: 'myRidesCtrl'
      }
    }
  })

  .state('driveGen.myAccount', {
    url: '/myaccount',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myAccount.html',
        controller: 'myAccountCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});