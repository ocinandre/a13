class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.5,
            length: 10
        }
        this.pointB = pointB
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    display(){
        if(this.Launcher.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }
    attach(body){
        this.launcher.bodyA=null
    }
    
  
    
fly()
{
      this.launcher.bodyA=null;
}
}