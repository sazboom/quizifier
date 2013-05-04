(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.AnswerModel = (function(_super) {
    __extends(AnswerModel, _super);

    function AnswerModel() {
      _ref = AnswerModel.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AnswerModel.prototype.correctAnswer = function() {
      return this.get('selected');
    };

    return AnswerModel;

  })(Backbone.Model);

}).call(this);
