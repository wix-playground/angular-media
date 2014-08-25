/**
 * Created by Ofir_Dagan on 8/25/14.
 */

'use strict';
describe('media query provider', function () {

  it('should return the default breakpoints', function () {
    module('angular.media');
    inject(function (mediaQueries) {
      expect(mediaQueries).toEqual({
        phone : '(max-width:480px)',
        tablet : '(min-width:481px) and (max-width:979px)',
        laptop : '(min-width:980px) and (max-width:1279px)',
        desktop : '(min-width:1280px)'
      });
    });
  });

  it('should give ability to override the default breakpoints', function () {
    module('angular.media');
    angular.module('angular.media')
      .config(function (mediaQueriesProvider) {
        mediaQueriesProvider.setPreDefinedQueries({phone: '(max-width:170px)'});
      });
    inject(function (mediaQueries) {
      expect(mediaQueries).toEqual({
        'phone': '(max-width:170px)',
        'tablet': '(min-width:481px) and (max-width:979px)',
        'laptop': '(min-width:980px) and (max-width:1279px)',
        'desktop': '(min-width:1280px)'
      });
    });
  });

  it('should give ability to extend the default breakpoints', function () {
    module('angular.media');
    angular.module('angular.media')
      .config(function (mediaQueriesProvider) {
        mediaQueriesProvider.setPreDefinedQueries({phone2: '(max-width:170px)'});
      });
    inject(function (mediaQueries) {
      expect(mediaQueries).toEqual({
          phone : '(max-width:170px)',
          tablet : '(min-width:481px) and (max-width:979px)',
          laptop : '(min-width:980px) and (max-width:1279px)',
          desktop : '(min-width:1280px)',
          phone2 : '(max-width:170px)'
        }
      );
    });
  });
});