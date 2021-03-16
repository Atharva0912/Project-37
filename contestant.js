class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantRef = database.ref('contestant');
      contestantRef.on("value",(data)=>{
        contestant = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
       contestant: count
      });
    }
  
    update(){
      var contestantIndex = "players/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  