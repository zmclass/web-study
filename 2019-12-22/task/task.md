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
let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};
编写一个函数 createTree 将嵌套的对象生成 ul/li 的嵌套列表。

```