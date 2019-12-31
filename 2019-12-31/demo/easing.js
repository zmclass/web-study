// 缓动公式
const easing = {
	// 匀速
	linear(timeFraction) {
	  return timeFraction
	},
	// 加速运动 n 次幂
	quad(timeFraction) {
	  return Math.pow(timeFraction, 2)
	},
	cubic(timeFraction) {
	  return Math.pow(timeFraction, 3)
	},
	quart(timeFraction) {
	  return Math.pow(timeFraction, 4)
	},
	quint(timeFraction) {
	  return Math.pow(timeFraction, 5)
	},
	//圆弧
	circ(timeFraction) {
	  return 1 - Math.sin(Math.acos(timeFraction));
	},
	// 弓箭射击
	back(timeFraction,x = 1.5) {
  		return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
	},
	//弹跳
	bounce(timeFraction) {
	  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
	    if (timeFraction >= (7 - 4 * a) / 11) {
	      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
	    }
	  }
	},
	//伸缩动画
	elastic(timeFraction,x = 1.5) {
	  return Math.pow(2, 10 * (timeFraction- 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
	},
	
	//
	easeOut(timing) {
	  	return function(timeFraction) {
	    	return 1 - timing(1 - timeFraction)

		}
	},
	easeInOut(timing) {
	  return function(timeFraction) {
	    if (timeFraction < .5)
	      return timing(2 * timeFraction) / 2;
	    else
	      return (2 - timing(2 * (1 - timeFraction))) / 2;
	  }
	}
}







