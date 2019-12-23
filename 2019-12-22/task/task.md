# 1
```
    <a name="list">the list</a>
    <ul>
      <li><a href="http://google.com">http://google.com</a></li>
      <li><a href="/tutorial">/tutorial.html</a></li>
      <li><a href="local/path">local/path</a></li>
      <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
      <li><a href="http://nodejs.org">http://nodejs.org</a></li>
      <li><a href="http://internal.com/test">http://internal.com/test</a></li>
    </ul>


    改变所有链接的 style 属性，使链接变橙色。

    范围：
        href 包含有 ://
        但不是以 http://internal.com 开头。
```

# 2
```
    <ol id="elem">
      <li>Hello</li>
      <li>World</li>
    </ol>

    创建一个函数 clear(elem) 用来移除元素里的内容。

```
# 3
```
编写需要插入的文本代码 
<li>2</li><li>3</li>
插入到两个 <li> 之中：

<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>

```

# 4

```
const data =  [
  {
      label: '一级 1',
      children: [
          {
              label: '二级 1-1',
              children: [
                  {
                      label: '三级 1-1-1'
                  }
              ]
          }
      ]
  },
  {
      label: '一级 2',
      children: [
          {
              label: '二级 2-1',
              children: [
                  {
                      label: '三级 2-1-1'
                  }
              ]
          },
          {
              label: '二级 2-2',
              children: [
                  {
                      label: '三级 2-2-1'
                  }
              ]
          }
      ]
  },
  {
      label: '一级 3',
      children: [
            {
              label: '二级 3-1',
              children: [
                  {
                      label: '三级 3-1-1'
                  }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                  {
                      label: '三级 3-2-1'
                  }
              ]
            }
      ]
  }
]

```


# 5
```
  创建通知
  编写 showNotification(options) 通知函数
  通知 1.5秒后自动消失
```