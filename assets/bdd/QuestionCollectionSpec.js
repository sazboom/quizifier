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

})