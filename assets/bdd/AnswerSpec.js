describe("Answer", function(){
  
  beforeEach(function() {
    trueAnswer = new Answer(
      { "id": 1, "selected": true}
    );
    falseAnswer = new Answer(
      { "id": 1, "selected": false}
    );
  });

  it('should expect true answer to be true', function(){
    expect(trueAnswer.correctAnswer()).toEqual(true);
  })

  it('should expect false answer to be false', function(){
    expect(falseAnswer.correctAnswer()).toEqual(false);
  })


})