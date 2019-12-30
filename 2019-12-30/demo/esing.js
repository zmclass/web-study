// 缓动公式
const easing = {
	// 匀速
	linear(per) {
	  return per
	},
	// 加速运动 n 次幂
	quad(per) {
	  return Math.pow(per, 2)
	} 
	//圆弧
	circ(per) {
	  return 1 - Math.sin(Math.acos(per));
	},
	// 弓箭射击
	back(per,x = 1.5) {
  		return Math.pow(per, 2) * ((x + 1) * per - x);
	},
	//弹跳
	bounce(per) {
	  for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
	    if (per >= (7 - 4 * a) / 11) {
	      return -Math.pow((11 - 6 * a - 11 * per) / 4, 2) + Math.pow(b, 2)
	    }
	  }
	},
	//伸缩动画
	elastic(per,x = 1.5) {
	  return Math.pow(2, 10 * (per- 1)) * Math.cos(20 * Math.PI * x / 3 * per)
	}
}


function easeIn(timing){
	return function(per) {
	 return timing(2 * per) / 2;
	}
}

// 接受缓存公式
function easeOut(timing) {
  return function(per) {
    return 1 - timing(1 - per);
  
}

// 先快后慢
function EaseInOut(timing) {
  return function(per) {
    if (per < .5)
      return timing(2 * per) / 2;
    else
      return (2 - timing(2 * (1 - per))) / 2;
  }
}

