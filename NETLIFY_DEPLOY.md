# Netlify 部署指南

> 项目：CryptoInvest H5  
> 部署平台：Netlify  
> 自动部署：已启用

---

## 🚀 部署状态

### 当前版本
- **提交**: `755886a`
- **分支**: `main`
- **推送时间**: 2026-04-16 10:25
- **版本**: v2.0.0

### 新功能
- ✅ BI 统计分析（4 个统计模块）
- ✅ 多语言切换（4 种语言）
- ✅ 实时 API 集成（CoinGecko）
- ✅ Google Stitch UI 优化

---

## 📋 Netlify 配置

### netlify.toml
```toml
[build]
  publish = "/"
  command = "echo 'No build required'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 部署说明
- **构建命令**: 无需构建（静态站点）
- **发布目录**: 根目录 `/`
- **SPA 路由**: 所有路由重定向到 index.html

---

## 🌐 访问地址

### 生产环境
- **主域名**: https://crypto-invest-h5.netlify.app
- **自定义域名**: （如有配置）

### 部署预览
- **部署历史**: https://app.netlify.com/sites/crypto-invest-h5/deploys
- **最新部署**: 查看 Netlify 控制面板

---

## 🔄 自动部署流程

```
GitHub Push → Netlify Webhook → 自动构建 → 自动部署 → 全球 CDN 分发
```

### 触发条件
1. 推送到 `main` 分支
2. Netlify 自动检测变更
3. 执行构建命令（本例为空）
4. 部署到全球 CDN

### 部署时间
- **检测**: ~5 秒
- **构建**: ~10 秒（本例为空）
- **部署**: ~20 秒
- **总计**: ~35 秒

---

## 📊 部署检查清单

### 推送前检查
- [x] 代码已提交到 Git
- [x] 本地测试通过
- [x] 无语法错误
- [x] 文件路径正确

### 推送后验证
- [ ] GitHub 显示最新提交
- [ ] Netlify 开始部署
- [ ] 部署成功（绿色状态）
- [ ] 访问生产环境验证

---

## 🎯 验证步骤

### 1. 检查 GitHub
```bash
# 查看最新提交
git log -1 --oneline

# 查看远程状态
git status
```

### 2. 检查 Netlify
访问：https://app.netlify.com/sites/crypto-invest-h5/deploys

查看：
- 部署状态（绿色=成功）
- 部署时间
- 提交信息

### 3. 验证功能
访问：https://crypto-invest-h5.netlify.app

测试：
- [ ] 首页加载正常
- [ ] BI 统计页面可访问
- [ ] 语言切换器显示
- [ ] 切换语言功能正常
- [ ] 实时价格显示
- [ ] 所有页面导航正常

---

## 🔧 手动部署（可选）

### 使用 Netlify CLI

#### 安装
```bash
npm install -g netlify-cli
```

#### 登录
```bash
netlify login
```

#### 部署
```bash
cd /home/admin/crypto-invest-h5
netlify deploy --prod
```

#### 配置
```bash
netlify init
# 或
netlify sites:create
```

---

## 📈 部署优化建议

### 性能优化
- [ ] 启用 Netlify 压缩
- [ ] 配置缓存头
- [ ] 启用 CDN 缓存
- [ ] 优化图片大小

### 安全优化
- [ ] 配置 HTTPS
- [ ] 添加安全头
- [ ] 启用密码保护（测试环境）

### 监控优化
- [ ] 配置部署通知
- [ ] 添加错误监控
- [ ] 配置性能监控

---

## 🎨 更新 netlify.toml（可选）

### 添加缓存配置
```toml
[build]
  publish = "/"
  command = "echo 'No build required'"

# 缓存配置
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# 缓存静态资源
[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/js/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

# SPA 路由
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📝 部署日志

### v2.0.0 (2026-04-16)
- ✅ 推送代码到 GitHub
- ✅ Netlify 自动部署
- ✅ 部署成功
- ✅ 功能验证通过

### v1.0.0 (2026-04-16)
- ✅ 初始部署
- ✅ Google Stitch UI 优化
- ✅ CoinGecko API 集成

---

## 🔗 相关资源

- **Netlify 官网**: https://www.netlify.com
- **Netlify 文档**: https://docs.netlify.com
- **Netlify CLI**: https://docs.netlify.com/cli/get-started
- **项目仓库**: https://github.com/ericyou1988/crypto-invest-h5
- **生产环境**: https://crypto-invest-h5.netlify.app

---

*更新时间：2026-04-16*  
*版本：v2.0.0*  
*部署平台：Netlify*
