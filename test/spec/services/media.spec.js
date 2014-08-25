/**
 * Created by Ofir_Dagan on 8/25/14.
 */
'use strict';

describe('Service: media', function () {

  var $media;
  beforeEach(function () {
    module('angular.media');
    inject(function (_$media_) {
      $media = _$media_;
    });
  });

  it('should support raw queries', inject(function ($window) {
    $window.matchMedia = function () {
      return {
        matches: true
      };
    };
    expect($media.raw('(max-width:170px)')).toBe(true);
  }));

  it('should support predefined media queries', inject(function ($window, mediaQueries) {
    $window.matchMedia = function (query) {
      return {
        matches: query === mediaQueries.phone
      };
    };
    expect($media.query('phone')).toBe(true);
    expect($media.query('tablet')).toBe(false);
  }));

  it('should get predefined media queries statuses', function () {
    expect($media.predefinedQueriesStatus).toEqual({
      phone : false,
      tablet : false,
      laptop : false,
      desktop : false,
      phone2 : false
    });
  });

//  iit('should broadcast mediaChanged event with predefined media queries in case one of the predefined queries changed', inject(function ($window, mediaQueries, $rootScope, $timeout) {
//    var mediaSpy = jasmine.createSpy('mediaChanged');
//    $rootScope.$on('mediaQueriesChanged', mediaSpy);
//    console.log($media.predefinedQueriesStatus);
//
//    window.matchMedia = function() {
//      return {
//        matches: true
//      };
//    };
//
//    $window.innerWidth = 1700;
//    console.log($window.innerWidth)
//    angular.element($window).triggerHandler('resize');
//
//   $timeout.flush();
//    console.log($media.predefinedQueriesStatus);
//    expect(mediaSpy.callCount).toBe(1);
//
//  }));
});