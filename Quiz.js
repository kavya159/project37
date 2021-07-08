class Quiz {
  constructor(){}

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
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()
    text('result',340,50)
    Contestant.getPlayerInfo()
    if(allContestants!==undefined){
      var i=230
      for(var plr in allContestants){
        var answer='2'
        if(answer===allContestants[plr].answer)
          fill ('green')
          else
            fill("red")
          i+=30
          text(allContestants[plr].name+':'+allContestants[plr].answer,250,i)
        
      }

    }
    
  }

}
