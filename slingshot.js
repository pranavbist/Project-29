class Slingshot{
  constructor(body1,point1){
      var options={
        bodyA:body1,
        pointB:point1,
        stiffness:0.04,
        length:10
      }
      this.slingshot2=Constraint.create(options);
      World.add(world,this.slingshot2);
  }
  display(){
    if(this.slingshot2.bodyA !== null){
      push()
      var posA=this.slingshot2.bodyA.position
      var posB=this.slingshot2.pointB
      line(posA.x,posA.y,posB.x,posB.y)
      pop()
    }
  }
  fly(){
    this.slingshot2.bodyA=null
  }
   attach(bodyA){
     this.slingshot2.bodyA=bodyA;
   }
}