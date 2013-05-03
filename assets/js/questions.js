var questions = new QuestionCollection({
    "questions": [
        { "id": 1, "text": "Tim Berners-Lee invented the Internet."},
        { "id": 2, "text": "Dogs are better than cats."},
        { "id": 3, "text": "Winter is coming."},
        { "id": 4, "text": "Internet Explorer is the most advanced browser on Earth."}
    ]
})

$( document ).ready(function() {
  console.log('Loading Question Templates!');
  container = $("<div></div>");
  container.append(ich.question());
  container.append(ich.question());
  container.append(ich.question({active:true}));
  $('#questions-container').hide().append(container).fadeIn('slow');

});