
# thoughtworks examination


## 项目简介

现代敏敏捷软件开发实践中，有⼀一种开发实践叫“持续集成(CI)”，它要求任何时间，任何地点都可⽣生成⼀一个可部署的版本。通 常在实际开发中，开发⼈人员向代码库推送了了代码，会⾃自动触发⼀一系列列动作，包括代码检查，编译，运⾏行行测试，打包。这些 步骤通过⾃自动化的脚本交给⼀一群服务器器来运⾏行行，我们希望创建CRUISE这样⼀一个产品，可以⽅方便便的管理理这些服务器器 (Agents)，监控或设置它们的状态。

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








