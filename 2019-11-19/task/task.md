```
    //实现迭代器
    const range = {
        from:1,
        to:5
    }

    const range = {
        from:1,
        to:5
    }

    range[Symbol.iterator] = function(){

        let currentIndex = range.from;
        let lastIndex = range.to;

        return {

            next:function(){
                let done = (currentIndex > lastIndex);
                let value = !done ? currentIndex++ : undefined
                return {
                    value: value,
                    done: done
                }
            }

        }
```