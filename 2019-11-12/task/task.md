[toc]
# 题一
```
    根据今天是星期几，输出相对应的内容


    如果是星期一，则输出今天全天要上课
    如果是星期二，星期三，星期四，星期五，则输出
    今天上午上课，下午练习
    如果是星期六，星期天，则输出今天要休息

```
# 题二
```
    创建一个对象，用来描述人物，
    属性：name，age,from，
    会打篮球
    用字面量 和 类 2种方法创建

```

# 题三
```
    将一个整数转换成二进制字符串，
    如果结果字符串小于 8，则在前面使用0 补足
```

# 题四
```
    var a = 1; var b = 2;

    交换2个变量值

    结果
    a = 2，b = 1

```
# 题六
```
    给定一个以秒为单位的数值，输出 天...时...分...秒 的格式
    例子 5000秒 输出为  10天 13时 30分 29秒

    const seconds = 1000000;
    const days = Math.floor(seconds / (60 * 60 * 24));
    let leftSeconds = Math.floor(seconds % (60 * 60 * 24));
    const hours = Math.floor(leftSeconds / (60 * 60));
    leftSeconds = Math.floor(leftSeconds % (60 * 60));
    const minutes = Math.floor(leftSeconds / 60);
    leftSeconds = Math.floor(leftSeconds % 60);
    console.log(days + '天' + hours + '时' + minutes + '分' + leftSeconds + '秒')

```

# 题七
```
    数组 中 每一项都是整数，返回 这个数组的最大值和最小值

```
# 题八
```
    [1,2,2,3]
    数组中每一项都是整数， 将里面的重复 值 去除

    function unique(arr) {


    }

```

# 题九
```
    数组中每一项都是不重复的整数，

    定义一个函数，1个参数

    找出，数组的中2个数 的和 为 传入的参数值

    返回值为，找到的这2个数的 索引值


    function twoSum(nums, target) {
        for (var i = 0, l = nums.length; i < l; i++) { 
            for(var j = i + 1; j < l; j++) {
                if (nums[i] + nums[j] === target) { return [i, j];
            } 
        }
    }

```

# 题十
```

    /**
    * 判断闰年函数
    * @param {number} year 要判断的年份
    * @return {bool} 返回布尔值
    * 其实只要满足下面几个条件即可
    * 1.能被4整除且不能被100整除的为闰年
    * 2.能被400整除的是闰年
    */
    定义函数isLeapYear
    判断输入的年份是否为闰年

    function leapYear(year) {
        return !(year % (year % 100 ? 4 : 400)); 
    }


```


# 题十二
```
    定义函数
    返回 100 - 1000 中的随机整数
    function randomNumber(min,max){
        
    }
  
```

# 题十三
```
    定义函数
    判断传入的参数是否为字符串
 
```

# 题十四
```
    定义个函数
    第一个参数为 字符串
    第二个参数为 搜索的字符串
    在第一个参数中 找到 第二个参数 第一次出现的位置


```

# 题十五
```
    清空一个数组 
    请写出多种方法
    

```

# 题十六
```
    定义一个函数
    复制一个数组

```














