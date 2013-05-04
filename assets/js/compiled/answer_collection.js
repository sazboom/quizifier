(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.AnswerCollection = (function(_super) {
    __extends(AnswerCollection, _super);

    function AnswerCollection() {
      _ref = AnswerCollection.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AnswerCollection.prototype.model = AnswerModel;

    return AnswerCollection;

  })(Backbone.Collection);

}).call(this);
