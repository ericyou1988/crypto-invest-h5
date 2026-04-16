/**
 * CryptoInvest H5 - 真实 API 集成
 * 使用 CoinGecko API 获取真实加密货币价格
 * 文档：https://www.coingecko.com/api/documentation
 */

// ===================================
// API 配置
// ===================================
const API_CONFIG = {
  // CoinGecko 免费 API（无需 key，限 10-50 次/分钟）
  BASE_URL: 'https://api.coingecko.com/api/v3',
  
  // 如需更高配额，注册获取免费 API Key
  // API_KEY: 'YOUR_COINGECKO_API_KEY',
  
  // 缓存时间（毫秒）
  CACHE_TTL: 30000, // 30 秒
  
  // 超时时间（毫秒）
  TIMEOUT: 10000,
};

// ===================================
// 缓存管理
// ===================================
const cache = {
  prices: null,
  timestamp: 0,
  
  isExpired() {
    return Date.now() - this.timestamp > API_CONFIG.CACHE_TTL;
  },
  
  get() {
    if (this.isExpired()) {
      return null;
    }
    return this.prices;
  },
  
  set(data) {
    this.prices = data;
    this.timestamp = Date.now();
  },
  
  clear() {
    this.prices = null;
    this.timestamp = 0;
  }
};

// ===================================
// API 调用函数
// ===================================

/**
 * 获取加密货币价格
 * @param {string[]} ids - 币种 ID 列表 (bitcoin, ethereum, etc.)
 * @param {string} vsCurrency - 计价货币 (usd, cny, etc.)
 */
async function getCryptoPrices(ids = ['bitcoin', 'ethereum', 'binancecoin', 'solana', 'cardano', 'ripple', 'dogecoin', 'polkadot'], vsCurrency = 'usd') {
  try {
    // 检查缓存
    const cached = cache.get();
    if (cached) {
      console.log('📦 使用缓存数据');
      return cached;
    }
    
    console.log('🌐 请求 API:', ids.join(', '));
    
    const url = `${API_CONFIG.BASE_URL}/coins/markets?vs_currency=${vsCurrency}&ids=${ids.join(',')}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
    
    const response = await fetchWithTimeout(url, {
      headers: {
        'Accept': 'application/json',
        // 'x-cg-demo-api-key': API_CONFIG.API_KEY, // 如需 API Key
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // 缓存数据
    cache.set(data);
    
    console.log('✅ 获取成功，共', data.length, '个币种');
    return data;
    
  } catch (error) {
    console.error('❌ 获取价格失败:', error);
    
    // 如果缓存存在，返回缓存
    const cached = cache.get();
    if (cached) {
      console.log('⚠️ 返回缓存数据（API 失败）');
      return cached;
    }
    
    throw error;
  }
}

/**
 * 获取单个币种详情
 * @param {string} id - 币种 ID
 */
async function getCryptoDetail(id) {
  try {
    const url = `${API_CONFIG.BASE_URL}/coins/${id}`;
    const response = await fetchWithTimeout(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('获取币种详情失败:', error);
    throw error;
  }
}

/**
 * 获取市场概览
 */
async function getMarketOverview() {
  try {
    const url = `${API_CONFIG.BASE_URL}/global`;
    const response = await fetchWithTimeout(url);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('获取市场概览失败:', error);
    throw error;
  }
}

/**
 * 带超时的 fetch
 */
function fetchWithTimeout(url, options = {}, timeout = API_CONFIG.TIMEOUT) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error('请求超时')), timeout)
    ),
  ]);
}

// ===================================
// 数据转换函数
// ===================================

/**
 * 将 CoinGecko 数据转换为应用格式
 */
function transformCoinGeckoData(apiData) {
  return apiData.map(coin => ({
    symbol: coin.symbol.toUpperCase(),
    name: coin.name,
    icon: coin.symbol.charAt(0).toUpperCase(),
    price: coin.current_price,
    change: coin.price_change_percentage_24h || 0,
    color: getCoinColor(coin.symbol),
    market: 'crypto',
    marketCap: coin.market_cap,
    volume: coin.total_volume,
    high24h: coin.high_24h,
    low24h: coin.low_24h,
  }));
}

/**
 * 获取币种颜色
 */
function getCoinColor(symbol) {
  const colors = {
    btc: '#f7931a',
    eth: '#627eea',
    bnb: '#f3ba2f',
    sol: '#00ffa3',
    ada: '#0033ad',
    xrp: '#23292f',
    doge: '#c2a633',
    dot: '#e6007a',
  };
  return colors[symbol.toLowerCase()] || '#6c757d';
}

// ===================================
// 初始化真实数据
// ===================================

/**
 * 初始化应用数据（使用真实 API）
 */
async function initRealData() {
  try {
    // 显示加载状态
    showLoading('正在获取实时价格...');
    
    // 获取价格数据
    const apiData = await getCryptoPrices();
    
    // 转换数据格式
    const realData = transformCoinGeckoData(apiData);
    
    // 更新全局数据
    if (typeof CRYPTO_DATA !== 'undefined') {
      // 保留原有结构，更新价格和涨跌幅
      CRYPTO_DATA.forEach((coin, index) => {
        const realCoin = realData.find(c => c.symbol === coin.symbol);
        if (realCoin) {
          coin.price = realCoin.price;
          coin.change = realCoin.change;
          coin.marketCap = realCoin.marketCap;
          coin.volume = realCoin.volume;
        }
      });
    }
    
    // 隐藏加载状态
    hideLoading();
    
    console.log('✅ 真实数据初始化完成');
    return true;
    
  } catch (error) {
    console.error('❌ 初始化失败:', error);
    hideLoading();
    showToast('获取实时价格失败，使用模拟数据');
    return false;
  }
}

// ===================================
// 定时更新
// ===================================

/**
 * 启动定时更新
 */
function startAutoUpdate() {
  // 每 60 秒更新一次
  setInterval(async () => {
    try {
      console.log('🔄 自动更新价格...');
      const apiData = await getCryptoPrices();
      const realData = transformCoinGeckoData(apiData);
      
      // 更新 UI
      updatePrices(realData);
      
    } catch (error) {
      console.error('自动更新失败:', error);
    }
  }, 60000);
}

/**
 * 更新价格显示
 */
function updatePrices(realData) {
  realData.forEach(coin => {
    // 查找对应的 DOM 元素
    const elements = document.querySelectorAll(`[data-symbol="${coin.symbol}"]`);
    
    elements.forEach(el => {
      const priceEl = el.querySelector('.crypto-price, .market-item-price');
      const changeEl = el.querySelector('.crypto-change, .market-item-change');
      
      if (priceEl) {
        // 更新价格
        const oldPrice = parsePrice(priceEl.textContent);
        priceEl.textContent = formatPrice(coin.price);
        
        // 添加闪烁动画
        if (coin.price > oldPrice) {
          el.classList.add('price-up');
          setTimeout(() => el.classList.remove('price-up'), 600);
        } else if (coin.price < oldPrice) {
          el.classList.add('price-down');
          setTimeout(() => el.classList.remove('price-down'), 600);
        }
      }
      
      if (changeEl) {
        changeEl.textContent = `${coin.change >= 0 ? '+' : ''}${coin.change.toFixed(2)}%`;
        changeEl.className = `crypto-change ${coin.change >= 0 ? 'positive' : 'negative'}`;
      }
    });
  });
}

/**
 * 解析价格字符串
 */
function parsePrice(str) {
  if (!str) return 0;
  return parseFloat(str.replace(/[^0-9.]/g, '')) || 0;
}

// ===================================
// UI 辅助函数
// ===================================

function showLoading(text = '加载中...') {
  const loading = document.createElement('div');
  loading.id = 'api-loading';
  loading.style.cssText = `
    position: fixed;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    padding: 12px 24px;
    border-radius: 24px;
    border: 1px solid #404040;
    z-index: 1001;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #e0e0e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  loading.innerHTML = `
    <div style="width: 16px; height: 16px; border: 2px solid #404040; border-top-color: #00d4aa; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    <span>${text}</span>
  `;
  document.body.appendChild(loading);
}

function hideLoading() {
  const loading = document.getElementById('api-loading');
  if (loading) {
    loading.remove();
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    padding: 12px 24px;
    border-radius: 24px;
    border: 1px solid #404040;
    z-index: 1001;
    font-size: 14px;
    color: #e0e0e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    animation: slideUp 0.3s ease-out;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===================================
// 导出函数（全局可用）
// ===================================
window.initRealData = initRealData;
window.startAutoUpdate = startAutoUpdate;
window.getCryptoPrices = getCryptoPrices;
window.refreshPrices = async () => {
  cache.clear();
  await initRealData();
};

// ===================================
// 自动初始化
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  // 延迟 2 秒初始化（等页面加载完成）
  setTimeout(() => {
    initRealData().then(() => {
      startAutoUpdate();
    });
  }, 2000);
});
