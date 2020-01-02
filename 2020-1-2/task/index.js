document.addEventListener("DOMContentLoaded",function(e){
	// 获取 轮播容器
	const container = document.getElementById("my-slide");
	// 获取 轮播图片集合
	const items = container.querySelectorAll(".slide-list__item");
	//获取 小圆点 controller  容器
	const controller = container.querySelector(".slide-list__controller");
	// 获取 小圆点集合
	const buttons = container.querySelectorAll(".slide-list__controller-button");

	// 获取上一张按钮
	const previousButton =  container.querySelector(".slide-list__previous")
	// 获取下一张按钮
	const nextButton =  container.querySelector(".slide-list__next") 
	// 定时器变量
	let timer = null;
	// 多长时间轮播一张图片
	const interval = 2000;

	// 鼠标经过事件停止自动轮播
	controller.addEventListener("mouseover",(e)=>{
		const nextItemIndex = getControllerIndex(e.target)
		if(nextItemIndex > -1){
			// 停止轮播
			stop()
			slideTo(nextItemIndex)

		}

	})

	// 鼠标离开时候启动 自动轮播
	controller.addEventListener("mouseout",(e)=>{
		const nextItemIndex = getControllerIndex(e.target)
		if(nextItemIndex > -1){
			autoStart()
		}
	})
	// 获取 鼠标经过小圆点的位置
	function getControllerIndex(target){
		const currentItem = target;
		const nextItemIndex = Array.from(buttons).indexOf(currentItem);
		return nextItemIndex
	}

	// 给上一张按钮绑定事件
	previousButton.addEventListener("click",(e)=>{
		stop()
		previous()
		autoStart()
		e.preventDefault()
	
	})
	// 给下一张按钮绑定事件
	nextButton.addEventListener("click",(e)=>{
		stop()
		next()
		autoStart()
		e.preventDefault()
	})



	// 获取当前的图片dom节点
	function getCurrentItem(){
		return container.querySelector(".slide-list__item--selected")
	}
	// 获取当前的图片位置
	function getCurrentItemIndex(){
		 return Array.from(items).indexOf(getCurrentItem())
	}

	function slideTo(nextIndex){
		// 获取当前展示的图片 节点
		const currentItem = getCurrentItem();
		// // 获取当前小圆点的节点
		const currentButton = buttons[getCurrentItemIndex()]
		// 获取下一次要展示的图片节点
		const nextItem = items[nextIndex];
		// 获取下一次要展示的小圆点节点
		const nextButton = buttons[nextIndex];
		// 取消当前的图片，状态
		currentItem.classList.remove("slide-list__item--selected")
		// 取消 当前小圆点的状态 
		currentButton.classList.remove("slide-list__controller-button__selected") 
		// 给下张图片 添加状态
		nextItem.classList.add("slide-list__item--selected")
		// 给下个小圆点 添加状态
		nextButton.classList.add("slide-list__controller-button__selected")
	}
	// 下一张
	function next(){
		
		const nextIndex = (getCurrentItemIndex() + 1) % items.length;
		slideTo(nextIndex)
	
	}

	// 上一张
	function previous(){


		const nextIndex = (items.length +getCurrentItemIndex() - 1) % items.length;
		slideTo(nextIndex)


	}
	// 自动轮播
	function autoStart(){
		timer = setInterval(function(){
			// // 获取当前展示的图片 节点
			// const currentItem = getCurrentItem();
			// // 获取当前小圆点的节点
			// const currentButton = buttons[getCurrentItemIndex()]
			// 获取下一次要展示的图片位置
			// const nextIndex = (getCurrentItemIndex() + 1) % items.length;


			// slideTo(nextIndex)
			// 
			next()

		
		},interval)
	}
	// 停止定时器的方法
	function stop(){
		clearInterval(timer)
	}

	autoStart()


})


                              