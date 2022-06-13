class Ball {
    constructor(x,y,r){
        var options = {
            restitution: 0.8,
            friction: 1.0,
            density : 1.0
        }

        this.body=Bodies.circle(x,y,r,options)
        this.radius=r
        World.add(world,this.body)

    }

    display(){
        push()
        var pos = this.body.position
        ellipseMode ("center")
        fill ("orange")
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop();
    }
}