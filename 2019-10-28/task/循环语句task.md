
[toc]
# 第一题
```
    计算100以内所有奇数的和

    var sum = 0;
    for(var i = 1; i <= 100 ; i+=2){
        sum+=i
    }

    console.log(sum)

    //函数
    function sum(num){
        var sum = 0;
        for(var i = 1; i <= 100 ; i+=2){
            sum+=i
        }
        return sum
    }

```
# 第二题
```
    写一个 for 循环，输出数字 10 的阶乘：
    阶乘计算方法是将小于等于某个数字的所有数字相乘。例如 3!，即 "3 阶乘” 为 3 * 2 * 1 = 6
    var factorial = 1；
    for(var i = 10; i >= 1; i--) {
        factorial*=i
    }

    function factorial(num){
        var factorial = 1；
        for(var i = num; i >= 1; i--) {
            factorial*=i
        }
        return factorial
    }  

```
# 第三题
```
    输出一个数的所有约数

    a % b === 0  b就是a的约数

    function allNum(num) {  
        for(var i = 1; i <= num; i++){
            if(num % i === 0){
                console.log(i)
            }
        }
    }



```
# 第四题
```
    创建一个直角三角形
    在控制台输出
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    * * * * * * 
    * * * * * * * 
    * * * * * * * * 
    * * * * * * * * * 
    * * * * * * * * * *

    function rightTriangle(num){
        debugger;
        var line = '';
        for(var i = 1; i<=num; i++){
            line+='* '
         
        }
        console.log(line)
    }

```
# 第五题
```
    找出电影院的座位

    10排座位(0 - 9) 每排 20个座位 (0 - 19)

    输出。
    第 8 排  第 17个座位
    第 8 排  第 18个座位
    第 8 排  第 19个座位


```
# 第六题
```
    输出
        *
       ***
      *****
     *******
    *********

    function triangle(num) {
        //行
        for(var r = 1; r <= num; r++){
            var line = ''
            //空格
            for(var m = 1; m <= num-r; m++){
                line+=' '
            }
            //列
            for(var c = 1; c <= 2*r-1; c++){
                line+='*'    
            }
            console.log(line)
        }

    }




```





# 第七题
```
    输出 99乘法表
        for(var i = 1; i <= 9 ; i++){
            var line = '';
            for (var j = 1; j <= i; j++) {
                line+= j+"*"+i+'='+ i * j + '\t'
            }
            console.log(line)
        }

```