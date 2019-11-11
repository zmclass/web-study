#  题一
```
    时间与天数相加
    定义一个函数
    返回 相加之后的 时间戳

    function getTime(time,days){

        return new Date(time).getTime() + days * 24 * 60 * 60 * 1000

    }


    
```

# 题二
```
    获取并格式化星期
    
    定义一个函数

    返回，今天是星期几

    function week() {
        var date = new Date(),
            nWeek = date.getDay(),
            aWeek = ["日","一","二","三","四","五","六"];
           
        return "今天是星期"+aWeek[nWeek]
    }

```


# 题三
```
    计算两个日期之间相隔的天数

    定义函数
    返回 天数
    
    function getDays(time1, tiem2){
        var day = 24*60*60*1000;
        return (time1.getTime() - time2.getTime())/day;
    }


```

# 题四
```
    生成一个倒数7天的数组

    定义函数

    参数 为 随便一个日期

    返回 为 一个数组

    比如今天是10月1号，生成的数组是["9月25号","9月26号","9月27号","9月28号","9月29号","9月30号","10月1号"]

    function get(time) {
        
        var date = new Date("2019/10/1");
        var dateTime = date.getTime();
        var day = 24 * 60 * 60 * 1000;
        var arr = []

        for(var i = 0; i < 7;i++){
            
            var newTime = dateTime - day * i;

            var sDate = `${new Date(newTime).getMonth()+1}`
            
            arr.push(sDate)

        }

        
        console.log(arr)


    }

```

