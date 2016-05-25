angular
  .module('app')
  .factory('$session', function $session($rootScope, $window) {
    var session = {
      data: {},
      load: function () {
        var storage = $window.localStorage, key

        try {
          for (var i = 0, l = storage.length; i < l; i++) {
            key = storage.key(i)
            session.data[key] = JSON.parse(storage.getItem(key))
          }
        } catch (err) {
          $rootScope.$emit('sessionParseError', err)
        }

        return this
      },
      get: function (key) {
        return undefined === this.data[key] ? {} : this.data[key]
      },
      set: function (key, value) {
        this.data[key] = value
        return this
      },
      save: function () {
        angular.forEach(this.data, function (value, key) {
          $window.localStorage[key] = JSON.stringify(value)
        })
        return this
      },
      purge: function (key) {
        if (key) {
          delete this.data[key]
          delete $window.localStorage[key]
        } else {
          this.data = {}
          $window.localStorage.clear()
        }
        return this
      }
    }

    return session.load()
  })