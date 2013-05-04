Quizifier
====================

A simple 4 question Quiz Engine
---------------------

Quizifier is an attempt to make a simple True/False Quiz Engine and uses modern web application techniques

Quizifier uses the following:

* Grunt - to build the coffeescript
* LessCSS Client Mode 
* CoffeeScript
* BackBoneJS
* RequireJS
* ICanHazJS - MustacheJS engine
* Titter Bootstrap


**Note**

Quizifier uses LessCSS in Client Mode which requires Cross Site Domain access to function properly.  Google Chome does not consider local files as part of the same domain as AJAX calls.  This means that when loading Quizifier in Chrome, you either need to run the index.html through an apache connection or load Chrome with auguments allowing local file access

assuming OSX 

    '/Applications/Google Chrome.app' --new --args -allow-file-access-from-files'

