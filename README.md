# vue-cli3-vueRouter-vuetify

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 用vue-cli3和vuetify搭建项目

### 目录结构
* src > api
    接口目录，同时添加axios拦截器，给每个请求添加 loading 和 messageBox
* src > components
    组件目录，包括 loading、messageBox、sideBar、toolbar
* src > mock
    通过 axios-mock-adapter 创建 mock 服务模拟请求，以及通过 mockjs 生成模拟数据
* src > pages
    页面目录
* src > routes
    路由
* vue-config.js
    是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。