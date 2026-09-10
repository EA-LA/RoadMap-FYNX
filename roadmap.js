    const ROADMAP_DATA = [
      { id:'fynx', label:'FYNX', x:180, y:200, details:[
        'Build the core dashboard foundation.',
        'Include Calculator, News, and Trading Journal.',
        'Make it fast, clean, and real product quality.',
        'This is the base layer for everything else.'
      ]},
      { id:'fynx1', label:'FYNX 1\nEntry Trading', x:340, y:180, details:[
        'Build a simple entry trading panel like MetaTrader-style execution.',
        'Focus on placing trades, risk controls, and basic order types.',
        'Keep it lightweight and easy for beginners.',
        'This becomes the first "trading engine" UI.'
      ]},
      { id:'fynx2', label:'FYNX 2\nTrading Chart', x:500, y:220, details:[
        'Add advanced charts like TradingView-style experience.',
        'Include indicators, drawing tools, timeframes, and watchlist.',
        'Make it smooth and interactive with real-time feel.',
        'This becomes the main visual trading workstation.'
      ]},
      { id:'fynx3', label:'FYNX 3\nBroker Layer', x:650, y:190, details:[
        'Add broker infrastructure conceptually as the next step.',
        'Show that FYNX becomes the platform where trades route and execute.',
        'Prepare for accounts, balances, and compliance-ready structure.',
        'This is where FYNX becomes a real brokerage product.'
      ]},
      { id:'fynx4', label:'FYNX 4\nFunded Platform', x:810, y:240, details:[
        'Create a funded-trader platform concept (challenges, rules, payouts).',
        'Track performance, drawdown, and objectives.',
        'Build trust systems and clear dashboards.',
        'This unlocks scale with traders worldwide.'
      ]},
      { id:'fynx5', label:'FYNX 5\nMarket News Hub', x:950, y:210, details:[
        'Build a market news hub like ForexFactory-style calendar/news flow.',
        'Show events, impact levels, filters, and summaries.',
        'Keep it fast and constantly updating.',
        'This makes the platform feel alive daily.'
      ]},
      { id:'fynx6', label:'FYNX 6\nCrypto + Wallet', x:1100, y:270, details:[
        'Add a crypto layer: wallet, transactions, and transfers.',
        'Show that users can store, move, and track crypto inside FYNX.',
        'Make it secure and clean with strong UX.',
        'This expands FYNX into full finance rails.'
      ]},
      { id:'fynxai', label:'FYNX AI', x:1240, y:240, details:[
        'Add an AI layer across the whole ecosystem.',
        'AI helps with analysis, education, decision support, and automation.',
        'Make it feel like an "AI co-pilot" inside the platform.',
        'This becomes the power multiplier for everything.'
      ]},
      { id:'stock', label:'Stock of\nFYNX', x:250, y:480, details:[
        'Show the long-term goal of turning FYNX into a public company.',
        'Build a brand that becomes a real financial institution.',
        'Prepare for big partnerships and serious scale.',
        'This is the "public market" endgame milestone.'
      ]},
      { id:'coin', label:'Coin of\nFYNX', x:420, y:520, details:[
        'Show the goal of launching a native crypto asset for the ecosystem.',
        'Use it for utility, payments, and community growth.',
        'Tie it to products so it\'s not just hype.',
        'This is the FYNX network expansion milestone.'
      ]},
      { id:'banking', label:'Start\nBanking', x:590, y:500, details:[
        'Show the goal of building banking services and accounts.',
        'Move beyond tools into real financial products.',
        'Build systems that can handle large-scale users.',
        'This makes FYNX a real financial backbone.'
      ]},
      { id:'privateequity', label:'Private\nEquity', x:760, y:540, details:[
        'Show the goal of owning stakes in companies and building an empire.',
        'Use capital to acquire, invest, and scale real businesses.',
        'Connect it to the finance ecosystem strategy.',
        'This is how FYNX grows beyond one product.'
      ]},
      { id:'investmentbanking', label:'Investment\nBanking System', x:950, y:520, details:[
        'Show the goal of building an institutional-grade banking layer.',
        'Help big money move, invest, and structure deals.',
        'Make it feel like next-generation Wall Street tools.',
        'This is the "elite finance" product tier.'
      ]},
      { id:'wallstreet', label:'Wall Street\nLevel', x:1140, y:560, details:[
        'Show the goal of reaching the highest finance arena.',
        'Compete with the biggest names in the financial industry.',
        'Build products enterprises and institutions actually use.',
        'This is the ultimate credibility and dominance milestone.'
      ]}
    ];


const groups = [
  {id:'foundation', title:'The trading foundation', eyebrow:'PHASE 01', description:'The tools, execution, and infrastructure at the core of FYNX.', start:0, end:6},
  {id:'ecosystem', title:'A connected ecosystem', eyebrow:'PHASE 02', description:'Extend the platform through digital assets, intelligence, and new financial services.', start:6, end:11},
  {id:'institutional', title:'Institutional scale', eyebrow:'PHASE 03', description:'The long-term ambition: investment capabilities and a place in global finance.', start:11, end:14}
];
const names = ['Core dashboard','Entry trading','Trading charts','Broker infrastructure','Funded platform','Market news hub','Crypto & wallet','FYNX AI','FYNX public company','FYNX coin','Banking services','Private equity','Investment banking','Wall Street scale'];
const summaries = ['Calculator, market news, and a trading journal in one workspace.','Simple execution with order types and built-in risk controls.','Advanced charting, indicators, drawing tools, and watchlists.','The account and execution infrastructure behind the platform.','Trader challenges, performance objectives, and payout systems.','An economic calendar and a continuous flow of market context.','Wallets, transactions, and transfers within the FYNX ecosystem.','Analysis, education, and decision support across the platform.','A long-term ambition to bring FYNX to the public markets.','A native asset connected to ecosystem utility and payments.','Accounts and financial services beyond the trading workspace.','Invest in, acquire, and grow businesses beyond the core product.','Tools and infrastructure for institutional capital and deals.','Build financial products used by enterprises and institutions.'];
const root = document.querySelector('#roadmap');
groups.forEach(group => {
  const section = document.createElement('section');
  section.id = group.id; section.className = 'phase'; section.setAttribute('aria-labelledby',group.id+'-title');
  section.innerHTML = `<div class="phase-heading"><div><p class="eyebrow">${group.eyebrow}</p><h2 id="${group.id}-title">${group.title}</h2><p>${group.description}</p></div><span class="phase-count">${String(group.end-group.start).padStart(2,'0')} milestones</span></div>`;
  ROADMAP_DATA.slice(group.start,group.end).forEach((item,offset)=>{
    const i=group.start+offset;
    const detail=document.createElement('details'); detail.className='milestone'; detail.id=item.id;
    detail.innerHTML=`<summary><span class="number">${String(i+1).padStart(2,'0')}</span><span class="milestone-copy"><span class="milestone-title">${names[i]}</span><span class="summary-text">${summaries[i]}</span></span><span class="expand" aria-hidden="true"></span></summary><div class="milestone-body"><p class="eyebrow">THE MILESTONE</p><ul>${item.details.map(line=>`<li>${line}</li>`).join('')}</ul></div>`;
    section.append(detail);
  });
  root.append(section);
});
const links = [...document.querySelectorAll('.phase-nav a')];
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}});
},{rootMargin:'-15% 0px -60% 0px'});
document.querySelectorAll('.phase').forEach(section=>observer.observe(section));
