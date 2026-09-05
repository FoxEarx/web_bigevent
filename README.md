

# IofTV-Screen

基于 Vue + ECharts + DataV 的大屏数据可视化展示项目。

## 项目介绍

本项目是一个专为 TV 大屏设计的数据可视化展示系统，基于 [vue-big-screen](https://gitee.com/MTrun/big-screen-vue-datav) 开源框架进行开发优化。适用于智慧城市、数据中心、监控指挥中心等场景的大屏展示需求。

### 技术栈

- **前端框架**: Vue 2 + Vue-cli
- **图表库**: ECharts
- **可视化组件**: DataV
- **网络请求**: axios
- **模拟数据**: mock.js
- **构建工具**: Webpack

### 功能特性

- 📺 全屏展示模式（按 F11）
- 📐 响应式自适应缩放
- 🔄 内容滚动配置
- 🗺️ 支持中国地图及各省市区地图
- 📊 多种图表类型展示
- ⚙️ 运行时配置设置

## 项目结构

```
├── public/                      # 静态资源目录
│   ├── map-geojson/             # 地图 GeoJSON 数据
│   │   ├── china.json          # 中国地图
│   │   ├── chinaNanhai.json   # 南海地图
│   │   └── {省市区代码}.json   # 各省市地图数据
│   └── index.html              # HTML 入口
├── src/                        # 源代码目录
│   ├── api/                   # API 接口封装
│   ├── assets/                # 静态资源
│   │   ├── css/              # 样式文件
│   │   ├── iconfont/         # 图标字体
│   │   └── img/              # 图片资源
│   ├── components/            # 公共组件
│   │   ├── auto-scroll/       # 自动滚动组件
│   │   ├── echart/           # ECharts 封装
│   │   ├── item-wrap/         # 边框容器组件
│   │   ├── message/          # 消息提示组件
│   │   ├── reacquire/         # 重新请求组件
│   │   └── scale-screen/      # 屏幕缩放组件
│   ├── config/                # 配置文件
│   ├── directives/           # 指令
│   ├── lib/                  # 工具函数
│   ├── mock/                 # 模拟数据
│   ├── router/               # 路由配置
│   ├── store/                # 状态管理
│   ├── utils/                # 工具函数
│   ├── views/                # 页面视图
│   │   ├── home.vue          # 主页面
│   │   ├── indexs/          # 各区域组件
│   │   ├── setting.vue      # 设置页面
│   │   └── tjfx/           # 分析页面
│   ├── App.vue
│   └── main.js
└── vue.config.js              # Vue 配置
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

项目将在 `http://localhost:8080` 启动。

### 构建生产版本

```bash
npm run build
```

## 核心组件说明

### 1. 屏幕缩放组件 (ScaleScreen)

用于实现大屏自适应缩放：

```vue