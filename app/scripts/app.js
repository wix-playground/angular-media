/**
 * Created by Ofir_Dagan on 8/24/14.
 */
'use strict';
angular.module('angular.media', ['debounce']).run(['$rootScope', '$media', function ($rootScope, $media) {
  $rootScope.$media = $media;
}]);