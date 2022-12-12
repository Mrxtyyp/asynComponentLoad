# asynComponentLoad
异步组件加载
### 方式一：amd
amd 格式也是一种模块化方案，这里我们选择知名度比较高的 require.js 作为 amd 模块加载器。
1. 打包：组件代码打包为 umd 或 amd 格式，打包时配置 Webpack externals，使打包产物不包含公共的依赖；
2. 上传：打包的组件 js 上传到 cdn；
3. 加载&注册：在需要使用组件时，用 requirejs 获取组件，并进行注册。