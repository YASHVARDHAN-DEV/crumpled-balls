class paper{
    constructor(x,y,r){
        var options={
            isStatic : false,
            restitution : 0.5,
            friction : 80,
            density : 1.5
        }
        this.r=r;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y)
        rectMode(CENTER)

        fill(200)
        imageMode(CENTER)

        image(this.image,0,0,this.r)
        pop()
    }
}