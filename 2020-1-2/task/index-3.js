
// 插件依赖注入
class Slide{
	constructor(id,interval = 2000){
		this.container = document.getElementById(id);
		this.interval = interval;
		this.items = this.container.querySelectorAll(".slide-list__item");
		//存储 控件的状态逻辑
		this.slideHandles = [];
	}
	// 注册插件的方法
	registerPlugins(...plugins){
		plugins.forEach(plugin => plugin(this));
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
		// 取消当前的图片，状态
		currentItem.classList.remove("slide-list__item--selected")
		// 给下张图片 添加状态
		nextItem.classList.add("slide-list__item--selected")
		// 执行 添加状态的逻辑
	    this.slideHandles.forEach(handler => {
	      handler(nextIndex);
	    });	
	}
	next(){
		const nextIndex = (this.getCurrentItemIndex() + 1) % this.getItemsLength();
		console.log(nextIndex,this.getCurrentItemIndex())
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