class window.QuestionModel extends Backbone.Model
  initialize : ()->
    this.view = new QuestionView({model:this})
  recordAnswer: (awr)->
    this.set({recordedAnswer : awr})
  correctAnswer : ()->
    return this.answer.correctAnswer()
  answeredCorrectly: (str)->
    return this.get('recordedAnswer') == this.correctAnswer()
