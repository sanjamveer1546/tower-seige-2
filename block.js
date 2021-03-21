class Block {
    constructor(x,y,width,height) {
      var options = {
          'isStatic':false
      }
     this.visibility=255
      
      
      this.width = width;
      this.height = height;
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
      
      
     }
    
    
     display(){
      if(this.body.speed<2.5){
         var pos =this.body.position;
        //rectMode(CENTER)
        rectMode(CENTER)
      //translate ,rotate
         rect(pos.x , pos.y, this.width, this.height);
      }
      else{
        
        World.remove(world,this.body);
        push()
        this.visibility=this.visibility-5;
        tint(255,this.visibility);
        rect(pos.x , pos.y, this.width, this.height);
        pop()
    
      }
     
  
     
    }
  };