# AI 原生开发者作品集展厅 (projects-showroom)

> 深度融合大语言模型 (LLM)、Custom Agents、MCP (Model Context Protocol) 协议与自动化工作流的 AI 原生开发者全景作品集展厅。

![Vercel Light Theme](https://img.shields.io/badge/Theme-Vercel%20Light-black?style=flat-square)
![React 19](https://img.shields.io/badge/React-19.0-sky?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind%20CSS-v4.0-38bdf8?style=flat-square)
![Vite 6](https://img.shields.io/badge/Vite-6.0-646cff?style=flat-square)

---

## 🌐 线上可访问体验地址

* 🚀 **GitHub Pages 在线访问地址**：[https://imgwho.github.io/projects-showroom/](https://imgwho.github.io/projects-showroom/)
* 📦 **GitHub 开源仓库**：[https://github.com/imgwho/projects-showroom](https://github.com/imgwho/projects-showroom)

---

## ✨ 核心特性

- **182 个项目案例全量索引**：涵盖 BI 报表自动化（Tableau Prep / Power BI PBIP）、SaaS 启动模板、AI Agent 智能体、数据挖掘与高并发工具。
- **79 个带效果截图预览展位**：全自动扫描匹配各项目的图片资源与设计截图，在卡片头部与方案说明弹窗中高清呈现。
- **27 个 GitHub 官方仓库直达**：自动匹配项目的 Git Origin Remote 链接，一键跳转查看源码。
- **Vercel 亮色设计规范 (Light Mode)**：采用干净纯白 `#FAFAFA`/`#FFFFFF` 背景与高对比黑字，搭配微阴影与流线型边界。
- **微软雅黑 (Microsoft YaHei) 沉浸排版**：全局统一采用微软雅黑字体，界面文案地道自然，无任何奇特字符与 Emoji。
- **⌘K / Ctrl+K 全局 Command Palette 快捷搜索**：支持键盘快捷键调出全站项目命令面板，支持模糊搜索与即时定位。

---

## 📂 项目分类架构

1. **核心开源项目 (Flagships)**：如 `cwprep` (Tableau Prep 代码生成引擎)、`cwtwb` (Tableau 工作簿代码构建库)、`Tableau Tools` 浏览器端分析套件、`迅排设计` 等已发布 PyPI / GitHub 仓库。
2. **AI Agent 与前沿探索 (AI & Agents)**：包含基于 Goose 架构的桌面端智能体、Coze 扣子工作流、FastAPI 钉钉自然语言查数据机器人、MCP 协议服务器集成等。
3. **BI 与数据智能 (Data & BI)**：包含 Power BI PBIP 仪表板复刻、Tableau Hyper 高速查询、白酒/大客户私域销售漏斗 SQL 分析与可视化。
4. **SaaS 与 Web 应用 (SaaS & Web)**：包含 TinyShip / MkSaaS 全栈启动模板、中国省份数据地图生成器、imgwho 个人主页与 EXIF 工具等。
5. **实用工具与自动化 (Automation & Utils)**：包含 Go + Excelize 毫秒级分表工具、Wails 音频高压缩率客户端、n8n 自动化流水线等。
6. **滑雪与垂直业务 (Ski & Vertical)**：包含北海道滑雪早报自动生成器、澳新中文滑雪教练门户网站等。

---

## 🛠️ 本地开发与构建

### 1. 克隆仓库与安装依赖

```bash
git clone https://github.com/imgwho/projects-showroom.git
cd projects-showroom
npm install
```

### 2. 启动本地 Dev 服务器

```bash
npm run dev
```
启动后访问 `http://localhost:5173/` 即可进行本地预览与开发调试。

### 3. 构建生产版本与本地预览

```bash
npm run build
npm run preview
```

---

## 🚀 GitHub Pages 自动化部署

本项目集成了 GitHub Actions 自动化部署工作流 (`.github/workflows/deploy.yml`)。任何对 `main` / `master` 分支的提交都会自动触发 Node 20 环境构建，并秒级部署至 `gh-pages` 线上服务器。

---

## 📄 授权与许可

© 2026 Antigravity AI & imgwho. 本项目基于 MIT 许可证开源。
