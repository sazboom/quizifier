requirejs.config({
    baseUrl: "assets/js",
    paths: { 
        /* Load jquery from google cdn. On fail, load local file. */
        jquery: ['http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min','lib/jquery-min'],
        /* Load bootstrap from cdn. On fail, load local file. */
        bootstrap: ['http://netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/js/bootstrap.min','lib/bootstrap'],
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min',
        less: 'lib/less-1.3.3.min',

        // Mustache.js template engine
        icanhaz: 'lib/ICanHaz.min',
        question_model: 'compiled/question_model',
        question_view: 'compiled/question_view',
        answer_model: 'compiled/answer_model',
        answer_collection: 'compiled/answer_collection',
        question_collection: 'compiled/question_collection',
        questions: 'compiled/questions'


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
