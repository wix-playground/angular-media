'use strict';


angular.module('angular.media').service('$media',['mediaQueries', '$rootScope', '$window', 'debounce', function (mediaQueries, $rootScope, $window, debounce) {

    var predefinedQueriesStatus = {};

    var updatePredefinedMediaQueries = function () {
      var wasMediaChanged;
      _(mediaQueries).forEach(function (query, name) {
        var oldValue = predefinedQueriesStatus[name];
        var newValue = $window.matchMedia(mediaQueries[name]).matches;
        predefinedQueriesStatus[name] = newValue;
        wasMediaChanged = wasMediaChanged || oldValue !== newValue;
      });
      if (wasMediaChanged) {
        $rootScope.$broadcast('mediaQueriesChanged', predefinedQueriesStatus);
      }
    };

    var onResize = debounce(function () {
      updatePredefinedMediaQueries();
      $rootScope.$apply();
    }, 400);

    angular.element($window).bind('resize', function () {
      onResize();
    });
    updatePredefinedMediaQueries(); //first time init


    return {
      query: function (preDefinedQuery) {
        return this.raw(mediaQueries[preDefinedQuery]);
      },
      raw: function (rawQuery) {
        return $window.matchMedia(rawQuery).matches;
      },
      predefinedQueriesStatus: predefinedQueriesStatus
    };
  }]);

