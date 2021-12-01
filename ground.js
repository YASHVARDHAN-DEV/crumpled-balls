class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,			
			restitution : 0.5,
            friction : 80,
            density : 1.5
	}
	this.ground=Bodies.rectangle(x,y,1000,15,options)
	World.add(world,this.ground);

}
	display()
	{	

			push()
			
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(this.ground.position,this.ground.position,1000,15);
			pop()
	}

	}