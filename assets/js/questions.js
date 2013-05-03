questionJSON = {
    "questions": [
        { "id": 1, "text": "Tim Berners-Lee invented the Internet."},
        { "id": 2, "text": "Dogs are better than cats."},
        { "id": 3, "text": "Winter is coming."},
        { "id": 4, "text": "Internet Explorer is the most advanced browser on Earth."}
    ]
}

answerJSON = {
    "answers": [
        { "id": 1, "selected": true},
        { "id": 2, "selected": false},
        { "id": 3, "selected": true},
        { "id": 4, "selected": false}
    ]
}

var questions = new QuestionCollection(questionJSON["questions"])
var answers = new AnswerCollection(answerJSON["answers"])

questions.associateAnswers(answers)


$( document ).ready(function() {
  questions.first().view.render();
});