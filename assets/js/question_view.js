var QuestionView = Backbone.View.extend({
  tagName: 'div',
  events: {
    "click .answer.true": "answeredTrue",
    "click .answer.false": "answeredFalse",
  },
  render:   function(){
    console.log('Adding '+ this.model.get('text') );
    html = $(this.el).hide().append(ich.question(this.model.toJSON()));
    $('#questions-container').append(html);
    $(html).fadeIn('slow');
  },
  destroy: function(){
    console.log('Removing '+ this.model.get('text') );
    $(this.el)
      .fadeOut('slow')
      .remove();
  },
  answeredTrue: function(e){
    this.model.recordAnswer(true)
    this.showFeedback(e);
    setTimeout(function(){
      questions.moveQuestion()
    }, 1000);
  },
  answeredFalse: function(e){
    this.model.recordAnswer(false)
    this.showFeedback(e);
    setTimeout(function(){
      questions.moveQuestion()
    }, 1000);
  },
  showFeedback: function(e){
    if(this.model.answeredCorrectly()){
      $(e.currentTarget)
        .parents('.question')
        .siblings('.feedback')
        .find('.btn-success')
        .removeClass('hidden');
      
    }
    else{
       $(e.currentTarget)
        .parents('.question')
        .siblings('.feedback')
        .find('.btn-danger')
        .removeClass('hidden');     
    }
  }
})