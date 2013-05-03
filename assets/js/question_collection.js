var QuestionCollection = Backbone.Collection.extend({

  model: QuestionModel,

  currentQuestion : function(){
    if(this._currentQuestion){
      return this._currentQuestion;
    }
    else {
      return this.first();
    }
  },
  setCurrentQuestion : function(q){
    this._currentQuestion = q
  },
  nextQuestion : function(){
    index = _.indexOf(this.models, this.currentQuestion())
    if(index < (this.length - 1)){
      return this.at(index + 1)
    }
    else{
      return this.currentQuestion();
    }
  },
  moveQuestion : function(){
    if(this.currentQuestion() === questions.last()){
      console.log('Test Completed')
      $('#questions-container').fadeOut( function(){
        $('#summary-container').fadeIn();
      });
    }
    else {
      this.currentQuestion().view.destroy();
      this.setCurrentQuestion(this.nextQuestion());
      this.currentQuestion().view.render();
    }
  },

  associateAnswers : function(answers){
    _.each(this.models, function(q){
      q.answer = answers.get(q.get('id'))
    });
  }
});
