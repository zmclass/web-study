class Slide{
	constructor(id,option = {imgs : [],interval : 2000}){
		this.container = document.getElementById(id);
		this.option = option;
		//存储 控件的状态逻辑
		this.slideHandles = [];
		this.container.innerHTML = `<ul>${this.render()}</ul>`
		this.items = this.container.querySelectorAll(".slide-list__item");
		// 执行 添加状态的逻辑
	    this.slideHandles.forEach(handler => {
	      handler(nextIndex);
	    });	

	    this.slideTo(0)

	}
	//
	render(){
		console.log(this.option)
		return this.option.imgs.map((item,index)=>{
			return `<li class = "slide-list__item"><img src= "${item}"></li>`
		}).join("")
	}
	// 注册插件的方法
	registerPlugins(...plugins){

		const div = document.createElement("div");
		div.classList.add("slide-list__plugin");
		this.container.appendChild(div);
		plugins.forEach(plugin => {
			// 渲染html结构
			div.appendChild(plugin.render(this.option.imgs));
			// 执行动作
			plugin.handler(this);
		});
	}
	// 注册 添加状态的逻辑
	addSlideListener(handler){
		this.slideHandles.push(handler);
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
		// 获取下一次要展示的图片节点
		const nextItem = this.items[nextIndex];
		if(currentItem){
			// 取消当前的图片，状态
			currentItem.classList.remove("slide-list__item--selected")
		}
		// 给下张图片 添加状态
		nextItem.classList.add("slide-list__item--selected")
		// 执行 添加状态的逻辑
	    this.slideHandles.forEach(handler => {
	      handler(nextIndex);
	    });	
	
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
		console.log(this.option.interval)
		this.timer = setInterval(()=>{
			this.next()
		},this.option.interval)
	}
	stop(){
		clearInterval(this.timer)
	}


}