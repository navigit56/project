class Umbrella{
    constructor(x,y){
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
        
          this.image = loadImage("walking_1.png");
			
display();
{
    image("walking_1.png");
}



	



    }
}