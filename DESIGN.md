# CryptoInvest H5 - Design System (Google Stitch Style)

> 基于 Google Stitch 设计理念的移动端投资平台设计系统
> 采用 Material You 3.0 + 极简主义 + 无障碍优先

---

## 🎨 色彩系统

### 主色调 (Dynamic Primary)

```css
--primary: #00d4aa;        /* 青绿色 - 信任与增长 */
--primary-container: #00d4aa20;
--on-primary: #ffffff;
--on-primary-container: #004d3d;
```

### 辅助色

```css
--secondary: #6c5ce7;      /* 紫色 - 科技感 */
--secondary-container: #6c5ce720;
--on-secondary: #ffffff;

--tertiary: #f7931a;       /* 橙色 - Bitcoin 品牌色 */
--tertiary-container: #f7931a20;
--on-tertiary: #ffffff;
```

### 功能色

```css
--success: #00c853;        /* 上涨/盈利 */
--success-container: #00c85320;
--error: #ff5252;          /* 下跌/亏损 */
--error-container: #ff525220;
--warning: #ffab00;        /* 警告/注意 */
```

### 中性色 (Neutral Palette)

```css
/* 深色主题 */
--background: #0f0f0f;     /* 纯黑背景 */
--surface: #1a1a1a;        /* 卡片背景 */
--surface-variant: #2a2a2a;
--outline: #404040;
--on-background: #ffffff;
--on-surface: #e0e0e0;
--on-surface-variant: #a0a0a0;
```

### 渐变系统

```css
/* 主渐变 - 用于重要卡片和按钮 */
--gradient-primary: linear-gradient(135deg, #00d4aa 0%, #6c5ce7 100%);

/* 上涨渐变 */
--gradient-success: linear-gradient(135deg, #00c853 0%, #00e676 100%);

/* 下跌渐变 */
--gradient-error: linear-gradient(135deg, #ff5252 0%, #ff8a80 100%);

/* 背景渐变 */
--gradient-background: linear-gradient(180deg, #0f0f0f 0%, #1a1a2e 100%);
```

---

## 🔤 字体系统

### 字体栈

```css
font-family: 'Google Sans', 'Roboto', -apple-system, BlinkMacSystemFont, 
             'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
```

### 字号层级 (Type Scale)

| 层级 | 用途 | 字号 | 字重 | 行高 |
|------|------|------|------|------|
| `display` | 大标题 | 36px | 700 | 1.2 |
| `headline-large` | 页面标题 | 28px | 600 | 1.3 |
| `headline-medium` | 板块标题 | 22px | 600 | 1.3 |
| `headline-small` | 卡片标题 | 18px | 600 | 1.4 |
| `title-large` | 重要文本 | 16px | 500 | 1.5 |
| `title-medium` | 按钮文本 | 14px | 500 | 1.4 |
| `body-large` | 正文 | 16px | 400 | 1.6 |
| `body-medium` | 次要文本 | 14px | 400 | 1.5 |
| `label-small` | 标签 | 12px | 500 | 1.4 |

### 数字显示

```css
/* 价格数字使用等宽字体 */
.price-font {
  font-family: 'Roboto Mono', 'Courier New', monospace;
  font-variant-numeric: tabular-nums;
}
```

---

## 📐 间距系统

### 基础间距 (8px 基准)

```css
--space-1: 4px;    /* 0.5x */
--space-2: 8px;    /* 1x */
--space-3: 12px;   /* 1.5x */
--space-4: 16px;   /* 2x */
--space-5: 20px;   /* 2.5x */
--space-6: 24px;   /* 3x */
--space-8: 32px;   /* 4x */
--space-10: 40px;  /* 5x */
--space-12: 48px;  /* 6x */
--space-16: 64px;  /* 8x */
```

### 布局间距

```css
--container-padding: 16px;      /* 容器内边距 */
--card-padding: 20px;           /* 卡片内边距 */
--section-gap: 24px;            /* 板块间距 */
--list-item-gap: 12px;          /* 列表项间距 */
```

---

## 🔲 圆角系统

```css
--radius-xs: 4px;       /* 小元素 */
--radius-sm: 8px;       /* 按钮、输入框 */
--radius-md: 12px;      /* 卡片 */
--radius-lg: 16px;      /* 大卡片 */
--radius-xl: 24px;      /* 超大卡片 */
--radius-full: 9999px;  /* 圆形 */
```

---

## 🌊 阴影系统

### 深度层级 (Elevation)

```css
/* 深度 1 - 轻微浮起 */
--shadow-1: 0 1px 2px rgba(0, 0, 0, 0.3),
            0 1px 3px 1px rgba(0, 0, 0, 0.15);

/* 深度 2 - 卡片 */
--shadow-2: 0 1px 3px rgba(0, 0, 0, 0.3),
            0 4px 8px 3px rgba(0, 0, 0, 0.15);

/* 深度 3 - 悬浮 */
--shadow-3: 0 3px 6px rgba(0, 0, 0, 0.3),
            0 8px 16px 4px rgba(0, 0, 0, 0.15);

/* 深度 4 - 弹窗 */
--shadow-4: 0 6px 12px rgba(0, 0, 0, 0.3),
            0 16px 32px 6px rgba(0, 0, 0, 0.15);
```

---

## 🎬 动效系统

### 时长

```css
--duration-instant: 0ms;
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
```

### 缓动函数

```css
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);
--ease-emphasized: cubic-bezier(0.2, 0, 0, 1);
```

### 标准动画

```css
/* 淡入 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 滑入 */
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 缩放 */
@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

/* 脉冲 (用于加载) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 闪烁 (用于价格更新) */
@keyframes flash {
  0% { background-color: transparent; }
  50% { background-color: rgba(0, 212, 170, 0.2); }
  100% { background-color: transparent; }
}
```

---

## 🧩 组件规范

### 按钮 (Button)

```css
/* 主要按钮 */
.btn-primary {
  height: 48px;
  padding: 0 24px;
  border-radius: var(--radius-sm);
  background: var(--gradient-primary);
  color: white;
  font-size: 16px;
  font-weight: 600;
  transition: all var(--duration-normal) var(--ease-standard);
}

.btn-primary:active {
  transform: scale(0.98);
  opacity: 0.9;
}

/* 次要按钮 */
.btn-secondary {
  height: 48px;
  padding: 0 24px;
  border-radius: var(--radius-sm);
  background: transparent;
  border: 1px solid var(--outline);
  color: var(--on-surface);
  font-size: 16px;
  font-weight: 500;
}

/* 图标按钮 */
.btn-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 卡片 (Card)

```css
.card {
  background: var(--surface);
  border-radius: var(--radius-lg);
  padding: var(--card-padding);
  border: 1px solid var(--outline);
  transition: all var(--duration-normal) var(--ease-standard);
}

.card:active {
  background: var(--surface-variant);
}

/* 高亮卡片 */
.card-elevated {
  background: var(--gradient-background);
  box-shadow: var(--shadow-2);
  border: none;
}
```

### 输入框 (Input)

```css
.input {
  height: 56px;
  padding: 0 16px;
  border-radius: var(--radius-sm);
  background: var(--surface-variant);
  border: 1px solid var(--outline);
  color: var(--on-surface);
  font-size: 16px;
  transition: all var(--duration-fast) var(--ease-standard);
}

.input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 2px var(--primary-container);
  outline: none;
}
```

### 列表项 (List Item)

```css
.list-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--ease-standard);
}

.list-item:active {
  background: var(--surface-variant);
}
```

### 底部导航 (Bottom Navigation)

```css
.bottom-nav {
  height: 80px; /* 包含安全区域 */
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-around;
  padding-bottom: env(safe-area-inset-bottom);
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  color: var(--on-surface-variant);
  transition: all var(--duration-fast) var(--ease-standard);
}

.nav-item.active {
  color: var(--primary);
}

.nav-icon {
  font-size: 24px;
}

.nav-label {
  font-size: 12px;
  font-weight: 500;
}
```

---

## 📊 数据展示规范

### 价格显示

```css
.price-display {
  font-family: 'Roboto Mono', monospace;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.5px;
}

.price-up {
  color: var(--success);
}

.price-down {
  color: var(--error);
}

.price-change {
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: var(--radius-xs);
}

.price-change.up {
  background: var(--success-container);
  color: var(--success);
}

.price-change.down {
  background: var(--error-container);
  color: var(--error);
}
```

### 资产卡片

```css
.asset-card {
  background: var(--gradient-primary);
  border-radius: var(--radius-xl);
  padding: 32px;
  text-align: center;
  color: white;
  box-shadow: var(--shadow-3);
}

.asset-label {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
}

.asset-amount {
  font-size: 42px;
  font-weight: 700;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 12px;
}

.asset-change {
  font-size: 16px;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 16px;
  border-radius: var(--radius-full);
  display: inline-block;
}
```

---

## ♿ 无障碍规范

### 对比度要求

- 正常文本：至少 4.5:1 (WCAG AA)
- 大文本 (18px+): 至少 3:1
- UI 组件：至少 3:1

### 触摸目标

- 最小尺寸：48x48px
- 目标间距：至少 8px

### 焦点状态

```css
/* 所有可交互元素必须有可见焦点 */
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
}
```

### 动态字体

```css
/* 支持系统字体缩放 */
html {
  font-size: calc(16px * var(--user-font-scale, 1));
}
```

### 减少动画

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 响应式断点

```css
/* 手机竖屏 */
@media (max-width: 479px) {
  --container-padding: 16px;
}

/* 手机横屏/小平板 */
@media (min-width: 480px) and (max-width: 767px) {
  --container-padding: 24px;
}

/* 平板 */
@media (min-width: 768px) and (max-width: 1023px) {
  --container-padding: 32px;
}

/* 桌面 */
@media (min-width: 1024px) {
  .app {
    max-width: 480px;
    margin: 0 auto;
    box-shadow: var(--shadow-4);
  }
}
```

---

## 🎯 设计原则检查清单

### 视觉层次
- [ ] 重要信息使用大字号和高对比度
- [ ] 次要信息使用小字号和低饱和度
- [ ] 使用留白分隔内容组

### 交互反馈
- [ ] 所有按钮有 hover/active 状态
- [ ] 加载状态有明确指示
- [ ] 操作成功/失败有明确反馈

### 一致性
- [ ] 相同功能的组件样式一致
- [ ] 间距使用 8px 基准系统
- [ ] 圆角大小统一

### 无障碍
- [ ] 颜色对比度达标
- [ ] 触摸目标足够大
- [ ] 支持键盘导航
- [ ] 支持屏幕阅读器

---

## 🚀 实施优先级

### Phase 1 - 核心样式 (本周)
1. 更新色彩系统
2. 更新字体和间距
3. 优化按钮和卡片

### Phase 2 - 组件优化 (下周)
1. 重做底部导航
2. 优化列表项
3. 添加微动画

### Phase 3 - 高级功能 (后续)
1. 添加价格闪烁动画
2. 添加下拉刷新
3. 添加骨架屏加载

---

*最后更新：2026-04-16*
*基于 Google Stitch 设计理念*
