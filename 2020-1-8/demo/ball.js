class Ball {

	constructor(x,y,radius,color){
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	fill(context){
		context.save();
		context.beginPath();
		context.fillStyle = this.color
		context.arc(this.x,this.y,this.radius,0,360*Math.PI/180)
		context.fill()
		context.closePath()
	}
}