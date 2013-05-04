
class window.QuestionView extends Backbone.View
  tagName: 'div',
  events: {
    "click .answer.true": "answeredTrue",
    "click .answer.false": "answeredFalse",
  },
  render:   ()->
    console.log('Adding '+ this.model.get('text') );
    html = $(this.el).hide().append(ich.question(this.model.toJSON()));
    $('#questions-container').append(html);
    $(html).fadeIn('slow');

  destroy: ()->
    console.log('Removing '+ this.model.get('text') );
    $(this.el)
      .fadeOut('slow')
      .remove();

  answeredTrue: (e)->
    this.model.recordAnswer(true)
    this.showFeedback(e);
    this.delay 1000, ->
      questions.moveQuestion()

  answeredFalse: (e)->
    this.model.recordAnswer(false)
    this.showFeedback(e);
    this.delay 1000, ->
      questions.moveQuestion()


  delay: (ms, func) -> setTimeout func, ms 

  showFeedback: (e)->
    if this.model.answeredCorrectly()
      $(e.currentTarget)
        .parents('.question')
        .siblings('.feedback')
        .find('.btn-success')
        .removeClass('hidden');

    else
       $(e.currentTarget)
        .parents('.question')
        .siblings('.feedback')
        .find('.btn-danger')
        .removeClass('hidden');     

