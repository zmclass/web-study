class Slide{

	constructor(id,imgs = [],interval = 2000){
		this.container = document.getElementById(id);

		const newImgs = imgs.map((item,index)=>{
			if(index === 0) {

				return `<li class = "slide-list__item slide-list__item--selected"><img src= "${item}"></li>`
			}
			return `<li class = "slide-list__item"><img src= "${item}"></li>`
		})

		console.log(newImgs)

		this.container.innerHTML = `<ul>${newImgs.join("")}</ul>`
		this.interval = interval;
		this.items = this.container.querySelectorAll(".slide-list__item");



		// this.buttons = this.container.querySelectorAll(".slide-list__controller-button");
		// const controller = this.container.querySelector(".slide-list__controller");
		// controller.addEventListener("mouseover",(e)=>{
		// 	const nextItemIndex = getControllerIndex(e.target);
		// 	if(nextItemIndex > -1){
		// 		// 停止轮播
		// 		this.stop();
		// 		this.slideTo(nextItemIndex);
		// 	}
		// })
		// controller.addEventListener("mouseout",(e)=>{
		// 	const nextItemIndex = getControllerIndex(e.target);
		// 	if(nextItemIndex > -1){
		// 		this.autoStart();
		// 	}
		// })
		// function getControllerIndex(target){
		// 	const currentItem = target;
		// 	const nextItemIndex = Array.from(this.buttons).indexOf(currentItem);
		// 	return nextItemIndex
		// }
		// // 获取上一张按钮
		// const previousButton =  this.container.querySelector(".slide-list__previous")
		// previousButton.addEventListener("click",(e)=>{
		// 	this.stop();
		// 	this.previous();
		// 	this.autoStart();
		// 	e.preventDefault();
		// })
		// // 获取下一张按钮
		// const nextButton =  this.container.querySelector(".slide-list__next");
		// // 给下一张按钮绑定事件
		// nextButton.addEventListener("click",(e)=>{
		// 	this.stop()
		// 	this.next()
		// 	this.autoStart()
		// 	e.preventDefault()
		// })

	}

	// 注册插件的方法
	
	registerPlugins(...plugins){
		plugins.forEach(plugin => plugin(this));
	}


	getCurrentItem(){
		return this.container.querySelector(".slide-list__item--selected")		
	}
	getCurrentItemIndex(){
		return Array.from(this.items).indexOf(this.getCurrentItem())
	}
	getItemsLength(){
		return this.items.length
	}
	slideTo(nextIndex){

		// 获取当前展示的图片 节点
		const currentItem = this.getCurrentItem();
		// // 获取当前小圆点的节点
		const currentButton = this.buttons[this.getCurrentItemIndex()]
		// 获取下一次要展示的图片节点
		const nextItem = this.items[nextIndex];
			// 取消当前的图片，状态
		currentItem.classList.remove("slide-list__item--selected")
		
		// 给下张图片 添加状态
		nextItem.classList.add("slide-list__item--selected")
		// 获取下一次要展示的小圆点节点
		if(this.buttons){
			const nextButton = this.buttons[nextIndex];
			// 取消 当前小圆点的状态 
			currentButton.classList.remove("slide-list__controller-button__selected")
			// 给下个小圆点 添加状态
			nextButton.classList.add("slide-list__controller-button__selected") 
		}
		
	}
	next(){
		const nextIndex = (this.getCurrentItemIndex() + 1) % this.getItemsLength();

		this.slideTo(nextIndex)
	}
	previous(){
		const nextIndex = (this.getItemsLength() +this.getCurrentItemIndex() - 1) % this.getItemsLength();
		this.slideTo(nextIndex)
	}
	autoStart(){
		this.timer = setInterval(()=>{
			this.next()
		},this.interval)
	}
	stop(){
		clearInterval(this.timer)
	}


}