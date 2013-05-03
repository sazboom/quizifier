var QuestionModel = Backbone.Model.extend({
  initialize : function(){
    this.view = new QuestionView({model:this})
  },
  recordAnswer: function(awr){
    this.set({recordedAnswer : awr})
  },
  correctAnswer : function(){
    return this.answer.correctAnswer()
  },
  answeredCorrectly: function(str){
    return this.get('recordedAnswer') === this.correctAnswer()
  }
});