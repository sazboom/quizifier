requirejs.config({
    baseUrl: "assets/js",
    paths: { 
        /* Load jquery from google cdn. On fail, load local file. */
        jquery: ['http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min','jquery-min'],
        /* Load bootstrap from cdn. On fail, load local file. */
        bootstrap: ['http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/js/bootstrap.min','bootstrap'],
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        less: 'less-1.3.3.min',

        // Mustache.js template engine
        icanhaz: 'ICanHaz.min'


    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        'bootstrap' : ['jquery']
    }
});

require([
    'jquery', 
    'bootstrap', 
    'underscore', 
    'backbone', 
    'less', 
    'icanhaz',
    'question_model',
    'questions_collection',
    'questions',

],
function($){
    console.log("Required JavaScript libraries powered up and Online");   
    return {};
});
