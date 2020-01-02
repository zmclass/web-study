document.addEventListener("DOMContentLoaded",function(e){
	// 获取 轮播容器
	const container = document.getElementById("my-slide")
	// 获取 轮播图片集合
	const items = container.querySelectorAll(".slide-list__item")

	//获取 小圆点 controller  容器
	const controller = container.querySelector(".slide-list__controller")
	// 获取 小圆点集合
	const buttons = container.querySelectorAll(".slide-list__controller-button")
	// 定时器变量
	let timer = null;

	// 鼠标经过事件
	controller.addEventListener("mouseover",(e)=>{
		// 停止自动轮播
		clearInterval(timer)
		const currentItem = e.target
		const nextItemIndex = Array.from(buttons).indexOf(currentItem)

		if(nextItemIndex > -1){



		}

	})

	// 鼠标离开事件
	controller.addEventListener("mouseover",(e)=>{
		autoStart()
	})

	// 获取当前图片的dom节点
	//const currentItem = document.querySelector(".slide-list__item--selected")
	// 获取当前的图片位置
	//const currentItemIndex = Array.from(items).indexOf(currentItem)

	// 获取当前的图片dom节点
	function getCurrentItem(){
		return document.querySelector(".slide-list__item--selected")
	}
	// 获取当前的图片位置
	function getCurrentItemIndex(){
		 return Array.from(items).indexOf(getCurrentItem())
	}

	// function slideTo(){




	// }

	// 多长时间轮播一张图片
	const interval = 2000;

	// 自动轮播
	function autoStart(){
		timer = setInterval(function(){
			// 获取当前展示的图片 节点
			const currentItem = getCurrentItem();
			// 获取当前小圆点的节点
			const currentButton = buttons[getCurrentItemIndex()]
			// 获取下一次要展示的图片位置
			const nextIndex = (getCurrentItemIndex() + 1) % items.length;
			// 获取下一次要展示的图片节点
			const nextItem = items[nextIndex];
			// 获取下一次要展示的小圆点节点
			const nextButton = buttons[nextIndex];

			// 取消当前的图片，状态
			currentItem.classList.remove("slide-list__item--selected")
			// 取消 当前小圆点的状态
			// 
			currentButton.classList.remove("slide-list__controller-button__selected") 

			// // 给下张图片 添加状态
			nextItem.classList.add("slide-list__item--selected")
			// 给下个小圆点 添加状态
			nextButton.classList.add("slide-list__controller-button__selected")




		},interval)
	}

	autoStart()


})


                              