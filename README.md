# fleece

[![Build Status](https://travis-ci.org/flyher/fleece.svg?branch=master)](https://travis-ci.org/flyher/fleece?branch=master)
[![Release Version](https://img.shields.io/github/release/flyher/fleece.svg)](https://github.com/flyher/fleece/releases)
[![Issues](https://img.shields.io/github/issues/flyher/fleece.svg)](https://github.com/flyher/fleece/issues)
[![Software License](https://img.shields.io/github/license/flyher/fleece.svg?branch=master)](https://github.com/flyher/fleece/blob/master/LICENSE)

Fleece base on React, Typescript, D3, Package by Webpack.

You can visit this website here:

[Mirror 1](https://fleece.99diary.com)

[Mirror 2](https://www.99diary.com/fleece)

### todo list

- [x] github repos list

- [x] support local storage

- [x] support mobile screen

- [ ] programming language proportional statistics

### install

```shell
npm install
```

release

the code will release in `./dist/`

```
npm run build
```

debug

```shell
npm run start
```

Press F12 to debug

### Q&A

关联笔记: [Fleece重构笔记](https://blog.99diary.com/2021/03/02/the-refactor-for-fleece)


```
update:2021-03-03

1.将项目的 `npm run eject` 模式改为 `create-react-app`模式，便于后面升级/(ㄒoㄒ)/~~

https://create-react-app.dev/docs/getting-started

2.axios返回的 res.statusText 在firefox依然返回'OK',而在最新版`Chrome 88.0.4324.190 x64`中返回变为``空字符串, 去掉了这个判断chrome加载数据恢复正常。

3.删除以下测试生命周期：
componentWillMount -> UNSAFE_componentWillMount
componentWillReceiveProps -> UNSAFE_componentWillReceiveProps

4.引入`bootstrap`
```

Structure by [flyher/life-cycle-react](https://github.com/flyher/life-cycle-react) and [flyher/zhihu-react-native](https://www.github.com/flyher/zhihu-react-native/)

Theme by Github

[Github API](https://developer.github.com/v3/guides/getting-started/)

API for user profile: `https://api.github.com/users/<author>`

API for user repos: `https://api.github.com/users/<author>/repos?page=<pageNO>`

There has some different between `tsx` and `jsx`, i will write a blog in future to explain it.

[Tapable.plugin is deprecated. Use new API on `.hooks` instead](https://github.com/webpack/webpack/issues/6568)

### Tools

Build By Visual Studio Code

### License

Code in fleece project is licensed under the GPL
