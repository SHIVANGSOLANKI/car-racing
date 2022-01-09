class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionx = 0;
    this.positiony = 0;
  }
readpc()
{
    database.ref("playerCount").on("value",function(data)
    {
      mypc = data.val()
    })
    
}
  updatepc(count)
  {
    database.ref("/").update
    ({
       playerCount:count
    })
  }
  addplayer()
  {
    var playerindex = "players/player"+this.index
    if(this.index === 1)
    {
      this.positionX = width/2 - 100
    }
    else
    {
      this.positionX = width/2 + 100
    }
    database.ref(playerindex).set({
      name:this.name,
      positionx:this.positionx,
      positiony:this.positiony
    })
  }
  static getallplayerinfo()
  {
    database.ref("players").on("value",function(data)
    {
      allplayers = data.val()
    })
  }
  update ()
  {
    var playerindex = "players/player" + this.index
    database.ref(playerindex).update
    ({
       positionx:this.positionx,
       positiony:this.positiony
    })
  }
}
