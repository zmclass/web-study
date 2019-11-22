# 题1
```
    将 字符串border-left-width 转换成 borderLeftWidth
        /**
         * 将字符分割的字符串转换成 驼峰字符串
         * @param  {String} str  以 - 分割的字符串
         * @return {String} 字符串
         */
        function camelize(str){
            const arr = str.split("-"); // ["border","left","width"]

            for(let i = 1;i<arr.length;i++){
                //substr
                //subString
                //slice 推荐
                //arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
                arr[i] = `${arr[i][0].toUpperCase()}${arr[i].slice(1)}`
            }
            return arr.join("")
        }

        function camelize1(str){
            const arr = str.split("-"); // ["border","left","width"]

            for(let [i,value] of arr.entries()){

                if(i > 0) {
                    arr[i] = `${arr[i][0].toUpperCase()}${arr[i].slice(1)}`
                }

            }


            return arr.join("")
        }

        function camelize2(str){
            const arr = str.split("-"); // ["border","left","width"]

            const newArr = arr.map(function(item,index,arr){

                if(index > 0){
                    return `${item[0].toUpperCase()}${item.slice(1)}`
                }
                return item
            })


            return newArr.join("")
        }       

        const str = camelize2("border-left-width");
        console.log(str)

```
# 题2
```
    判定一个对象是否是可迭代对象

```

# 题3
```
    反转字符串
    eg :"abc" => "cba"
    


```
# 题4
```
    写一个函数 filterRange(arr, a, b) 获取一个数组 arr，查找 a 和 b 之间的元素并返回它们的数组
    该函数不应该修改原数组。它应该返回新的数组
    eg: [1,2,3,4,5] 2 4 => [4]
```


# 题5
```
    函数 filterRangeInPlace(arr, a, b) 获取一个数组 arr，并从中删除 a 和 b 区间以外的所有值。
    该函数修改原数组，没有返回值

    eg: [1,2,3,4,5] 1 4 => [2,3,4,5]
```


# 题6
```
    const arr = [5, 2, 1, -10, 8];
    倒叙排序


```

# 题7
```
    const userList = [
        { name: "张三", age: 25 },
        { name: "王五", age: 30 },
        { name: "李四", age: 28 }
    ]
    
    生成一个 names 数组， 元素为 userList的 name 属性

        const userList = [
            { name: "张三", age: 25 },
            { name: "王五", age: 30 },
            { name: "李四", age: 28 }
        ]

        const nameList = [];
        for(let i = 0;i < userList.length; i++){
            nameList.push(userList[i]['name'])
        }
        console.log(nameList)


        const nameList1 = userList.map(function(item,index){
            return item.name
        })


        const nameList2 = userList.reduce(function(pre,item,index){
            return pre.concat(item.name)
        },[])
        []

        pre item                       result
        []                        
    1   []  { name: "张三", age: 25 }   ["张三"]
    2   ["张三"]  { name: "王五", age: 30 }   ["张三","王五"]
    3   ["张三","王五"]  { name: "李四", age: 28 }  ["张三","王五","李四"]

        console.log(nameList2)
```

# 题8
```
    const userList = [
        { name: "张三", age: 25 },
        { name: "王五", age: 30 },
        { name: "李四", age: 28 }
    ]
    // 按年龄进行排序   默认是正序   “desc”。倒叙排序
    function sortByAge(){

    }

```
# 题9
```
    const userList =[
        { name: "张三", age: 25 },
        { name: "王五", age: 30 },
        { name: "李四", age: 28 }
    ]
    // 获取 年龄平均值
    function getAverageAge(){

    }

```

# 题10
```
    返回数组除最后一个之外的所有元素
    eg: [1,2,3]) => [1,2]

```



# 题11
```
    将数组块划分为指定大小的较小数组
    
    function chunk(){


    }

    eg: chunk([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]

```
# 题12
```
    计算数组中值的出现次数
    eg:[1,1,2,1,2,3] 1  => 3    或者undefined



```

# 题13
```
    返回两个数组中存在的元素的列表。
    eg: [1,2,3] [4,3,2] => [2,3]

```
# 题14
```
    返回两个数组中不存在元素的列表
    eg: [1,2,3] [1,2,4] => [3,4]
```