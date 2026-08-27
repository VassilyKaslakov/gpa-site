# Global Proletarian Alliance · 全球无产阶级联盟 — 主站

**Global Proletarian Alliance (GPA)** 的门户主站。列宁文库是其 **CN 区**，本站为其提供入口，未来可容纳更多语言区。

- 纯静态，无框架，无外部 CDN（零网络请求）
- **导航栏红底**：页头为品牌深红底、白字、hover 金黄（2026-08-27 改）
- 三语：`index.html`（中文）+ `index.en.html`（English）+ `index.ru.html`（Русский）
- Hero 背景有鲜红列宁名言滚动条（多行、一直向左匀速移动，各语言版本不同）
- Hero 横幅区有旗帜图片（`assets/hero-banner.jpg`）与联盟介绍，三语各一份
- 页头有「加入联盟」CTA +「列宁文库」跳转按钮
- Hero 下有关键词大字横幅（联合·解放·团结，三语版本）
- 区块标题全大写 + 红条装饰
- About 后是「要闻」双栏新闻流（占位内容，待填写）
- 浅/深主题由 `assets/gpa.js` 切换并记住偏好

> 排版借鉴白俄罗斯共产党官网（comparty.by）：页头 CTA 按钮、关键词大字横幅（仿 НАРОДОВЛАСТИЕ/СОЦИАЛИЗМ/СПРАВЕДЛИВОСТЬ）、全大写区块标题（仿 О ПАРТИИ）、双栏新闻流。

## 文件地图

| 文件 | 职责 |
|---|---|
| `index.html` | 中文主页面 |
| `index.en.html` | English 主页面 |
| `index.ru.html` | Русский 主页面 |
| `assets/gpa.css` | 全部样式（三页共享），含浅/深主题变量 |
| `assets/gpa.js` | 主题切换 + 页脚年份 |
| `assets/hero-banner.jpg` | Hero 横幅区旗帜图片 |
| `README.md` | 本文件 |

## ✏️ 在哪里加内容

> 所有占位点都带 `TODO:` 注释。在三个 HTML 里搜索 **`TODO:`** 即可逐一定位。

| 你要做的 | 文件 | 定位方式 | 操作 |
|---|---|---|---|
| 填 Hero 副标语 | 三页 | 搜 `TODO(1)` | 替换副标语文字 |
| 填「关于联盟」导语 | 三页 | 搜 `TODO(2a)` | 替换导语 |
| 填「关于联盟」正文 | 三页 | 搜 `TODO(2b)` | 替换正文段落；右侧 `.key-list` 是要点栏，可增删条目或整个删掉 |
| 改「语言区」导语 | 三页 | 搜 `TODO(3)` | 替换导语 |
| 改各语言区卡片描述 | 三页 | 搜 `TODO(4)` | 替换对应卡片描述文字 |
| 新增语言区卡片 | 三页 | 搜 `TODO(5)` | 复制任一 `region-card--soon` 卡片，改 code/name/desc；上线后改 `--active` 并补链接 |
| 填「要闻」新闻流 | 三页 | 搜 `#news` 或 `news-card` | 换头条图（`news-card__thumb`）、标题、日期与链接；右侧 `news-feed` 同理 |

> ⚠️ **三个语言版要同步改**——各页结构必须保持一致。

### 改 Hero 标题取景框
标题/副标语/按钮包在一个**半透明磨砂取景框**里（`.hero__inner`），红边圆角，把内容与背景滚动名言隔开、保证可读性。样式在 `assets/gpa.css` 搜「取景框」调：`border`（红边）、`background`（磨砂透明度）、`backdrop-filter`（模糊强度）。

### 借鉴 comparty.by 的区块
- **页头 CTA**：`.btn-header`（`加入联盟` 红底 + `列宁文库 →` 描边），链接/文案在三页 `.header-actions` 里改；样式在 `assets/gpa.css` 搜「页头 CTA」
- **关键词大字横幅**：`.keywords`（Hero 下三个大词），文字在每页 `.keywords__inner`；样式搜「关键词大字横幅」
- **区块标题**：`.section__title` 已全大写 + 红条（搜「标题下红条」）；中文无大小写，仅红条生效
- **双栏新闻流**：`.news-grid`（左头条 `.news-card` + 右动态 `.news-feed`），样式搜「要闻双栏」

### 改 Hero 横幅区
横幅图片 + 联盟介绍在每页 Hero 底部（`.hero__banner`）：`<img src="assets/hero-banner.jpg">` + `.hero__banner-caption` 里的介绍文字（三语各一份，搜 `hero__banner-caption`）。换图直接替换 `assets/hero-banner.jpg`；样式在 `assets/gpa.css` 搜「横幅区」调。

### 改标语滚动条
Hero 背景有多行鲜红列宁名言，一直向左匀速滚动（各行速度略不同以形成纵深）。文字在每页 `<section class="hero">` 里的 `.hero__ticker`，每行一个 `.hero__ticker-row`、内含 `.hero__ticker-track`（三页分别是中/英/俄列宁名言）；想加一条就复制 `<span class="ticker-item">…</span><span class="ticker-dot"></span>`。**中文页每条是两行**：`<span class="ticker-item__zh">`（中文）+ `<span class="ticker-item__sub">`（俄文 — 作者）。颜色、字号、速度、间距在 `assets/gpa.css` 搜「标语滚动条」调：`--brand-slogan`（浅/深主题各一套）、`.hero__ticker-row:nth-child(n)` 的 `animation-duration`（想完全同步就把三行时长统一）与 `font-size`/`gap`。轨道内容由 `assets/gpa.js` 对每行复制 6 组实现无缝持续滚动。

### 新增一个语言版本页（比如德文）
1. 复制 `index.en.html` → `index.de.html`
2. 改 `<html lang="de">`、`<title>`、翻译全部可见文字（含 `.hero__ticker` 标语滚动条）
3. 在 `index.html` / `index.en.html` / `index.ru.html` 头部 `.lang-switch` 的链接组里各加一条指向新页的链接
4. 在三个现有页面的页脚 `.footer-nav` 里加对应链接

### 定制主题颜色
打开 `assets/gpa.css` 搜「配色主题」一节，改 `:root`（浅色）与 `html[data-theme="dark"]`（深色）里的 `--brand` 等变量即可。
**导航栏红底**：`.site-header` 用 `--brand` 做背景，红底上的白字/白徽标/白描边按钮等对比色在 `.site-header` 后的一组覆盖规则里（hover 金黄 `#ffd84d`）。
**全局直角**：`--radius-*` 全为 `0`（按钮/卡片/徽章全方形）；想恢复圆角就改回 `--radius-sm: 6px`、`--radius-lg: 16px`、`--radius-full: 999px`。

## 🚀 部署到 GitHub Pages

目标：新仓库 **`gpa-site`** → `https://vassilykaslakov.github.io/gpa-site/`

```bash
cd C:\Users\plop0\gpa_site
git init
git config user.name  "plop0"
git config user.email "plop0@users.noreply.github.com"
git add .
git commit -m "GPA portal: bilingual static homepage"
git branch -M main
git remote add origin https://VassilyKaslakov@github.com/VassilyKaslakov/gpa-site.git
git push -u origin main
```

1. **先建仓库**：GitHub 网页 → New repository → 名称 `gpa-site`、Public、**不勾选** README
2. 执行上面的命令；push 提示输入密码时粘贴 **lenin-site 用的同一个 PAT**
3. GitHub → 该仓库 Settings → Pages → Source: *Deploy from a branch* → `main` / 根目录 → Save
4. 等约 1 分钟，访问 `https://vassilykaslakov.github.io/gpa-site/`

**以后更新**：改完本地文件 → `git add -A && git commit -m "..." && git push`，Pages 自动重新部署。

## ✅ 验证清单

本地浏览器打开 `index.html` / `index.en.html` / `index.ru.html`，检查：
- [ ] 中文 / EN / RU 互切正常（当前语言红底高亮）
- [ ] 各页 Hero 背景显示鲜红列宁标语
- [ ] 主题按钮切换浅/深，刷新后保持（三页间共享同一偏好）
- [ ] 窗口缩到 375px 宽：无横向滚动条，语言区卡片变单列
- [ ] 「进入列宁文库」在新标签打开，页内「#about」「#regions」锚点平滑滚动
- [ ] DevTools Network 面板**零外部网络请求**（确认没有 CDN）
- [ ] 控制台无报错
