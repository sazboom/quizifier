(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.QuestionModel = (function(_super) {
    __extends(QuestionModel, _super);

    function QuestionModel() {
      _ref = QuestionModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    QuestionModel.prototype.initialize = function() {
      return this.view = new QuestionView({
        model: this
      });
    };

    QuestionModel.prototype.recordAnswer = function(awr) {
      return this.set({
        recordedAnswer: awr
      });
    };

    QuestionModel.prototype.correctAnswer = function() {
      return this.answer.correctAnswer();
    };

    QuestionModel.prototype.answeredCorrectly = function(str) {
      return this.get('recordedAnswer') === this.correctAnswer();
    };

    return QuestionModel;

  })(Backbone.Model);

}).call(this);
