'use strict';
angular.module('angular.media')
  .provider('mediaQueries', function () {

    var preDefinedQueries = {
      'phone': '(max-width:480px)',
      'tablet': '(min-width:481px) and (max-width:979px)',
      'laptop': '(min-width:980px) and (max-width:1279px)',
      'desktop': '(min-width:1280px)'
    };

    this.$get = function () {
      return preDefinedQueries;
    };

    this.setPreDefinedQueries = function (queries) {
      this.shortcuts = angular.extend(preDefinedQueries, queries);
    };
  });
