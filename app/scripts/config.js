angular
  .module('config', [])
  .provider('$config', function $configProvider() {
    var config = {
      "api_uri": "http://localhost:3000",
    }

    this.$get = function () {
      return config
    }
  })