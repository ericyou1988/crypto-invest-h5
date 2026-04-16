/**
 * CryptoInvest H5 - 多语言支持模块
 * 支持中文、英文、日文等多种语言切换
 */

// ===================================
// 语言配置
// ===================================
const LANGUAGES = {
  'zh-CN': {
    name: '简体中文',
    flag: '🇨🇳',
    code: 'zh-CN',
  },
  'en-US': {
    name: 'English',
    flag: '🇺🇸',
    code: 'en-US',
  },
  'ja-JP': {
    name: '日本語',
    flag: '🇯🇵',
    code: 'ja-JP',
  },
  'ko-KR': {
    name: '한국어',
    flag: '🇰🇷',
    code: 'ko-KR',
  },
};

// ===================================
// 翻译字典
// ===================================
const TRANSLATIONS = {
  'zh-CN': {
    // 应用标题
    'app.title': 'InvestHub - 多市场投资平台',
    'app.name': 'InvestHub',
    'app.subtitle': '多市场投资平台',
    
    // 导航
    'nav.home': '首页',
    'nav.trade': '交易',
    'nav.market': '行情',
    'nav.portfolio': '持仓',
    'nav.history': '历史',
    'nav.bi': 'BI 统计',
    
    // 首页
    'home.total_assets': '总资产估值 (USD)',
    'home.quick_actions': '快捷操作',
    'home.hot_crypto': '🔥 热门虚拟币',
    
    // 交易
    'trade.title': '💱 交易',
    'trade.pay': '支付',
    'trade.receive': '接收',
    'trade.exchange_rate': '汇率',
    'trade.fee': '手续费',
    'trade.buy': '买入',
    'trade.sell': '卖出',
    'trade.confirm': '确认交易',
    
    // 行情
    'market.title': '📊 市场行情',
    'market.all': '全部',
    'market.gainers': '涨幅榜',
    'market.losers': '跌幅榜',
    
    // 持仓
    'portfolio.title': '💼 我的持仓',
    'portfolio.no_holdings': '暂无持仓',
    'portfolio.go_trade': '去交易',
    'portfolio.holding_value': '持仓价值',
    'portfolio.holding_amount': '持有数量',
    'portfolio.profit_loss': '24h 盈亏',
    
    // 历史
    'history.title': '📜 交易历史',
    'history.no_records': '暂无交易记录',
    'history.buy': '买入',
    'history.sell': '卖出',
    
    // BI 统计
    'bi.title': '📊 统计分析',
    'bi.overview': '资产概览',
    'bi.distribution': '持仓分布',
    'bi.trade_stats': '交易统计',
    'bi.trend': '收益趋势',
    'bi.total_assets': '总资产',
    'bi.total_cost': '总成本',
    'bi.total_profit': '总盈亏',
    'bi.profit_rate': '收益率',
    'bi.total_trades': '总交易次数',
    'bi.buy_count': '买入次数',
    'bi.sell_count': '卖出次数',
    'bi.win_rate': '胜率',
    'bi.cumulative_profit': '累计盈亏',
    'bi.holdings': '持仓',
    'bi.no_data': '暂无数据',
    
    // 钱包
    'wallet.connect': '连接钱包',
    'wallet.disconnect': '断开连接',
    'wallet.select': '选择钱包',
    'wallet.connected': '已连接',
    
    // 通用
    'common.loading': '加载中...',
    'common.success': '成功',
    'common.error': '错误',
    'common.cancel': '取消',
    'common.confirm': '确认',
    'common.close': '关闭',
    'common.refresh': '刷新',
    'common.search': '搜索',
    'common.filter': '筛选',
    'common.sort': '排序',
    
    // 消息提示
    'msg.trade_success': '交易成功',
    'msg.trade_failed': '交易失败',
    'msg.connect_wallet_first': '请先连接钱包',
    'msg.invalid_amount': '请输入有效金额',
    'msg.refresh_success': '刷新成功',
  },
  
  'en-US': {
    // 应用标题
    'app.title': 'InvestHub - Multi-Market Investment Platform',
    'app.name': 'InvestHub',
    'app.subtitle': 'Multi-Market Investment Platform',
    
    // 导航
    'nav.home': 'Home',
    'nav.trade': 'Trade',
    'nav.market': 'Market',
    'nav.portfolio': 'Portfolio',
    'nav.history': 'History',
    'nav.bi': 'Analytics',
    
    // 首页
    'home.total_assets': 'Total Assets (USD)',
    'home.quick_actions': 'Quick Actions',
    'home.hot_crypto': '🔥 Hot Cryptocurrencies',
    
    // 交易
    'trade.title': '💱 Trade',
    'trade.pay': 'Pay',
    'trade.receive': 'Receive',
    'trade.exchange_rate': 'Exchange Rate',
    'trade.fee': 'Fee',
    'trade.buy': 'Buy',
    'trade.sell': 'Sell',
    'trade.confirm': 'Confirm Trade',
    
    // 行情
    'market.title': '📊 Market',
    'market.all': 'All',
    'market.gainers': 'Gainers',
    'market.losers': 'Losers',
    
    // 持仓
    'portfolio.title': '💼 My Portfolio',
    'portfolio.no_holdings': 'No Holdings',
    'portfolio.go_trade': 'Start Trading',
    'portfolio.holding_value': 'Value',
    'portfolio.holding_amount': 'Amount',
    'portfolio.profit_loss': '24h P/L',
    
    // 历史
    'history.title': '📜 Transaction History',
    'history.no_records': 'No Transactions',
    'history.buy': 'Buy',
    'history.sell': 'Sell',
    
    // BI 统计
    'bi.title': '📊 Analytics',
    'bi.overview': 'Overview',
    'bi.distribution': 'Distribution',
    'bi.trade_stats': 'Trade Stats',
    'bi.trend': 'Profit Trend',
    'bi.total_assets': 'Total Assets',
    'bi.total_cost': 'Total Cost',
    'bi.total_profit': 'Total Profit',
    'bi.profit_rate': 'Return Rate',
    'bi.total_trades': 'Total Trades',
    'bi.buy_count': 'Buy Count',
    'bi.sell_count': 'Sell Count',
    'bi.win_rate': 'Win Rate',
    'bi.cumulative_profit': 'Cumulative Profit',
    'bi.holdings': 'Holdings',
    'bi.no_data': 'No Data',
    
    // 钱包
    'wallet.connect': 'Connect Wallet',
    'wallet.disconnect': 'Disconnect',
    'wallet.select': 'Select Wallet',
    'wallet.connected': 'Connected',
    
    // 通用
    'common.loading': 'Loading...',
    'common.success': 'Success',
    'common.error': 'Error',
    'common.cancel': 'Cancel',
    'common.confirm': 'Confirm',
    'common.close': 'Close',
    'common.refresh': 'Refresh',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.sort': 'Sort',
    
    // 消息提示
    'msg.trade_success': 'Trade Successful',
    'msg.trade_failed': 'Trade Failed',
    'msg.connect_wallet_first': 'Please Connect Wallet First',
    'msg.invalid_amount': 'Please Enter Valid Amount',
    'msg.refresh_success': 'Refresh Successful',
  },
  
  'ja-JP': {
    // 应用标题
    'app.title': 'InvestHub - 複数市場投資プラットフォーム',
    'app.name': 'InvestHub',
    'app.subtitle': '複数市場投資プラットフォーム',
    
    // 导航
    'nav.home': 'ホーム',
    'nav.trade': '取引',
    'nav.market': 'マーケット',
    'nav.portfolio': 'ポートフォリオ',
    'nav.history': '履歴',
    'nav.bi': '分析',
    
    // 首页
    'home.total_assets': '総資産 (USD)',
    'home.quick_actions': 'クイックアクション',
    'home.hot_crypto': '🔥 人気仮想通貨',
    
    // 交易
    'trade.title': '💱 取引',
    'trade.pay': '支払い',
    'trade.receive': '受け取り',
    'trade.exchange_rate': '為替レート',
    'trade.fee': '手数料',
    'trade.buy': '買い',
    'trade.sell': '売り',
    'trade.confirm': '取引を確定',
    
    // 行情
    'market.title': '📊 マーケット',
    'market.all': 'すべて',
    'market.gainers': '上昇ランキング',
    'market.losers': '下落ランキング',
    
    // 持仓
    'portfolio.title': '💼 マイポートフォリオ',
    'portfolio.no_holdings': '保有資産なし',
    'portfolio.go_trade': '取引を始める',
    'portfolio.holding_value': '評価額',
    'portfolio.holding_amount': '保有数量',
    'portfolio.profit_loss': '24 時間損益',
    
    // 历史
    'history.title': '📜 取引履歴',
    'history.no_records': '取引記録なし',
    'history.buy': '買い',
    'history.sell': '売り',
    
    // BI 统计
    'bi.title': '📊 分析',
    'bi.overview': '概要',
    'bi.distribution': '内訳',
    'bi.trade_stats': '取引統計',
    'bi.trend': '収益トレンド',
    'bi.total_assets': '総資産',
    'bi.total_cost': '総コスト',
    'bi.total_profit': '総損益',
    'bi.profit_rate': '収益率',
    'bi.total_trades': '総取引数',
    'bi.buy_count': '買い回数',
    'bi.sell_count': '売り回数',
    'bi.win_rate': '勝率',
    'bi.cumulative_profit': '累積損益',
    'bi.holdings': '保有資産',
    'bi.no_data': 'データなし',
    
    // 钱包
    'wallet.connect': 'ウォレットを接続',
    'wallet.disconnect': '接続を解除',
    'wallet.select': 'ウォレットを選択',
    'wallet.connected': '接続済み',
    
    // 通用
    'common.loading': '読み込み中...',
    'common.success': '成功',
    'common.error': 'エラー',
    'common.cancel': 'キャンセル',
    'common.confirm': '確認',
    'common.close': '閉じる',
    'common.refresh': '更新',
    'common.search': '検索',
    'common.filter': 'フィルター',
    'common.sort': '並び替え',
    
    // 消息提示
    'msg.trade_success': '取引成功',
    'msg.trade_failed': '取引失敗',
    'msg.connect_wallet_first': 'まずウォレットを接続してください',
    'msg.invalid_amount': '有効な金額を入力してください',
    'msg.refresh_success': '更新成功',
  },
  
  'ko-KR': {
    // 应用标题
    'app.title': 'InvestHub - 다중 시장 투자 플랫폼',
    'app.name': 'InvestHub',
    'app.subtitle': '다중 시장 투자 플랫폼',
    
    // 导航
    'nav.home': '홈',
    'nav.trade': '거래',
    'nav.market': '시장',
    'nav.portfolio': '포트폴리오',
    'nav.history': '기록',
    'nav.bi': '분석',
    
    // 首页
    'home.total_assets': '총 자산 (USD)',
    'home.quick_actions': '바로가기',
    'home.hot_crypto': '🔥 인기 암호화폐',
    
    // 交易
    'trade.title': '💱 거래',
    'trade.pay': '지불',
    'trade.receive': '수신',
    'trade.exchange_rate': '환율',
    'trade.fee': '수수료',
    'trade.buy': '매수',
    'trade.sell': '매도',
    'trade.confirm': '거래 확인',
    
    // 行情
    'market.title': '📊 시장',
    'market.all': '전체',
    'market.gainers': '상승률',
    'market.losers': '하락률',
    
    // 持仓
    'portfolio.title': '💼 내 포트폴리오',
    'portfolio.no_holdings': '보유 자산 없음',
    'portfolio.go_trade': '거래 시작',
    'portfolio.holding_value': '평가액',
    'portfolio.holding_amount': '보유 수량',
    'portfolio.profit_loss': '24 시간 손익',
    
    // 历史
    'history.title': '📜 거래 기록',
    'history.no_records': '거래 기록 없음',
    'history.buy': '매수',
    'history.sell': '매도',
    
    // BI 统计
    'bi.title': '📊 분석',
    'bi.overview': '개요',
    'bi.distribution': '분포',
    'bi.trade_stats': '거래 통계',
    'bi.trend': '수익 추이',
    'bi.total_assets': '총 자산',
    'bi.total_cost': '총 비용',
    'bi.total_profit': '총 손익',
    'bi.profit_rate': '수익률',
    'bi.total_trades': '총 거래 횟수',
    'bi.buy_count': '매수 횟수',
    'bi.sell_count': '매도 횟수',
    'bi.win_rate': '승률',
    'bi.cumulative_profit': '누적 손익',
    'bi.holdings': '보유 자산',
    'bi.no_data': '데이터 없음',
    
    // 钱包
    'wallet.connect': '지갑 연결',
    'wallet.disconnect': '연결 해제',
    'wallet.select': '지갑 선택',
    'wallet.connected': '연결됨',
    
    // 通用
    'common.loading': '로딩 중...',
    'common.success': '성공',
    'common.error': '오류',
    'common.cancel': '취소',
    'common.confirm': '확인',
    'common.close': '닫기',
    'common.refresh': '새로고침',
    'common.search': '검색',
    'common.filter': '필터',
    'common.sort': '정렬',
    
    // 消息提示
    'msg.trade_success': '거래 성공',
    'msg.trade_failed': '거래 실패',
    'msg.connect_wallet_first': '먼저 지갑을 연결해주세요',
    'msg.invalid_amount': '유효한 금액을 입력해주세요',
    'msg.refresh_success': '새로고침 성공',
  },
};

// ===================================
// 当前语言
// ===================================
let currentLang = 'zh-CN';

// ===================================
// 语言切换函数
// ===================================

/**
 * 切换到指定语言
 */
function switchLanguage(langCode) {
  if (!LANGUAGES[langCode]) {
    console.error('不支持的语言:', langCode);
    return false;
  }
  
  currentLang = langCode;
  
  // 保存到本地存储
  localStorage.setItem('crypto_invest_language', langCode);
  
  // 更新页面文本
  updatePageTexts();
  
  // 更新语言选择器 UI
  updateLanguageSelector();
  
  console.log('🌐 语言已切换:', langCode);
  return true;
}

/**
 * 初始化语言设置
 */
function initLanguage() {
  // 从本地存储加载
  const saved = localStorage.getItem('crypto_invest_language');
  if (saved && LANGUAGES[saved]) {
    currentLang = saved;
  } else {
    // 尝试从浏览器获取
    const browserLang = navigator.language || navigator.userLanguage;
    const supportedLang = Object.keys(LANGUAGES).find(lang => 
      browserLang.startsWith(lang.split('-')[0])
    );
    if (supportedLang) {
      currentLang = supportedLang;
    }
  }
  
  // 应用语言设置
  updatePageTexts();
  console.log('🌐 语言初始化完成:', currentLang);
}

/**
 * 更新页面文本
 */
function updatePageTexts() {
  const t = TRANSLATIONS[currentLang];
  if (!t) return;
  
  // 更新带有 data-i18n 属性的元素
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      // 保留 emoji
      el.textContent = t[key];
    }
  });
  
  // 更新 HTML lang 属性
  document.documentElement.lang = currentLang;
  
  // 触发语言更新事件
  window.dispatchEvent(new CustomEvent('languageChanged', { 
    detail: { lang: currentLang } 
  }));
}

/**
 * 更新语言选择器 UI
 */
function updateLanguageSelector() {
  const selector = document.getElementById('language-selector');
  if (!selector) return;
  
  // 更新当前语言显示
  const currentLangBtn = selector.querySelector('.lang-btn.active');
  if (currentLangBtn) {
    currentLangBtn.classList.remove('active');
  }
  
  const newLangBtn = selector.querySelector(`[data-lang="${currentLang}"]`);
  if (newLangBtn) {
    newLangBtn.classList.add('active');
  }
}

/**
 * 获取翻译文本
 */
function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || key;
}

// ===================================
// 语言切换 UI 组件
// ===================================

/**
 * 创建语言切换器
 */
function createLanguageSelector() {
  const items = Object.values(LANGUAGES).map(lang => `
    <button class="lang-option" data-lang="${lang.code}" onclick="switchLanguage('${lang.code}')">
      <span class="lang-flag">${lang.flag}</span>
      <span class="lang-name">${lang.name}</span>
    </button>
  `).join('');
  
  return `
    <div class="language-selector" id="language-selector">
      <button class="lang-toggle" id="lang-toggle">
        <span class="lang-current">${LANGUAGES[currentLang]?.flag}</span>
        <span class="lang-arrow">▼</span>
      </button>
      <div class="lang-dropdown">
        ${items}
      </div>
    </div>
  `;
}

// ===================================
// 全局函数
// ===================================
window.switchLanguage = switchLanguage;
window.t = t;
window.getTranslations = () => TRANSLATIONS[currentLang];
window.getCurrentLang = () => currentLang;

// ===================================
// 自动初始化
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
});

// ===================================
// CSS 样式（动态注入）
// ===================================
const languageStyles = `
  /* 语言切换器样式 */
  .language-selector {
    position: relative;
    display: inline-block;
  }
  
  .lang-toggle {
    background: var(--surface-variant);
    border: 1px solid var(--outline-variant);
    border-radius: var(--radius-full);
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all var(--duration-fast) var(--ease-standard);
    color: var(--on-surface);
    font-size: 14px;
  }
  
  .lang-toggle:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
  
  .lang-current {
    font-size: 18px;
  }
  
  .lang-arrow {
    font-size: 10px;
    transition: transform var(--duration-fast) var(--ease-standard);
  }
  
  .lang-toggle.active .lang-arrow {
    transform: rotate(180deg);
  }
  
  .lang-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background: var(--surface);
    border: 1px solid var(--outline-variant);
    border-radius: var(--radius-lg);
    padding: 8px;
    min-width: 180px;
    box-shadow: var(--shadow-3);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all var(--duration-normal) var(--ease-standard);
    z-index: 1001;
  }
  
  .lang-dropdown.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .lang-option {
    width: 100%;
    background: transparent;
    border: none;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    border-radius: var(--radius-md);
    transition: all var(--duration-fast) var(--ease-standard);
    color: var(--on-surface);
    font-size: 14px;
  }
  
  .lang-option:hover {
    background: var(--surface-variant);
  }
  
  .lang-option.active {
    background: var(--primary-container);
    color: var(--primary);
  }
  
  .lang-flag {
    font-size: 20px;
  }
  
  .lang-name {
    font-weight: 500;
  }
`;

// 注入样式
const styleEl = document.createElement('style');
styleEl.textContent = languageStyles;
document.head.appendChild(styleEl);
