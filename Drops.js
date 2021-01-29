class Drops{
    //as it's a circle we're adding radius too
	constructor(x,y,r)
	{
		var options={
            isStatic:false,
            restitution:0.1,
			friction:0.1,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display(){	
        var pos = this.body.position;
            
        var maxDrops = 100;
        for(var i=0;i<maxDrops; i++){
            Drops.push(new createDrop(random(0,400), random(0,400))
                )
        }
        fill("blue")
        ellipse(0,0,this.x, this.y, (this.r-20)/2);
	}

}

