class Question {
    constructor(){
      this.option1 = createButton("1.Canada");
      this.option2 = createButton("2.USA");
      this.option3 = createButton("3.Russia");
      this.option4 = createButton("4.India");
    }
  
    display(){
     var title = createElement('h2'); 
     title.html("MyQuiz Game");
     title.position(350,0);

     var question = createElement('h2'); 
     question.html("Question:- Which is the world's largest country?");
     question.position(150,80);

     this.option1.position(150,140);
     this.option2.position(150,160);
     this.option3.position(150,180);
     this.option4.position(150,200);

     
    this.option1.mousePressed(()=>{
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

      var wrong = createElement('h2');
      wrong.html("Wrong Option :(")
      wrong.position(200,600);
    });
    this.option2.mousePressed(()=>{
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

      var wrong = createElement('h2');
      wrong.html("Wrong Option :(")
      wrong.position(200,600);
    });
    this.option3.mousePressed(()=>{
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

      var wrong = createElement('h2');
      wrong.html("Correct Option :)")
      wrong.position(200,600);
    });
    this.option4.mousePressed(()=>{
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

      var wrong = createElement('h2');
      wrong.html("Wrong Option :(")
      wrong.position(200,600);
    });




    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        var contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          var contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        var question = new Question()
        question.display();
      }
    }
}
  