class Sling{
    constructor(bA,pb){
        var ops={
            bodyA:bA,
            pointB:pb,
            length:50,
            stiffness:0.05
        }

        this.pointB = pb;
        this.sling = constraint.create(ops);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
            push();
            var pointA = this.sling.bodyA.position;
            strokeWeight(4); 
            stroke("orange");
            line(pointA.x,pointA.y,this.pointB.x,this.pointB.y);
            pop();
        }
       
    }
 
    fly(){
        this.sling.bodyA = null;
    }
}

