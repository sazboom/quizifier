describe("Question", function(){
  
  beforeEach(function() {
    answer = new Answer(
      { "id": 1, "selected": true}
    );
    question = new Question(
      { "id": 1, "text": "1 + 1 = 2", "answer": answer}
    );
  });

  it('should have an answer of true', function(){
    expect(question.correctAnswer()).toEqual(true);
  })

  it('should have text', function(){
    expect(question.get('text')).toEqual('1 + 1 = 2');
  })

  it('should record an answer', function(){
    question.recordAnswer('bob');
    expect(question.get('recordedAnswer')).toEqual('bob');
  })

  it('should check recorded answer against correct answer', function(){
    question.recordAnswer(true);
    expect(question.answeredCorrectly()).toEqual(true);
  })

  it('should check recorded answer against incorrect answer', function(){
    question.recordAnswer(false);
    expect(question.answeredCorrectly()).toEqual(false);
  })

})