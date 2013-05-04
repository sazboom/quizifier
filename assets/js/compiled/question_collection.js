(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.QuestionCollection = (function(_super) {
    __extends(QuestionCollection, _super);

    function QuestionCollection() {
      _ref = QuestionCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    QuestionCollection.prototype.model = QuestionModel;

    QuestionCollection.prototype.currentQuestion = function() {
      if (this._currentQuestion) {
        return this._currentQuestion;
      } else {
        return this.first();
      }
    };

    QuestionCollection.prototype.setCurrentQuestion = function(q) {
      return this._currentQuestion = q;
    };

    QuestionCollection.prototype.nextQuestion = function() {
      var index;

      index = _.indexOf(this.models, this.currentQuestion());
      if (index < (this.length - 1)) {
        return this.at(index + 1);
      } else {
        return this.currentQuestion();
      }
    };

    QuestionCollection.prototype.moveQuestion = function() {
      if (this.currentQuestion() === questions.last()) {
        console.log('Test Completed');
        return $('#questions-container').fadeOut(function() {
          return $('#summary-container').fadeIn();
        });
      } else {
        this.currentQuestion().view.destroy();
        this.setCurrentQuestion(this.nextQuestion());
        return this.currentQuestion().view.render();
      }
    };

    QuestionCollection.prototype.associateAnswers = function(answers) {
      return _.each(this.models, function(q) {
        return q.answer = answers.get(q.get('id'));
      });
    };

    return QuestionCollection;

  })(Backbone.Collection);

}).call(this);
