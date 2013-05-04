(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.QuestionView = (function(_super) {
    __extends(QuestionView, _super);

    function QuestionView() {
      _ref = QuestionView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    QuestionView.prototype.tagName = 'div';

    QuestionView.prototype.events = {
      "click .answer.true": "answeredTrue",
      "click .answer.false": "answeredFalse"
    };

    QuestionView.prototype.render = function() {
      var html;

      console.log('Adding ' + this.model.get('text'));
      html = $(this.el).hide().append(ich.question(this.model.toJSON()));
      $('#questions-container').append(html);
      return $(html).fadeIn('slow');
    };

    QuestionView.prototype.destroy = function() {
      console.log('Removing ' + this.model.get('text'));
      return $(this.el).fadeOut('slow').remove();
    };

    QuestionView.prototype.answeredTrue = function(e) {
      this.model.recordAnswer(true);
      this.showFeedback(e);
      return this.delay(1000, function() {
        return questions.moveQuestion();
      });
    };

    QuestionView.prototype.answeredFalse = function(e) {
      this.model.recordAnswer(false);
      this.showFeedback(e);
      return this.delay(1000, function() {
        return questions.moveQuestion();
      });
    };

    QuestionView.prototype.delay = function(ms, func) {
      return setTimeout(func, ms);
    };

    QuestionView.prototype.showFeedback = function(e) {
      if (this.model.answeredCorrectly()) {
        return $(e.currentTarget).parents('.question').siblings('.feedback').find('.btn-success').removeClass('hidden');
      } else {
        return $(e.currentTarget).parents('.question').siblings('.feedback').find('.btn-danger').removeClass('hidden');
      }
    };

    return QuestionView;

  })(Backbone.View);

}).call(this);
