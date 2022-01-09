class Game {
  constructor() 
  {

  }

  readgs()
  {
    database.ref("gameState").on("value",function(data){
      mygs= data.val()
    })
  }
  updategs(gs)
  {
    database.ref("/").update
    ({
      gameState:gs
    })
  }

  start() 
  {
    form = new Form();
    form.display();
    player = new Player();
    player.readpc()
    car1 = createSprite(width/2 - 50,height - 100)
    car1.addImage(car1Img)
    car1.scale = 0.07
    car2 = createSprite(width/2 + 100,height - 100)
    car2.addImage(car2Img)
    car2.scale = 0.07

    cars = [car1,car2]
   }
   hideforms()
   {
      form.hide()
      form.titleImg.position(40,50)
      form.titleImg.class("gameTitleAfterEffect")
   }
   movecar()
   {
      if (keyIsDown(UP_ARROW))
      {
        player.positiony += 10
        player.update()
      }
   }

   play()
   {
      this.hideforms()
      Player.getallplayerinfo()
      if (allplayers !== undefined)
      {
        image (trackImg,0,-height*5,width,height*6)

        var index = 0
        for(var plr in allplayers )
        {
          //index += 1
          var plrx = allplayers[plr].positionx
          var plry = height-allplayers[plr].positiony
          cars[index].position.x=plrx
          cars[index].position.y=plry 
          //camera.position.x = cars[index].position.x
          //camera.position.y = cars[index].position.y
        }
        this.movecar()
        drawSprites();
      }
   }

}
