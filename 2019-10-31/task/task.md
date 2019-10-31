[toc]
# 第一题
```
    定义一个函数
    统计给定一个数字里面所有的偶数个数

    答案
    //统计偶数个数
    function countEven(num) {
        //默认偶数个数为 0
        var count = 0;
        for(var i = 1 ;i <= num ; i++){
            //余数为0 就为偶数
            if(i % 2 === 0) {
                count++
            }
        }
        return count
    }

```
# 第二题
```
    定义一个函数
    repeat(char,n) 
    实现重复char字符串n次
    比如repeat("😊",6) 返回"😊😊😊😊😊😊"

    答案
    function repeat(char,n) {
        var str = '';
        for(var i = 1; i<=n;i++){   
            str+=char
        }
        return str
    }


```