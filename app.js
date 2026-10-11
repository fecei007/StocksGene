const params = [
  ["Asset", "NVDAUSDT"],
  ["Timeframe", "1h"],
  ["Direction", "Long only"],
  ["Session", "Overnight only"],
  ["Entry", "Close > EMA50 + EMA8>EMA21 + RSI 50-65"],
  ["SL", "1.6 × ATR"],
  ["TP1", "1.2 × ATR (40%)"],
  ["TP2", "2.4 × ATR (60%)"],
  ["Risk", "0.7%"],
  ["Max Positions", "1"],
  ["Force Exit", "16 candles or before US open"]
];

const prompt = `Create Playbook: NVDA Overnight Momentum

Asset: NVDAUSDT
Timeframe: 1 hour
Direction: Long only

Only open positions when the US stock market is closed (overnight and weekends).

Entry:
- Close > EMA(50)
- EMA(8) > EMA(21)
- Close > EMA(100)
- RSI(14) between 50 and 65

Stop Loss: Entry - 1.6 * ATR(14)

Take Profit:
- TP1: +1.2 ATR → close 40%
- TP2: +2.4 ATR → close 60%
- Move SL to entry after TP1

Risk: 0.7% per trade
Max 1 position
Force exit after 16 candles or before US open.`;

function render() {
  document.getElementById('params').innerHTML = params.map(([k,v]) => 
    `<div class="param"><span>${k}</span><span>${v}</span></div>`).join('');
  document.getElementById('prompt').textContent = prompt;
}

function copyPrompt() {
  navigator.clipboard.writeText(prompt).then(() => alert('Prompt copied'));
}
function copyJSON() {
  navigator.clipboard.writeText(JSON.stringify(Object.fromEntries(params), null, 2))
    .then(() => alert('JSON copied'));
}
render();