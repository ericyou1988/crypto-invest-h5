/**
 * CryptoInvest H5 - BI 统计分析模块
 * 提供资产分析、持仓分布、收益趋势等统计功能
 */

// ===================================
// BI 统计配置
// ===================================
const BI_CONFIG = {
  // 图表颜色配置
  CHART_COLORS: [
    '#00d4aa', // 青绿色
    '#6c5ce7', // 紫色
    '#f7931a', // 橙色
    '#00c853', // 绿色
    '#ff5252', // 红色
    '#ffab00', // 黄色
    '#00bcd4', // 青色
    '#e91e63', // 粉色
  ],
  
  // 统计时间范围
  TIME_RANGES: {
    '7d': 7,      // 7 天
    '30d': 30,    // 30 天
    '90d': 90,    // 90 天
    '1y': 365,    // 1 年
    'all': 'all', // 全部
  },
  
  // 本地存储键
  STORAGE_KEY: 'crypto_invest_bi_data',
};

// ===================================
// 数据存储
// ===================================
const biData = {
  // 历史资产快照
  assetHistory: [],
  
  // 交易记录统计
  tradeStats: {
    totalTrades: 0,
    totalBuy: 0,
    totalSell: 0,
    totalProfit: 0,
    winRate: 0,
  },
  
  // 持仓统计
  holdingStats: {
    totalValue: 0,
    totalCost: 0,
    totalProfit: 0,
    profitRate: 0,
    distribution: [],
  },
  
  // 收益趋势
  profitTrend: [],
};

// ===================================
// 初始化 BI 统计
// ===================================
function initBIStats() {
  // 从本地存储加载历史数据
  loadBIData();
  
  // 计算持仓统计
  calculateHoldingStats();
  
  // 渲染 BI 面板
  renderBIPanel();
  
  console.log('✅ BI 统计初始化完成');
}

// ===================================
// 数据统计计算
// ===================================

/**
 * 计算持仓统计
 */
function calculateHoldingStats() {
  const holdings = userAssets.holdings || [];
  const allData = [...CRYPTO_DATA, ...ASTOCK_DATA, ...USSTOCK_DATA, ...HKSTOCK_DATA];
  
  let totalValue = 0;
  let totalCost = 0;
  const distribution = [];
  
  holdings.forEach(holding => {
    const item = allData.find(c => c.symbol === holding.symbol);
    if (!item) return;
    
    const currentValue = holding.amount * item.price;
    const costValue = holding.amount * (holding.avgPrice || item.price);
    const profit = currentValue - costValue;
    
    totalValue += currentValue;
    totalCost += costValue;
    
    distribution.push({
      symbol: holding.symbol,
      name: item.name,
      icon: item.icon,
      color: item.color,
      amount: holding.amount,
      value: currentValue,
      cost: costValue,
      profit: profit,
      profitRate: ((profit / costValue) * 100),
      percentage: 0, // 稍后计算
    });
  });
  
  // 计算占比
  distribution.forEach(item => {
    item.percentage = totalValue > 0 ? (item.value / totalValue * 100) : 0;
  });
  
  // 排序（按价值降序）
  distribution.sort((a, b) => b.value - a.value);
  
  // 更新持仓统计
  biData.holdingStats = {
    totalValue,
    totalCost,
    totalProfit: totalValue - totalCost,
    profitRate: totalCost > 0 ? ((totalValue - totalCost) / totalCost * 100) : 0,
    distribution,
  };
  
  // 计算交易统计
  calculateTradeStats();
}

/**
 * 计算交易统计
 */
function calculateTradeStats() {
  const history = userAssets.history || [];
  
  let totalBuy = 0;
  let totalSell = 0;
  const profits = [];
  
  history.forEach(tx => {
    if (tx.type === 'buy') {
      totalBuy++;
    } else if (tx.type === 'sell') {
      totalSell++;
      // 简单计算盈亏（实际应该匹配买入成本）
      profits.push(tx.profit || 0);
    }
  });
  
  const winningTrades = profits.filter(p => p > 0).length;
  const totalProfit = profits.reduce((sum, p) => sum + p, 0);
  
  biData.tradeStats = {
    totalTrades: totalBuy + totalSell,
    totalBuy,
    totalSell,
    totalProfit,
    winRate: profits.length > 0 ? (winningTrades / profits.length * 100) : 0,
  };
}

/**
 * 记录资产快照（用于趋势分析）
 */
function recordAssetSnapshot() {
  const snapshot = {
    timestamp: Date.now(),
    total: userAssets.total,
    holdings: [...userAssets.holdings],
  };
  
  biData.assetHistory.push(snapshot);
  
  // 保留最近 365 条记录
  if (biData.assetHistory.length > 365) {
    biData.assetHistory.shift();
  }
  
  // 保存到本地存储
  saveBIData();
}

// ===================================
// 本地存储管理
// ===================================

/**
 * 保存 BI 数据到本地存储
 */
function saveBIData() {
  try {
    const data = {
      assetHistory: biData.assetHistory,
      tradeStats: biData.tradeStats,
      holdingStats: biData.holdingStats,
      updatedAt: Date.now(),
    };
    localStorage.setItem(BI_CONFIG.STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('保存 BI 数据失败:', error);
  }
}

/**
 * 从本地存储加载 BI 数据
 */
function loadBIData() {
  try {
    const stored = localStorage.getItem(BI_CONFIG.STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      biData.assetHistory = data.assetHistory || [];
      biData.tradeStats = data.tradeStats || {};
      biData.holdingStats = data.holdingStats || {};
      console.log('📊 已加载 BI 历史数据');
    }
  } catch (error) {
    console.error('加载 BI 数据失败:', error);
  }
}

/**
 * 清空 BI 数据
 */
function clearBIData() {
  localStorage.removeItem(BI_CONFIG.STORAGE_KEY);
  biData.assetHistory = [];
  biData.tradeStats = {};
  biData.holdingStats = {};
  console.log('🗑️ BI 数据已清空');
}

// ===================================
// BI 面板渲染
// ===================================

/**
 * 渲染 BI 统计面板
 */
function renderBIPanel() {
  renderAssetOverview();
  renderHoldingDistribution();
  renderTradeStats();
  renderProfitTrend();
}

/**
 * 渲染资产概览
 */
function renderAssetOverview() {
  const stats = biData.holdingStats;
  
  const html = `
    <div class="bi-overview-card">
      <div class="bi-overview-item">
        <div class="bi-overview-label">总资产</div>
        <div class="bi-overview-value">$${formatPrice(stats.totalValue)}</div>
      </div>
      <div class="bi-overview-item">
        <div class="bi-overview-label">总成本</div>
        <div class="bi-overview-value">$${formatPrice(stats.totalCost)}</div>
      </div>
      <div class="bi-overview-item">
        <div class="bi-overview-label">总盈亏</div>
        <div class="bi-overview-value ${stats.totalProfit >= 0 ? 'profit' : 'loss'}">
          ${stats.totalProfit >= 0 ? '+' : ''}$${formatPrice(stats.totalProfit)}
        </div>
      </div>
      <div class="bi-overview-item">
        <div class="bi-overview-label">收益率</div>
        <div class="bi-overview-value ${stats.profitRate >= 0 ? 'profit' : 'loss'}">
          ${stats.profitRate >= 0 ? '+' : ''}${stats.profitRate.toFixed(2)}%
        </div>
      </div>
    </div>
  `;
  
  const container = document.getElementById('bi-overview');
  if (container) {
    container.innerHTML = html;
  }
}

/**
 * 渲染持仓分布（饼图）
 */
function renderHoldingDistribution() {
  const distribution = biData.holdingStats.distribution || [];
  
  if (distribution.length === 0) {
    const container = document.getElementById('bi-distribution');
    if (container) {
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">📊</span>
          <p>暂无持仓数据</p>
        </div>
      `;
    }
    return;
  }
  
  // 生成饼图 HTML（使用 CSS 圆锥渐变）
  let gradientStops = [];
  let currentAngle = 0;
  
  distribution.forEach((item, index) => {
    const color = item.color || BI_CONFIG.CHART_COLORS[index % BI_CONFIG.CHART_COLORS.length];
    const angle = (item.percentage / 100) * 360;
    gradientStops.push(`${color} ${currentAngle}deg ${currentAngle + angle}deg`);
    currentAngle += angle;
  });
  
  const gradient = `conic-gradient(${gradientStops.join(', ')})`;
  
  // 生成图例
  const legend = distribution.map((item, index) => {
    const color = item.color || BI_CONFIG.CHART_COLORS[index % BI_CONFIG.CHART_COLORS.length];
    return `
      <div class="bi-legend-item">
        <div class="bi-legend-color" style="background: ${color}"></div>
        <div class="bi-legend-info">
          <div class="bi-legend-symbol">${item.symbol}</div>
          <div class="bi-legend-percentage">${item.percentage.toFixed(1)}%</div>
        </div>
        <div class="bi-legend-value">$${formatPrice(item.value)}</div>
      </div>
    `;
  }).join('');
  
  const html = `
    <div class="bi-distribution-chart">
      <div class="bi-pie-chart" style="background: ${gradient}"></div>
      <div class="bi-pie-center">
        <div class="bi-pie-label">持仓</div>
        <div class="bi-pie-count">${distribution.length}</div>
      </div>
    </div>
    <div class="bi-legend">
      ${legend}
    </div>
  `;
  
  const container = document.getElementById('bi-distribution');
  if (container) {
    container.innerHTML = html;
  }
}

/**
 * 渲染交易统计
 */
function renderTradeStats() {
  const stats = biData.tradeStats;
  
  const html = `
    <div class="bi-stats-grid">
      <div class="bi-stat-card">
        <div class="bi-stat-icon">📊</div>
        <div class="bi-stat-value">${stats.totalTrades}</div>
        <div class="bi-stat-label">总交易次数</div>
      </div>
      <div class="bi-stat-card">
        <div class="bi-stat-icon">🟢</div>
        <div class="bi-stat-value">${stats.totalBuy}</div>
        <div class="bi-stat-label">买入次数</div>
      </div>
      <div class="bi-stat-card">
        <div class="bi-stat-icon">🔴</div>
        <div class="bi-stat-value">${stats.totalSell}</div>
        <div class="bi-stat-label">卖出次数</div>
      </div>
      <div class="bi-stat-card">
        <div class="bi-stat-icon">🎯</div>
        <div class="bi-stat-value ${stats.winRate >= 50 ? 'profit' : 'loss'}">${stats.winRate.toFixed(1)}%</div>
        <div class="bi-stat-label">胜率</div>
      </div>
      <div class="bi-stat-card full-width">
        <div class="bi-stat-icon">💰</div>
        <div class="bi-stat-value ${stats.totalProfit >= 0 ? 'profit' : 'loss'}">
          ${stats.totalProfit >= 0 ? '+' : ''}$${formatPrice(stats.totalProfit)}
        </div>
        <div class="bi-stat-label">累计盈亏</div>
      </div>
    </div>
  `;
  
  const container = document.getElementById('bi-trade-stats');
  if (container) {
    container.innerHTML = html;
  }
}

/**
 * 渲染收益趋势（简化版折线图）
 */
function renderProfitTrend() {
  const history = biData.assetHistory;
  
  if (history.length === 0) {
    const container = document.getElementById('bi-trend');
    if (container) {
      container.innerHTML = `
        <div class="empty-state">
          <span class="empty-icon">📈</span>
          <p>暂无历史数据</p>
          <p class="empty-hint">继续交易以生成趋势图</p>
        </div>
      `;
    }
    return;
  }
  
  // 简化：只显示最近 30 条记录
  const recent = history.slice(-30);
  
  // 生成简单的 SVG 折线图
  const width = 600;
  const height = 200;
  const padding = 20;
  
  const values = recent.map(d => d.total);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  
  const points = values.map((value, index) => {
    const x = padding + (index / (values.length - 1)) * (width - padding * 2);
    const y = height - padding - ((value - min) / range) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');
  
  const html = `
    <div class="bi-trend-chart">
      <svg viewBox="0 0 ${width} ${height}" class="bi-trend-svg">
        <defs>
          <linearGradient id="trendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.3" />
            <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:0" />
          </linearGradient>
        </defs>
        
        <!-- 背景网格 -->
        <line x1="${padding}" y1="${height/2}" x2="${width-padding}" y2="${height/2}" 
              stroke="#404040" stroke-width="1" stroke-dasharray="4"/>
        
        <!-- 面积图 -->
        <polygon points="${padding},${height-padding} ${points} ${width-padding},${height-padding}" 
                 fill="url(#trendGradient)" />
        
        <!-- 折线 -->
        <polyline points="${points}" 
                  fill="none" 
                  stroke="#00d4aa" 
                  stroke-width="2" 
                  stroke-linecap="round" 
                  stroke-linejoin="round" />
        
        <!-- 起点和终点标记 -->
        <circle cx="${padding}" cy="${height - padding - ((values[0] - min) / range) * (height - padding * 2)}" 
                r="4" fill="#00d4aa" />
        <circle cx="${width-padding}" cy="${height - padding - ((values[values.length-1] - min) / range) * (height - padding * 2)}" 
                r="4" fill="#00d4aa" />
      </svg>
      
      <div class="bi-trend-info">
        <div class="bi-trend-period">最近 ${recent.length} 条记录</div>
        <div class="bi-trend-change ${values[values.length-1] >= values[0] ? 'profit' : 'loss'}">
          ${((values[values.length-1] - values[0]) / values[0] * 100).toFixed(2)}%
        </div>
      </div>
    </div>
  `;
  
  const container = document.getElementById('bi-trend');
  if (container) {
    container.innerHTML = html;
  }
}

// ===================================
// 导出函数（全局可用）
// ===================================
window.initBIStats = initBIStats;
window.recordAssetSnapshot = recordAssetSnapshot;
window.clearBIData = clearBIData;
window.refreshBIStats = () => {
  calculateHoldingStats();
  renderBIPanel();
};

// ===================================
// 自动初始化
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  // 延迟初始化（等 app.js 加载完成）
  setTimeout(() => {
    if (typeof userAssets !== 'undefined') {
      initBIStats();
    }
  }, 1000);
});
