var Answer = Backbone.Model.extend({
  correctAnswer : function(){
    return this.get('selected')
  }
});