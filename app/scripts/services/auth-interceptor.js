angular
  .module('app')
  .factory('AuthInterceptor', function($rootScope, $q, $session, $injector) {
    return {
      request: function (response) {
        var token = $session.get('auth').authToken
        var ignoreUrl = [
              '//maps.googleapis.com/maps/api/geocode/json'
        ]

        if (undefined !== token && jQuery.inArray(response.url, ignoreUrl) < 0) {
          response.headers['x-auth-token'] = token
        }

        if (/\/1\//.test(response.url)) {
          response.headers['x-referer'] = document.location.origin + '/' + $rootScope.$state.href($rootScope.$state.current)
        }

        return response
      },
      responseError: function (rejection) {
        var $state = $injector.get('$state');
        if (401 === rejection.status) {
          $session.purge('auth');
          $state.go('login')
        }

        return $q.reject(rejection)
      }
    }
  })