class Chain{
    constructor(bA,bB){
        var ops={
            bodyA:bA,
            bodyB:bB,
            length:50,
            stiffness:0.05
        }

        this.chain = constraint.create(ops);
        World.add(world,this.chain);
    }

    display(){
        push();
       var pointA = this.chain.bodyA.position;
       var pointB = this.chain.bodyB.position;
       strokeWeight(4); 
       stroke("orange");
       line(pointA.x,pointA.y,pointB.x,pointB.y);
       pop();
    }

}