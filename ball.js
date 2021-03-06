class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:false
        }
        this.body=Matter.Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push()
        fill("pink")
        circle(pos.x,pos.y,this.radius);
        pop();
    }

}