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
    function reverseString(str){

        return str.split("").reverse()
        //return [...str].reverse()
        //return Array.from(str).reverse()

    }        
    

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
            // 排序
        //  asc   正序 
        //  desc  倒序
        function arraySort(arr,type){

            if(typeof type === "undefined") {
                type = "asc"
            }
            arr.sort(function(a,b){
                if(type === "asc"){
                    return a - b
                }
                return b - a
            })
            return arr
        }


    

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
function getAverageAge(arr){
            //let sum = 0; //83

            // for(let i = 0;i < arr.length;i++){
            //  //    0    25
            //  //    25    30
            //  //    55    28
            //  sum = sum + arr[i]['age']
            // }


            // for(let {age} of arr){

            //  sum += age
            // }



            //return (sum / arr.length).toFixed(2)
            //
            
            return ((arr.reduce(function(sum,{age},index){
                    return sum + age
                },0)) / arr.length).toFixed(2)

            // console.log(m)

    //      sum   item    result
    // call 1   0       25     25
    // call 2   25      30     55
    // call 3  55     28      83

```

# 题10
```
    返回数组除最后一个之外的所有元素
    eg: [1,2,3]) => [1,2]
    arr.slice(0,-1)
```



# 题11
```
    将数组块划分为指定大小的较小数组
    
    function chunk(arr,size){
        return Array.from(
            {
                length: Math.ceil(arr.length / size)
            },
            function(item,index) {

                return arr.slice(index,index + size)

            }

        )
    }
    eg: chunk([1,2,3,4,5], 2) => [[1,2],[3,4],[5]]

```
# 题12
```
    计算数组中值的出现次数
    eg:[1,1,2,1,2,3] 1  => 3    或者0
    
    function getCount(arr,v){
        // let count = 0;
        // for(let value of arr){
        //  if(value === v) {
        //      count++
        //  }
        // }
        // return count
        // 
        
        return arr.reduce(function(count,item,index){

            if(item === v) {
                return count + 1
            }
            return count
        },0)         
    }




```

# 题13
```
    返回两个数组中存在的元素的列表。
    eg: [1,2,3] [4,3,2] => [2,3]
    function getCommonElment(arr1,arr2){
        // const arr = []

        // for(let value of arr1){
        //  if(arr2.includes(value)){
        //      arr.push(value)
        //  }
        // }
        // return arr
        
        return arr1.filter(function(item,index){

            //return arr2.includes(item)
            
            return new Set(arr2).has(item)
        })
    }

    

```
# 题14
```
    返回两个数组中不存在元素的列表
    eg: [1,2,3] [1,2,4] => [3,4]
    
    function getElment(arr1,arr2){
        
        return [...arr1.filter(function(item,index){
            return !arr2.includes(item)
        }),

        ...arr2.filter(function(item,index){
            return !arr1.includes(item)
        }) ]

    }
    


```

# 题15
```
    返回在两个数组中的任意一个中存在的每个元素
    [1,2,3], [4,3,2]  => 1 2 3 4

    //console.log([...new Set([...arr1,...arr2])])

    console.log(Array.from(new Set([...arr1,...arr2])))

```
# 题16
```
    将字符串截断为指定长度。 
    并将...追加到末尾或原始字符串
    "zmktweb",3 => zmk....
    "zmktweb",7 => zmktweb
    function splitStr(str,num){

            if(str.length <= num){
                return str
            }

            // 3    7

            //return str.slice(0,num).padEnd(str.length,".")

            return `${str.slice(0,num)}${".".repeat(str.length - num)}`


    }

```
