# 生财有道企业官网

这是广东省生财有道企业服务集团有限公司的中文响应式企业官网首版，基于 Next.js、React 和 Tailwind CSS 构建。

## 技术栈

- Next.js App Router
- React
- Tailwind CSS
- lucide-react 图标

## 运行方式

```bash
npm install
npm run dev
```

默认访问：

```bash
http://localhost:3000
```

## 内容修改

主要内容集中在：

```bash
data/site.ts
```

可在这里修改公司信息、导航、痛点、服务、案例、资源、工具、FAQ 和联系方式。

## Logo 与图片

你提供的 Logo PDF 已保存到：

```bash
public/brand/shengcai-logo.pdf
```

当前页面已使用 SVG 版 Logo：

```bash
public/brand/shengcai-logo.svg
public/brand/shengcai-logo-horizontal.svg
```

导航栏和页脚使用横版 Logo。后续如果有官方源文件导出的 PNG 或 SVG，可放入 `public/brand` 后替换同名文件。

页面占位图位于：

```bash
public/images
```

当前已预留多处可替换图片位：

```bash
public/images/photo-placeholder-team.svg
public/images/photo-placeholder-case.svg
public/images/photo-placeholder-resource.svg
```

建议替换为：团队形象照、办公环境照、客户沟通照、课程活动照、资料封面图。保持同名文件替换最方便，页面代码无需再改。
