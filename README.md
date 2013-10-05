# Angular Media ($media)

Angular Media provides you with an easy service for doing media queries in Angular, called $media. I first made this mostly for fun, but it has turned out to be really useful at times.

The $media service helps you to easily do media queries in your templates and in your controllers, services and directives. It contains two methods, $media.query for easy to use defaults and $media.raw for raw queries.


### Why use $media
There are times when you want to base something on the screen-size of the user, but you can't control it via css. Perhaps you want to fetch a different number of objects from your server depending on the screen size, or you might have a text that should truncate on a number of characters based on the screen size. In these cases you will have to turn to javascript to do the media query.

Doing media queries in javascript is not terribly complicated in and of itself, what $media gives you is a set of ready made defaults for ease of use (that you can configure if you want). $media also sets up a proper data binding to templates, the result of a call to $media will update as the screen resizes, freeing you from having to do watches in your scope. Usefull when designing things for tablets and phone where you want to differentiate between orientations.

The default queries you get are 'phone', 'tablet', 'laptop' and 'desktop' and they are called using the query method.

```
$media.query('phone')
```

These defaults correspond to the basic sizes that exists in bootstraps responsive design, with laptop being the 980px wide screen and desktop being the 1200px wide screen.


### CSS vs JS
It's always bad practice to replace css with javascript. Hiding and showing elements and things like that are best left to css media queries instead. Use $media when doing things that css can't handle.


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
    <p>Try this for yourself and then resize the window. The value will update as the size of the window changes!</p>
    <p>You can use the query inside any expression, so you could as an example trigger a ng-switch with it.</p>
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

```
{
    'phone': '(max-width:480px)',
    'tablet': '(min-width:481px) and (max-width:979px)',
    'laptop': '(min-width:980px) and (max-width:1199px)',
    'desktop': '(min-width:1200px)''
}
```

### MediaQueryProvider
The MediaQueryProvider lets you redefine the default media queries of $media. You can add, change or completely rewrite them as you see fit by calling MediaQueryProvider.setShortcuts(). setShortcuts takes an object like the one above that maps names to queries.

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

```
    <p>We are on a phone in print mode: {{$media.raw('(min-width:980px) and print')}}</p>
}])
```
