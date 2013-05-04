class window.AnswerModel extends Backbone.Model
  correctAnswer : ()->
    return this.get('selected')
