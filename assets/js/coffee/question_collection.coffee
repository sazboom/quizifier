 class window.QuestionCollection extends Backbone.Collection

  model: QuestionModel,

  currentQuestion : ()->
    if this._currentQuestion
      this._currentQuestion;
    else 
      this.first();
    
  setCurrentQuestion : (q)->
    this._currentQuestion = q

  nextQuestion : ()->
    index = _.indexOf(this.models, this.currentQuestion())
    if index < (this.length - 1) 
      this.at(index + 1)
    else
      this.currentQuestion();

  moveQuestion : ()->
    if this.currentQuestion() == questions.last() 
      console.log('Test Completed')
      $('#questions-container').fadeOut( ()->
        $('#summary-container').fadeIn();
      );
    else 
      this.currentQuestion().view.destroy();
      this.setCurrentQuestion(this.nextQuestion());
      this.currentQuestion().view.render();

  associateAnswers : (answers)->
    _.each(this.models, (q)->
      q.answer = answers.get(q.get('id'))
    );

