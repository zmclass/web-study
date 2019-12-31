

/**
 * 动画封装
 * @param  {Number} duration  [动画的完成时间]
 * @param  {Function} renderDOM [渲染DOM]
 * @param  {Function} timing (可选)   [动画效果]
 * @return 无返回值
 */
function animate(duration,renderDOM,timing = (timeFarction) => {return timeFarction}){
	const beginTime = performance.now();
	const requestId = requestAnimationFrame(function animate(time){
		//已经用掉的时间
		const t = time - beginTime;
		// 当前的进度
		let process = t / duration;
		if(process >= 1) {
			process = 1;
			cancelAnimationFrame(requestId);
		}
		// 动画效果
		const per = timing(process)
		// 渲染DOM
		renderDOM(per)
		// 下一次渲染
		if(process < 1){
			requestAnimationFrame(animate)
		}
		
	})

}