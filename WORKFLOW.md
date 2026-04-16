# 🔄 CryptoInvest H5 - 开发工作流标准

> 版本：v2.0.0  
> 最后更新：2026-04-16  
> 状态：✅ 成熟可用

---

## 🎯 工作流概览

```mermaid
graph LR
    A[本地开发] --> B[Git 提交]
    B --> C[推送到 GitHub]
    C --> D[Netlify 自动部署]
    D --> E[生产环境]
    E --> F[功能验证]
    F --> G[迭代优化]
    G --> A
```

---

## 📝 标准操作流程

### 1️⃣ 本地开发阶段

#### 环境准备
```bash
# 克隆项目
git clone https://github.com/ericyou1988/crypto-invest-h5.git
cd crypto-invest-h5

# 安装依赖（如有）
npm install

# 本地预览
npx serve .
```

#### 开发规范
```
项目结构：
crypto-invest-h5/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── app.js          # 应用逻辑
│   ├── api.js          # API 集成
│   ├── bi-stats.js     # BI 统计
│   └── i18n.js         # 多语言
├── images/             # 图片资源
├── netlify.toml        # Netlify 配置
└── docs/               # 文档
```

#### 开发检查清单
- [ ] 代码格式统一
- [ ] 功能测试通过
- [ ] 本地预览正常
- [ ] 无控制台错误
- [ ] 移动端适配正常

---

### 2️⃣ Git 提交阶段

#### 提交规范
```bash
# 查看变更
git status
git diff

# 添加文件
git add .

# 提交代码（使用规范的提交信息）
git commit -m "type: description"

# 提交类型：
# feat:     新功能
# fix:      修复 bug
# docs:     文档更新
# style:    代码格式
# refactor: 重构
# perf:     性能优化
# test:     测试
# chore:    构建/工具
```

#### 提交信息模板
```markdown
<type>: <description>

# 示例
feat: 新增 BI 统计分析功能

- 资产概览卡片
- 持仓分布饼图
- 交易统计网格
- 收益趋势图

BREAKING CHANGE: 无
```

---

### 3️⃣ 推送到 GitHub

#### 推送命令
```bash
# 推送到主分支
git push origin main

# 如果是新分支
git push -u origin <branch-name>
```

#### 推送前检查
- [ ] 代码已本地测试
- [ ] 提交信息规范
- [ ] 无敏感信息（API Key 等）
- [ ] 分支正确（main/develop）

---

### 4️⃣ Netlify 自动部署

#### 触发机制
```
GitHub Push 
  ↓
Webhook 触发
  ↓
Netlify 检测变更
  ↓
执行构建命令
  ↓
部署到 CDN
  ↓
全球分发
```

#### 部署配置（netlify.toml）
```toml
[build]
  publish = "/"
  command = "echo 'No build required'"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# 可选：缓存配置
[[headers]]
  for = "/css/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

#### 部署时间线
```
T+0s   - GitHub 接收推送
T+5s   - Netlify 检测变更
T+10s  - 开始构建
T+20s  - 构建完成
T+40s  - 部署到 CDN
T+60s  - 全球分发完成
```

---

### 5️⃣ 生产环境验证

#### 访问地址
- **主站点**: https://crypto-invest-h5.netlify.app
- **部署历史**: https://app.netlify.com/sites/crypto-invest-h5/deploys

#### 验证清单
- [ ] 网站可访问
- [ ] 页面加载正常
- [ ] 新功能工作正常
- [ ] 无控制台错误
- [ ] 移动端显示正常
- [ ] 性能指标达标

#### 快速验证命令
```bash
# 检查网站响应
curl -I https://crypto-invest-h5.netlify.app

# 预期
HTTP/2 200 
content-type: text/html
cache-control: public, max-age=0, must-revalidate
```

---

### 6️⃣ 迭代优化

#### 收集反馈
- 用户反馈
- 性能监控
- 错误日志
- 访问统计

#### 优化方向
- 性能优化（加载速度）
- 功能增强（新特性）
- Bug 修复
- 用户体验改进

---

## 🛠️ 工具配置

### Git 配置
```bash
# 全局配置
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 查看配置
git config --list
```

### Netlify 配置
```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 登录
netlify login

# 关联站点
netlify link

# 手动部署
netlify deploy --prod
```

---

## 📊 工作流指标

### 开发效率
| 指标 | 目标 | 当前 |
|------|------|------|
| 提交到部署时间 | < 1 分钟 | ~35 秒 ✅ |
| 部署成功率 | > 99% | 100% ✅ |
| 回滚时间 | < 5 分钟 | ~1 分钟 ✅ |

### 代码质量
| 指标 | 目标 | 当前 |
|------|------|------|
| 代码审查 | 必需 | ✅ |
| 测试覆盖率 | > 80% | 待实现 |
| Bug 率 | < 1% | 待统计 |

---

## 🚨 问题排查

### 部署失败
```bash
# 1. 检查构建日志
访问：https://app.netlify.com/sites/crypto-invest-h5/deploys

# 2. 本地测试构建
npx serve .

# 3. 检查文件路径
# - 确保所有文件路径正确
# - 检查大小写敏感

# 4. 回滚到上一个版本
git revert <commit-hash>
git push origin main
```

### 功能异常
```bash
# 1. 清除缓存
# - 浏览器缓存
# - Netlify CDN 缓存

# 2. 检查浏览器控制台
# - JavaScript 错误
# - 网络请求失败

# 3. 回滚版本
# - Netlify 控制面板可以回滚
```

---

## 📈 最佳实践

### 代码管理
1. **小步提交** - 每次提交一个功能点
2. **规范信息** - 使用标准提交格式
3. **分支管理** - 功能分支开发，主分支发布
4. **代码审查** - 重要变更需要审查

### 部署策略
1. **自动化** - 尽可能自动化部署流程
2. **快速回滚** - 保持随时可回滚
3. **灰度发布** - 重要功能逐步发布
4. **监控告警** - 设置部署通知

### 性能优化
1. **资源压缩** - CSS/JS 压缩
2. **图片优化** - WebP 格式，懒加载
3. **缓存策略** - 合理设置 Cache-Control
4. **CDN 加速** - 利用 Netlify Edge Network

---

## 🎓 团队协作

### 角色分工
| 角色 | 职责 |
|------|------|
| 开发者 | 代码开发、本地测试 |
| 审查者 | 代码审查、质量把控 |
| 部署者 | 部署验证、监控 |
| 测试者 | 功能测试、反馈 |

### 沟通机制
- **提交信息** - 清晰的提交描述
- **Pull Request** - 重要变更的讨论
- **部署通知** - Netlify 邮件/Slack 通知
- **问题跟踪** - GitHub Issues

---

## 📚 相关文档

- [Netlify 部署指南](./NETLIFY_DEPLOY.md)
- [部署状态跟踪](./DEPLOY_STATUS.md)
- [功能文档](./FEATURES_V2.md)
- [设计系统](./DESIGN.md)

---

## 🔗 重要链接

| 链接 | 用途 |
|------|------|
| **GitHub** | https://github.com/ericyou1988/crypto-invest-h5 |
| **Netlify** | https://app.netlify.com/sites/crypto-invest-h5 |
| **生产环境** | https://crypto-invest-h5.netlify.app |
| **部署历史** | https://app.netlify.com/sites/crypto-invest-h5/deploys |

---

*工作流版本：v2.0.0*  
*创建时间：2026-04-16*  
*状态：✅ 成熟可用*
