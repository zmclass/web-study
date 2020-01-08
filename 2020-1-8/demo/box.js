class Box {

	constructor(x,y,width,height,color){

		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	fill(context){

		context.save()

		context.beginPath()
		context.fillStyle = this.color;
		context.fillRect(this.x,this.y,this.width,this.height)
		context.closePath()
		context.restore()

	}




}