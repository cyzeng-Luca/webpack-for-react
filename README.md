

-------------------

### 如何使用？
``` node
	yarn start
```

### 项目结构
#### ROOT目录
| 文件结构 | 功能 | 说明 |
| :-------- | --------:| :--: |
| build  | webpack配置文件 |  目前实现了DEV环境  |
| mock     |   json-server文件| -   |
| src      |    项目代码 | - |
| .babelrc      |    babel | - |
| .eslintrc      |    eslint|  -|
| ...      |  ...  | ... |
#### src目录
| 文件结构 | 功能 | 说明 |
| :-------- | --------:| :--: |
| assets  | 资源文件 |  fonts/img/svg  |
| page     |   项目代码| -   |
| routes     |    路由 | - |
| shared     |    公共组件或者方法|  - |
| App.jsx      |  入口文件  | ... |
| configureStore.js     |  redux配置 | ... |
| index.html     |  index模板  | ... |
| index.jsx     |  入口文件  | ... |
| reducers.js     | redux配置  | ... |

> **注意：**认为代码行中**FIXME**为可优化选项。

### 主要文件说明
- Trigger.jsx：Popup组件主要依赖文件，该组件抽象了click等点击事件，可以实现任意嵌套组件实现点击空白关闭功能；
- BaseComponent：React继承class，包含了shouldComponentUpdate对比方法，优化render渲染次数；








