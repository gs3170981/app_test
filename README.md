# react native 模板

1. feat: 基础目录 & 样板
2. feat: className插件（否则只能在dom上写style）×（ts不支持，并且区别一下也好）

3. feat: less
> https://www.npmjs.com/package/react-native-less-transformer?activeTab=readme

4. feat: 路径别名（less不支持）
> https://www.npmjs.com/package/babel-plugin-root-import

5. feat: storage
> https://github.com/sunnylqm/react-native-storage

6. feat: redux（依赖storage，所有数据都是持久化）
> https://github.com/Yasser-G/react-native-redux

7. feat: navigation（导航跳转，社区主推）
> https://reactnavigation.org/docs/navigating

8. feat: icon（图标，需要额外配置）
``` ts
// android/app/build.gradle

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
antd注意要改为小写，并取消轮毂之类的描述词，如何使用：
> https://reactnativeelements.com/docs/components/icon

8. feat: svg支持
> https://github.com/software-mansion/react-native-svg?tab=readme-ov-file






5. feat: 调试（react-devtools）
> https://github.com/facebook/react/blob/main/packages/react-devtools/README.md#the-react-tab-shows-no-components
