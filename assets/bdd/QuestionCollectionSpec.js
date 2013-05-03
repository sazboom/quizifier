describe("Question Collection", function(){
  beforeEach(function() {
    questionCollection = new QuestionCollection(
      [
        { "id": 1, "text": "Tim Berners-Lee invented the Internet."},
        { "id": 2, "text": "Dogs are better than cats."},
        { "id": 3, "text": "Winter is coming."},
        { "id": 4, "text": "Internet Explorer is the most advanced browser on Earth."}
      ]
    );
  });

  it('should have two questions', function(){
    expect(questionCollection.length).toEqual(4);
  })

  it('should return the first question for current', function(){
    q = questionCollection.first();
    expect(questionCollection.currentQuestion().cid).toEqual(q.cid);

  })

  it ('should return the current question as the last question', function(){
    q = questionCollection.last()
    questionCollection.setCurrentQuestion(q)
    expect(questionCollection.currentQuestion().cid).toEqual(q.cid) 
  })

  it ('should return the next question as id 2', function(){
    q2 = questionCollection.at(1)
    expect(questionCollection.nextQuestion().cid).toEqual(q2.cid)
  })
  it ('should return the last question when currentQuestion is last', function(){
    q2 = questionCollection.at(3)
    questionCollection.setCurrentQuestion(q2)
    expect(questionCollection.nextQuestion().cid).toEqual(questionCollection.currentQuestion().cid)
  })

})