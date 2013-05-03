var Question = Backbone.Model.extend({
  recordAnswer: function(str){
    this.set({recordedAnswer : str})
  },
  correctAnswer : function(){
    return this.get('answer').correctAnswer()
  },
  answeredCorrectly: function(str){
    return this.get('recordedAnswer') === this.correctAnswer()
  }
});