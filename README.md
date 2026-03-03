# InvestHub H5 - 多市场投资平台

> 🚀 专为移动端设计的多市场投资 H5 应用 - 支持虚拟币、A股、美股、港股

## 📱 项目预览

**在线演示**: [https://crypto-invest-h5.netlify.app](https://crypto-invest-h5.netlify.app)

## ✨ 核心功能

- 📊 **实时行情** - 支持 BTC、ETH 等主流币种实时价格展示
- 📈 **多市场支持** - 虚拟币、A股、美股、港股四大市场
- 💱 **交易功能** - 简洁易用的交易界面
- 💼 **投资管理** - 持仓管理和资产追踪
- 📜 **交易历史** - 完整的交易记录查询
- 🔐 **钱包连接** - 支持 MetaMask、WalletConnect 等钱包（模拟）
- 📈 **价格图表** - 实时价格更新和涨跌幅展示

## 🌍 支持市场

| 市场 | 币种/股票数量 | 示例 |
|------|--------------|------|
| 虚拟币 | 8 种 | BTC、ETH、BNB、SOL、ADA、XRP、DOGE、DOT |
| A股 | 8 只 | 茅台、平安银行、宁德时代、比亚迪、招商银行等 |
| 美股 | 8 只 | AAPL、GOOGL、MSFT、AMZN、TSLA、NVDA、META、NFLX |
| 港股 | 8 只 | 腾讯、阿里巴巴、美团、小米、网易、百度等 |

## 🎨 设计特点

- **移动端优先** - 专为手机用户优化的界面设计
- **暗色主题** - 现代感十足的深色 UI
- **流畅动画** - 丝滑的页面切换和交互体验
- **响应式布局** - 适配各种屏幕尺寸

## 🚀 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/ericyou1988/crypto-invest-h5.git

# 进入项目目录
cd crypto-invest-h5

# 直接在浏览器打开 index.html
open index.html

# 或使用本地服务器
npx serve .
```

### 部署到 Netlify

1. Fork 或克隆此仓库到 GitHub
2. 登录 [Netlify](https://netlify.com)
3. 点击 "Add new site" → "Import an existing project"
4. 选择 GitHub 仓库
5. 构建设置：
   - Build command: (留空)
   - Publish directory: `.`
6. 点击 "Deploy site"

## 📁 项目结构

```
crypto-invest-h5/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── app.js          # 应用逻辑
├── images/
│   └── logo.svg        # Logo 图标
├── README.md           # 项目说明
└── netlify.toml        # Netlify 配置
```

## 🛠️ 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代样式和动画
- **JavaScript (ES6+)** - 原生 JS，无框架依赖
- **移动端优化** - 响应式设计，触摸友好

## 🎯 功能说明

### 1. 首页
- 总资产展示
- 快捷操作按钮
- 热门币种列表

### 2. 交易页面
- 多市场切换（虚拟币/A股/美股/港股）
- 币币交易界面
- 实时汇率计算
- 交易确认

### 3. 行情页面
- 四大市场切换
- 全部币种/股票列表
- 涨幅榜/跌幅榜筛选
- 实时价格更新

### 4. 持仓页面
- 持有资产展示
- 盈亏计算
- 资产分布

### 5. 历史页面
- 交易记录列表
- 时间排序
- 交易详情

## 🔐 钱包支持

支持以下钱包连接（模拟）：
- MetaMask 🦊
- WalletConnect 🔗
- Trust Wallet 🛡️

## 📊 模拟数据

项目使用模拟数据进行演示：
- 虚拟币：8 种主流加密货币
- A股：8 只热门股票
- 美股：8 只科技巨头
- 港股：8 只互联网龙头
- 实时价格波动（±0.5%）
- 初始资产：$10,000

## ⚠️ 免责声明

**本项目仅用于学习和演示目的，不构成任何投资建议。**

- 所有数据均为模拟数据
- 不涉及真实资金交易
- 请勿用于实际投资

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📬 联系方式

- GitHub: [@ericyou1988](https://github.com/ericyou1988)
- 项目地址：[crypto-invest-h5](https://github.com/ericyou1988/crypto-invest-h5)

---

**Developed with ❤️ for Multi-Market Investment**