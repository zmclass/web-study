[toc]
# 第一题
```
    判断一个数字是偶数还是奇数
    如果是偶数 输出"even"
    如果是基数 输出"odd"

    var num = 5;

    if(num % 2 === 0) {
        console.log('even')
    }else{
        console.log('odd')
    }


```
# 第二题
```
    如果是闰年则输出366天
    不是闰年则输出365天
    


```
# 第三题
```
    保存 每个月的天数 到一个变量中

    用到的知识点： 需要知道哪个月份有多少天
    
    var days = 0;
    var month = 1;

    if(
        month === 1 || 
        month === 3 || 
        month === 5 || 
        month === 7 || 
        month === 8 ||
        month === 10 ||
        month === 12
    ) {
        days = 31
    } else if (
        month === 4 || 
        month === 6 || 
        month === 9 || 
        month === 11 
    ) {
        days = 30
    }else {
        days = 28
    }


    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break
        default:
            days = 28
    }





```
# 第四题
```
    买衣服 选尺码 根据身高 和体重
    输出 不同身高和体重的人 穿什么尺码的衣服
    
    var height = 160;
    var weight = 50

    if(height >= 160 && height <= 170 && weight >= 50 && weight <= 60){
        console.log('m')
    } else if () {


    }



    
```

尺码 | 身高 | 体重
---|---|---
M | 160cm - 170cm | 50kg - 60kg
L | 165cm - 175cm | 60kg - 75kg
XL| 170cm - 180cm | 70kg - 80kg
XXL | 175cm - 185cm | 80kg 以上

# 第五题
```
    公司人员 整体调薪方案
    根据 工作年限 和 学历 调整工资

    高中 、 本科 、硕士 、 研究生

    工作年限 不满 1 年
        高中 增幅 10%
        本科 增幅 15%
        硕士 增幅 20%
        研究生 增幅 25%
    工作年限 不满3年 超过1年
        高中 增幅 15%
        本科 增幅 20%
        硕士 增幅 25%
        研究生 增幅 30%
    工作年限 超过 3年
        高中 增幅 20%
        本科 增幅 25%
        硕士 增幅 30%
        研究生 增幅 35%
    输出 这个人 增幅工资多少钱

    //工作年限
    var wy = 1
    var edu = '高中'
    var money = 5000;
 
    if(wy < 1) {
        
        switch(edu) {

            case '高中':
                console.log(money*0.1);
                break
            case '本科'



        }

    }




```
