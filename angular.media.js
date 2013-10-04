angular.module('angular.media', [])
.provider('MediaQuery', function() {
    this.shortcuts = {
        'phone': '(max-width:480px)',
        'tablet': '(min-width:481px) and (max-width:979px)',
        'laptop': '(min-width:980px) and (max-width:1199px)',
        'desktop': '(min-width:1200px)'
    };

    this.$get = function() {
        var shortcuts = this.shortcuts;

        return {
            shortcuts: shortcuts
        }
    };

    this.setShortcuts = function(shortcuts) {
        this.shortcuts = shortcuts;
    };
})
.factory('Media', function() {
    return {};
})
.service('$media', ['MediaQuery', 'Media', '$rootScope', function(MediaQuery, Media, $rootScope) {
    var Media = Media;
    var shortcuts = MediaQuery.shortcuts;
    return {
        query: function(shortcut) {
            return this.raw(shortcuts[shortcut]);
        },
        raw: function(raw_query) {
            Media.value = window.matchMedia(raw_query).matches;
            window.onresize = function(){
                Media.value = window.matchMedia(raw_query).matches;
                $rootScope.$apply();
            }
            return Media.value;
        }
    }
}])
.run(['$rootScope', '$media', function($rootScope, $media) {
    $rootScope.$media = $media;
}]);
