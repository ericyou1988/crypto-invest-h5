/**
 * InvestHub H5 - 多市场投资平台
 * 移动端优先的投资应用 - 支持虚拟币、A股、美股、港股
 */

// ===================================
// 模拟数据
// ===================================

// 虚拟币数据
const CRYPTO_DATA = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', price: 67543.21, change: 2.34, color: '#f7931a', market: 'crypto' },
  { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', price: 3456.78, change: 1.87, color: '#627eea', market: 'crypto' },
  { symbol: 'BNB', name: 'BNB', icon: 'B', price: 589.34, change: -0.56, color: '#f3ba2f', market: 'crypto' },
  { symbol: 'SOL', name: 'Solana', icon: 'S', price: 178.92, change: 5.23, color: '#00ffa3', market: 'crypto' },
  { symbol: 'ADA', name: 'Cardano', icon: 'A', price: 0.6234, change: -1.23, color: '#0033ad', market: 'crypto' },
  { symbol: 'XRP', name: 'XRP', icon: 'X', price: 0.5678, change: 0.89, color: '#23292f', market: 'crypto' },
  { symbol: 'DOGE', name: 'Dogecoin', icon: 'Ð', price: 0.1523, change: 3.45, color: '#c2a633', market: 'crypto' },
  { symbol: 'DOT', name: 'Polkadot', icon: '●', price: 8.76, change: -2.34, color: '#e6007a', market: 'crypto' }
];

// A股数据
const ASTOCK_DATA = [
  { symbol: '600519', name: '贵州茅台', icon: '茅', price: 1688.00, change: 1.25, color: '#e74c3c', market: 'astock' },
  { symbol: '000001', name: '平安银行', icon: '平', price: 12.56, change: -0.45, color: '#3498db', market: 'astock' },
  { symbol: '300750', name: '宁德时代', icon: '宁', price: 198.50, change: 3.21, color: '#2ecc71', market: 'astock' },
  { symbol: '002594', name: '比亚迪', icon: '比', price: 268.80, change: 2.15, color: '#9b59b6', market: 'astock' },
  { symbol: '600036', name: '招商银行', icon: '招', price: 35.42, change: 0.68, color: '#1abc9c', market: 'astock' },
  { symbol: '601318', name: '中国平安', icon: '安', price: 45.80, change: -1.12, color: '#e67e22', market: 'astock' },
  { symbol: '000858', name: '五粮液', icon: '五', price: 156.30, change: 0.95, color: '#f39c12', market: 'astock' },
  { symbol: '002415', name: '海康威视', icon: '海', price: 32.15, change: -0.38, color: '#16a085', market: 'astock' }
];

// 美股数据
const USSTOCK_DATA = [
  { symbol: 'AAPL', name: 'Apple', icon: '', price: 178.56, change: 1.23, color: '#a2aaad', market: 'usstock' },
  { symbol: 'GOOGL', name: 'Alphabet', icon: 'G', price: 142.89, change: 0.87, color: '#4285f4', market: 'usstock' },
  { symbol: 'MSFT', name: 'Microsoft', icon: 'M', price: 415.23, change: 1.56, color: '#00a4ef', market: 'usstock' },
  { symbol: 'AMZN', name: 'Amazon', icon: 'A', price: 178.45, change: -0.34, color: '#ff9900', market: 'usstock' },
  { symbol: 'TSLA', name: 'Tesla', icon: 'T', price: 245.67, change: 3.45, color: '#cc0000', market: 'usstock' },
  { symbol: 'NVDA', name: 'NVIDIA', icon: 'N', price: 875.32, change: 4.21, color: '#76b900', market: 'usstock' },
  { symbol: 'META', name: 'Meta', icon: 'f', price: 498.56, change: 2.12, color: '#0668e1', market: 'usstock' },
  { symbol: 'NFLX', name: 'Netflix', icon: 'N', price: 612.34, change: -0.89, color: '#e50914', market: 'usstock' }
];

// 港股数据
const HKSTOCK_DATA = [
  { symbol: '00700', name: '腾讯控股', icon: '腾', price: 368.40, change: 1.56, color: '#00d4aa', market: 'hkstock' },
  { symbol: '09988', name: '阿里巴巴', icon: '阿', price: 78.65, change: -0.78, color: '#ff6a00', market: 'hkstock' },
  { symbol: '03690', name: '美团', icon: '美', price: 128.90, change: 2.34, color: '#ffd000', market: 'hkstock' },
  { symbol: '01810', name: '小米集团', icon: '米', price: 18.56, change: 3.21, color: '#ff6700', market: 'hkstock' },
  { symbol: '09999', name: '网易', icon: '网', price: 168.30, change: 1.12, color: '#d43c33', market: 'hkstock' },
  { symbol: '09888', name: '百度', icon: '百', price: 112.45, change: -0.45, color: '#2932e1', market: 'hkstock' },
  { symbol: '02015', name: '理想汽车', icon: '理', price: 125.80, change: 2.89, color: '#0078ff', market: 'hkstock' },
  { symbol: '09868', name: '小鹏汽车', icon: '小', price: 58.90, change: -1.23, color: '#00d4aa', market: 'hkstock' }
];

// 所有市场数据
const ALL_MARKET_DATA = {
  crypto: CRYPTO_DATA,
  astock: ASTOCK_DATA,
  usstock: USSTOCK_DATA,
  hkstock: HKSTOCK_DATA
};

// 市场配置
const MARKET_CONFIG = {
  crypto: { name: '虚拟币', currency: 'USD', icon: '₿' },
  astock: { name: 'A股', currency: 'CNY', icon: '沪' },
  usstock: { name: '美股', currency: 'USD', icon: '🇺🇸' },
  hkstock: { name: '港股', currency: 'HKD', icon: '🇭🇰' }
};

// 当前选中的市场
let currentMarket = 'crypto';

// 用户资产（模拟）
let userAssets = {
  total: 10000,
  change: 0,
  holdings: [],
  history: []
};

// 钱包状态
let walletConnected = false;
let walletAddress = '';
let walletType = '';

// ===================================
// 初始化应用
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  // 模拟加载
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('app').style.display = 'block';
    
    // 初始化数据
    initApp();
  }, 2000);
  
  // 绑定事件
  bindEvents();
});

function initApp() {
  // 加载币种列表
  renderCryptoList();
  renderMarketList();
  updateAssets();
  
  // 开始模拟价格更新
  startPriceUpdates();
}

function bindEvents() {
  // 连接钱包
  document.getElementById('connect-wallet').addEventListener('click', () => {
    if (walletConnected) {
      showWalletMenu();
    } else {
      openModal('wallet-modal');
    }
  });
  
  // 交易按钮
  document.getElementById('trade-btn').addEventListener('click', executeTrade);
  
  // 输入金额变化
  document.getElementById('pay-amount').addEventListener('input', updateExchangeRate);
  document.getElementById('receive-currency').addEventListener('change', updateExchangeRate);
  
  // 市场标签
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      filterMarket(e.target.dataset.filter);
    });
  });
  
  // 市场切换标签
  document.querySelectorAll('.market-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.market-tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      switchMarket(e.target.dataset.market);
    });
  });
}

// ===================================
// 市场切换
// ===================================

function switchMarket(market) {
  currentMarket = market;
  renderMarketList();
  updateTradeOptions();
}

function updateTradeOptions() {
  const receiveSelect = document.getElementById('receive-currency');
  const data = ALL_MARKET_DATA[currentMarket];
  
  receiveSelect.innerHTML = data.slice(0, 4).map(item => 
    `<option value="${item.symbol}">${item.symbol}</option>`
  ).join('');
  
  updateExchangeRate();
}

// ===================================
// 渲染函数
// ===================================

function renderCryptoList() {
  const list = document.getElementById('crypto-list');
  const topCryptos = CRYPTO_DATA.slice(0, 5);
  
  list.innerHTML = topCryptos.map(crypto => `
    <div class="crypto-item" onclick="showCryptoDetail('${crypto.symbol}', 'crypto')">
      <div class="crypto-left">
        <div class="crypto-icon" style="background: ${crypto.color}20; color: ${crypto.color}">
          ${crypto.icon}
        </div>
        <div class="crypto-info">
          <h4>${crypto.symbol}</h4>
          <p>${crypto.name}</p>
        </div>
      </div>
      <div class="crypto-right">
        <div class="crypto-price">$${formatPrice(crypto.price)}</div>
        <div class="crypto-change ${crypto.change >= 0 ? 'positive' : 'negative'}">
          ${crypto.change >= 0 ? '+' : ''}${crypto.change.toFixed(2)}%
        </div>
      </div>
    </div>
  `).join('');
}

function renderMarketList(filter = 'all') {
  const list = document.getElementById('market-list');
  let data = ALL_MARKET_DATA[currentMarket] || CRYPTO_DATA;
  let filtered = [...data];
  
  if (filter === 'gainers') {
    filtered = filtered.filter(c => c.change > 0).sort((a, b) => b.change - a.change);
  } else if (filter === 'losers') {
    filtered = filtered.filter(c => c.change < 0).sort((a, b) => a.change - b.change);
  }
  
  const config = MARKET_CONFIG[currentMarket];
  const currencySymbol = config.currency === 'CNY' ? '¥' : (config.currency === 'HKD' ? 'HK$' : '$');
  
  list.innerHTML = filtered.map(item => `
    <div class="market-item" onclick="showCryptoDetail('${item.symbol}', '${currentMarket}')">
      <div class="market-item-left">
        <div class="market-item-icon" style="background: ${item.color}20; color: ${item.color}">
          ${item.icon}
        </div>
        <div class="market-item-info">
          <div class="market-item-symbol">${item.symbol}</div>
          <div class="market-item-name">${item.name}</div>
        </div>
      </div>
      <div class="market-item-price">${currencySymbol}${formatPrice(item.price)}</div>
      <div class="market-item-change ${item.change >= 0 ? 'positive' : 'negative'}">
        ${item.change >= 0 ? '+' : ''}${item.change.toFixed(2)}%
      </div>
    </div>
  `).join('');
}

function renderPortfolio() {
  const list = document.getElementById('portfolio-list');
  
  if (userAssets.holdings.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">💼</span>
        <p>暂无持仓</p>
        <button class="btn-primary" onclick="showSection('trade')">去交易</button>
      </div>
    `;
    return;
  }
  
  list.innerHTML = userAssets.holdings.map(holding => {
    const allData = [...CRYPTO_DATA, ...ASTOCK_DATA, ...USSTOCK_DATA, ...HKSTOCK_DATA];
    const item = allData.find(c => c.symbol === holding.symbol);
    if (!item) return '';
    
    const value = holding.amount * item.price;
    const changeValue = value * (item.change / 100);
    const config = MARKET_CONFIG[item.market];
    const currencySymbol = config.currency === 'CNY' ? '¥' : (config.currency === 'HKD' ? 'HK$' : '$');
    
    return `
      <div class="portfolio-item">
        <div class="portfolio-header">
          <div class="portfolio-name">
            <span class="portfolio-icon" style="background: ${item.color}20; color: ${item.color}">${item.icon}</span>
            <span>${holding.symbol}</span>
            <span class="portfolio-market-tag">${config.name}</span>
          </div>
          <div class="portfolio-value">${currencySymbol}${formatPrice(value)}</div>
        </div>
        <div class="portfolio-details">
          <div class="portfolio-detail">
            <div class="portfolio-detail-label">持有数量</div>
            <div class="portfolio-detail-value">${holding.amount.toFixed(6)} ${holding.symbol}</div>
          </div>
          <div class="portfolio-detail">
            <div class="portfolio-detail-label">24h 盈亏</div>
            <div class="portfolio-detail-value" style="color: ${changeValue >= 0 ? 'var(--success-color)' : 'var(--danger-color)'}">
              ${changeValue >= 0 ? '+' : ''}${currencySymbol}${formatPrice(changeValue)} (${item.change.toFixed(2)}%)
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderHistory() {
  const list = document.getElementById('history-list');
  
  if (userAssets.history.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📜</span>
        <p>暂无交易记录</p>
      </div>
    `;
    return;
  }
  
  list.innerHTML = userAssets.history.slice(0, 20).map(tx => `
    <div class="history-item">
      <div class="history-left">
        <div class="history-icon">${tx.type === 'buy' ? '🟢' : '🔴'}</div>
        <div class="history-info">
          <h4>${tx.type === 'buy' ? '买入' : '卖出'} ${tx.symbol}</h4>
          <p>${tx.time}</p>
        </div>
      </div>
      <div class="history-right">
        <div class="history-amount">${tx.amount.toFixed(6)} ${tx.symbol}</div>
        <div class="history-time">$${formatPrice(tx.value)}</div>
      </div>
    </div>
  `).join('');
}

// ===================================
// 交易功能
// ===================================

function updateExchangeRate() {
  const payAmount = parseFloat(document.getElementById('pay-amount').value) || 0;
  const payCurrency = document.getElementById('pay-currency').value;
  const receiveCurrency = document.getElementById('receive-currency').value;
  
  const allData = [...CRYPTO_DATA, ...ASTOCK_DATA, ...USSTOCK_DATA, ...HKSTOCK_DATA];
  const receiveItem = allData.find(c => c.symbol === receiveCurrency);
  
  if (receiveItem && payAmount > 0) {
    const receiveAmount = payAmount / receiveItem.price;
    document.getElementById('receive-amount').value = receiveAmount.toFixed(6);
    
    const rate = receiveItem.price;
    document.getElementById('exchange-rate').textContent = `1 ${receiveCurrency} = ${formatPrice(rate)} ${payCurrency}`;
    
    // 更新按钮文本
    document.getElementById('trade-btn').textContent = `买入 ${receiveCurrency}`;
  }
}

function executeTrade() {
  if (!walletConnected) {
    alert('请先连接钱包！');
    openModal('wallet-modal');
    return;
  }
  
  const payAmount = parseFloat(document.getElementById('pay-amount').value) || 0;
  const receiveCurrency = document.getElementById('receive-currency').value;
  const allData = [...CRYPTO_DATA, ...ASTOCK_DATA, ...USSTOCK_DATA, ...HKSTOCK_DATA];
  const receiveItem = allData.find(c => c.symbol === receiveCurrency);
  
  if (payAmount <= 0) {
    alert('请输入有效金额！');
    return;
  }
  
  const receiveAmount = payAmount / receiveItem.price;
  
  // 更新用户资产
  const existingHolding = userAssets.holdings.find(h => h.symbol === receiveCurrency);
  if (existingHolding) {
    existingHolding.amount += receiveAmount;
  } else {
    userAssets.holdings.push({
      symbol: receiveCurrency,
      amount: receiveAmount
    });
  }
  
  // 添加交易历史
  userAssets.history.unshift({
    type: 'buy',
    symbol: receiveCurrency,
    amount: receiveAmount,
    value: payAmount,
    time: new Date().toLocaleString('zh-CN')
  });
  
  // 更新总资产
  userAssets.total += payAmount * 0.01; // 模拟收益
  
  // 更新 UI
  updateAssets();
  renderPortfolio();
  renderHistory();
  
  // 显示成功弹窗
  document.getElementById('success-message').textContent = `已买入 ${receiveAmount.toFixed(6)} ${receiveCurrency}`;
  openModal('success-modal');
}

// ===================================
// 钱包功能
// ===================================

function connectWallet(type) {
  // 模拟钱包连接
  walletType = type;
  walletConnected = true;
  walletAddress = generateWalletAddress();
  
  // 更新 UI
  const btn = document.getElementById('connect-wallet');
  btn.innerHTML = `
    <span class="wallet-icon">✅</span>
    <span class="wallet-text">${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}</span>
  `;
  
  closeModal('wallet-modal');
  
  // 显示提示
  showToast(`已连接 ${type}`);
}

function generateWalletAddress() {
  const chars = '0123456789abcdef';
  let address = '0x';
  for (let i = 0; i < 40; i++) {
    address += chars[Math.floor(Math.random() * chars.length)];
  }
  return address;
}

function showWalletMenu() {
  if (confirm(`断开钱包连接？\n\n钱包类型：${walletType}\n地址：${walletAddress}`)) {
    walletConnected = false;
    walletAddress = '';
    walletType = '';
    
    const btn = document.getElementById('connect-wallet');
    btn.innerHTML = `
      <span class="wallet-icon">🔐</span>
      <span class="wallet-text">连接钱包</span>
    `;
    
    showToast('已断开钱包连接');
  }
}

// ===================================
// 页面导航
// ===================================

function showSection(sectionId) {
  // 隐藏所有 section
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  
  // 显示目标 section
  document.getElementById(`${sectionId}-section`).classList.add('active');
  
  // 更新底部导航
  const navIndex = ['home', 'trade', 'market', 'portfolio', 'history'].indexOf(sectionId);
  if (navIndex >= 0) {
    document.querySelectorAll('.nav-btn')[navIndex].classList.add('active');
  }
  
  // 渲染对应页面
  if (sectionId === 'portfolio') {
    renderPortfolio();
  } else if (sectionId === 'history') {
    renderHistory();
  }
  
  // 滚动到顶部
  window.scrollTo(0, 0);
}

// ===================================
// 工具函数
// ===================================

function formatPrice(price) {
  if (price >= 1000) {
    return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  } else if (price >= 1) {
    return price.toFixed(2);
  } else {
    return price.toFixed(4);
  }
}

function updateAssets() {
  document.getElementById('total-assets').textContent = `$${formatPrice(userAssets.total)}`;
  
  const changePercent = ((userAssets.total - 10000) / 10000) * 100;
  const changeEl = document.getElementById('asset-change');
  changeEl.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
  changeEl.style.color = changePercent >= 0 ? 'var(--success-color)' : 'var(--danger-color)';
}

function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function showToast(message) {
  console.log('Toast:', message);
}

function showCryptoDetail(symbol, market) {
  const data = ALL_MARKET_DATA[market] || CRYPTO_DATA;
  const item = data.find(c => c.symbol === symbol);
  if (item) {
    const config = MARKET_CONFIG[market];
    const currencySymbol = config.currency === 'CNY' ? '¥' : (config.currency === 'HKD' ? 'HK$' : '$');
    alert(`${item.name} (${item.symbol})\n市场：${config.name}\n价格：${currencySymbol}${formatPrice(item.price)}\n24h 变化：${item.change >= 0 ? '+' : ''}${item.change.toFixed(2)}%`);
  }
}

function filterMarket(filter) {
  renderMarketList(filter);
}

// ===================================
// 模拟价格更新
// ===================================

function startPriceUpdates() {
  setInterval(() => {
    // 更新所有市场数据
    Object.values(ALL_MARKET_DATA).forEach(data => {
      data.forEach(item => {
        // 随机价格波动 ±0.5%
        const change = (Math.random() - 0.5) * 0.01;
        item.price *= (1 + change);
        
        // 随机更新 24h 变化
        if (Math.random() > 0.7) {
          item.change += (Math.random() - 0.5) * 0.5;
          item.change = Math.max(-10, Math.min(10, item.change));
        }
      });
    });
    
    // 重新渲染
    renderCryptoList();
    renderMarketList();
    renderPortfolio();
    updateAssets();
  }, 3000);
}

// 全局函数暴露
window.showSection = showSection;
window.openModal = openModal;
window.closeModal = closeModal;
window.connectWallet = connectWallet;
window.showCryptoDetail = showCryptoDetail;
window.switchMarket = switchMarket;