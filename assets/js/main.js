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
        icanhaz: 'ICanHaz.min',
        question_model: 'question_model',
        answer_model: 'answer_model',
        answer_collection: 'answer_collection',
        question_collection: 'question_collection',
        questions: 'questions'


    },
    shim: {
        /* Set bootstrap dependencies (just jQuery) */
        'bootstrap' : ['jquery'],
        'backbone'  : ['jquery', 'underscore'],
        'question_model' : ['backbone'],
        'question_view' : ['backbone'],
        'answer_model' : ['backbone', 'question_view'],
        'question_collection' : ['backbone', 'question_model'],
        'answer_collection' : ['backbone', 'answer_model'],
        'questions' : [
            'question_model',
            'answer_model', 
            'question_collection', 
            'answer_collection',
            'icanhaz']


    }
});

require([
    'jquery', 
    'bootstrap', 
    'underscore', 
    'backbone', 
    'less', 
    'icanhaz',
    'question_view',
    'question_model',
    'answer_model',
    'answer_collection',
    'question_collection',
    'questions',

],
function($){
    console.log("Required JavaScript libraries powered up and Online");  
    return {};
});
