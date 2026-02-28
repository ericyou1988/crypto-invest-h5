/**
 * CryptoInvest H5 - Web3 虚拟币投资平台
 * 移动端优先的虚拟币投资应用
 */

// ===================================
// 模拟数据
// ===================================

const CRYPTO_DATA = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', price: 67543.21, change: 2.34, color: '#f7931a' },
  { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', price: 3456.78, change: 1.87, color: '#627eea' },
  { symbol: 'BNB', name: 'BNB', icon: 'B', price: 589.34, change: -0.56, color: '#f3ba2f' },
  { symbol: 'SOL', name: 'Solana', icon: 'S', price: 178.92, change: 5.23, color: '#00ffa3' },
  { symbol: 'ADA', name: 'Cardano', icon: 'A', price: 0.6234, change: -1.23, color: '#0033ad' },
  { symbol: 'XRP', name: 'XRP', icon: 'X', price: 0.5678, change: 0.89, color: '#23292f' },
  { symbol: 'DOGE', name: 'Dogecoin', icon: 'Ð', price: 0.1523, change: 3.45, color: '#c2a633' },
  { symbol: 'DOT', name: 'Polkadot', icon: '●', price: 8.76, change: -2.34, color: '#e6007a' }
];

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
}

// ===================================
// 渲染函数
// ===================================

function renderCryptoList() {
  const list = document.getElementById('crypto-list');
  const topCryptos = CRYPTO_DATA.slice(0, 5);
  
  list.innerHTML = topCryptos.map(crypto => `
    <div class="crypto-item" onclick="showCryptoDetail('${crypto.symbol}')">
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
  let filtered = [...CRYPTO_DATA];
  
  if (filter === 'gainers') {
    filtered = filtered.filter(c => c.change > 0).sort((a, b) => b.change - a.change);
  } else if (filter === 'losers') {
    filtered = filtered.filter(c => c.change < 0).sort((a, b) => a.change - b.change);
  }
  
  list.innerHTML = filtered.map(crypto => `
    <div class="market-item">
      <div class="market-item-name">${crypto.symbol}</div>
      <div class="market-item-price">$${formatPrice(crypto.price)}</div>
      <div class="market-item-change ${crypto.change >= 0 ? 'positive' : 'negative'}">
        ${crypto.change >= 0 ? '+' : ''}${crypto.change.toFixed(2)}%
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
    const crypto = CRYPTO_DATA.find(c => c.symbol === holding.symbol);
    const value = holding.amount * crypto.price;
    const changeValue = value * (crypto.change / 100);
    
    return `
      <div class="portfolio-item">
        <div class="portfolio-header">
          <div class="portfolio-name">
            <span style="font-size: 24px;">${crypto.icon}</span>
            <span>${holding.symbol}</span>
          </div>
          <div class="portfolio-value">$${formatPrice(value)}</div>
        </div>
        <div class="portfolio-details">
          <div class="portfolio-detail">
            <div class="portfolio-detail-label">持有数量</div>
            <div class="portfolio-detail-value">${holding.amount.toFixed(6)} ${holding.symbol}</div>
          </div>
          <div class="portfolio-detail">
            <div class="portfolio-detail-label">24h 盈亏</div>
            <div class="portfolio-detail-value" style="color: ${changeValue >= 0 ? 'var(--success-color)' : 'var(--danger-color)'}">
              ${changeValue >= 0 ? '+' : ''}$${formatPrice(changeValue)} (${crypto.change.toFixed(2)}%)
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
  
  const receiveCrypto = CRYPTO_DATA.find(c => c.symbol === receiveCurrency);
  const payCrypto = CRYPTO_DATA.find(c => c.symbol === payCurrency);
  
  if (receiveCrypto && payAmount > 0) {
    const receiveAmount = payAmount / receiveCrypto.price;
    document.getElementById('receive-amount').value = receiveAmount.toFixed(6);
    
    const rate = receiveCrypto.price;
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
  const receiveCrypto = CRYPTO_DATA.find(c => c.symbol === receiveCurrency);
  
  if (payAmount <= 0) {
    alert('请输入有效金额！');
    return;
  }
  
  const receiveAmount = payAmount / receiveCrypto.price;
  
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
  // 简单实现：使用 alert
  // 可以替换为更优雅的 toast 组件
  console.log('Toast:', message);
}

function showCryptoDetail(symbol) {
  const crypto = CRYPTO_DATA.find(c => c.symbol === symbol);
  if (crypto) {
    alert(`${crypto.name} (${crypto.symbol})\n价格：$${formatPrice(crypto.price)}\n24h 变化：${crypto.change >= 0 ? '+' : ''}${crypto.change.toFixed(2)}%`);
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
    CRYPTO_DATA.forEach(crypto => {
      // 随机价格波动 ±0.5%
      const change = (Math.random() - 0.5) * 0.01;
      crypto.price *= (1 + change);
      
      // 随机更新 24h 变化
      if (Math.random() > 0.7) {
        crypto.change += (Math.random() - 0.5) * 0.5;
        crypto.change = Math.max(-10, Math.min(10, crypto.change));
      }
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
