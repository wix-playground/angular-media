# Angular Media ($media)

Angular Media provides you with an easy service for doing media queries in Angular, called $media.

The $media service helps you to easily do media queries in your templates and in your controllers, services and directives, via the $media.query for easy to use defaults or $media.raw methods for raw queries.


### Why use $media
Doing media queries in javascript is not terribly complicated. What $media gives you is a set of ready made defaults for ease of use (that you can configure if you want). $media also sets up a propper data binding to templates. The result of a call to $media will update as the screen resizes, freeing you from having to do watches in your scope.


### When to use $media
First of all, if you can do your media query directly in css, like if you want to hide or show elements depending on the screen size, then do so! Don't let javascript replace css.

However, if you want to do something more complex than that, then doing the media queries in javascript can help. Perhaps you want to fetch a different number of objects from your server depending on the screen size, or you might have a text that should truncate based on the screen size. In these cases css won't cut it, and $media comes in to save the day.



## How to use $media
First you will need to add the angular.media.min.js script to your html.
You can now access the angular.media app in your own apps like this.

```javascript
angular.module('myApp', ['angular.media']);
```


### $media.query
You are now ready to use the $media service, which is accessible in your templates, controllers, services and directives.

```
    <h1>In a template</h1>
    <p>We are on a phone: {{$media.query('phone')}}</p>
    <p>Try this for yourself and then resize the window. The value will update as the size of the window changes! You can use the query in expressions and send it to directives.</p>
    <p ng-hide="$media.query('phone')">This will be hidden on a phone, but don't do this! This is just to illustrate the point, in reality you should never use javascript in cases where css will do just fine.</p>

```

```javascript
// In javascript
app.service('myService', ['$media', function($media) {
    if ($media.query('phone')) {
        alert('We are viewing in phone size!');
    }
}])
```

$media.query uses a pre defined set of media queries. The starting set of default queries are:
'phone': '(max-width:480px)'
'tablet': '(min-width:481px) and (max-width:979px)'
'laptop': '(min-width:980px) and (max-width:1199px)'
'desktop': '(min-width:1200px)''


### MediaQueryProvider
The MediaQueryProvider lets you redefine the default media queries of $media. You can add, change or compleatly rewrite them as you see fit by calling MediaQueryProvider.setShortcuts(). setShortcuts takes an object like the one above that maps names to queries.

So if we wanted to rename all the default queries to s, m, l, and xl, and also add a 'print' query we would do this.

```javascript
app.config(['MediaQueryProvider', function(MediaQueryProvider) {
    MediaQueryProvider.setShortcuts({
        {
            's': '(max-width:480px)',
            'm': '(min-width:481px) and (max-width:979px)',
            'l': '(min-width:980px) and (max-width:1199px)',
            'xl': '(min-width:1200px)',
            'print': 'print'
        }
    });
}])
```


### $media.raw
You are not limited to only using the default queries. $media.raw lets you use any query you like.

```javascript
app.service('myService', ['$media', function($media) {
    if ($media.raw('(min-width:980px) and print')) {
        alert('We are viewing as print, and with min size of 980px');
    }
}])
```
