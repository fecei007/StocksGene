const params = [
  ["Asset", "NVDAUSDT"],
  ["Timeframe", "1h"],
  ["Direction", "Long only"],
  ["Session Filter", "Overnight only (US market closed)"],
  ["Entry", "Close > EMA(50) + EMA(8)>EMA(21) + RSI 50–65"],
  ["Stop Loss", "Entry – 1.6 × ATR(14)"],
  ["TP1", "+1.2 × ATR → close 40%"],
  ["TP2", "+2.4 × ATR → close 60%"],
  ["Breakeven", "Move SL to entry after TP1"],
  ["Risk per Trade", "0.7%"],
  ["Max Positions", "1"],
  ["Force Exit", "16 candles or before US open"]
];

const prompt = `Create Playbook: NVDA Overnight Momentum

Asset: NVDAUSDT
Timeframe: 1 hour
Direction: Long only

Session Filter:
Only open new positions when the US stock market is closed (overnight and weekends).
Flat or no new entries during regular US market hours.

Entry (all must be true):
- Close > EMA(50)
- EMA(8) > EMA(21)
- Close > EMA(100)
- RSI(14) between 50 and 65

Stop Loss: Entry - 1.6 * ATR(14)

Take Profit:
- TP1: Entry + 1.2 * ATR(14) → close 40% of position
- TP2: Entry + 2.4 * ATR(14) → close remaining 60%
- After TP1 is hit, move stop loss to entry price

Risk: 0.7% of equity per trade
Maximum 1 open position
Force exit after 16 candles or before US market open

Keep the package simple and deterministic.`;

function renderParams() {
  const container = document.getElementById('params');
  container.innerHTML = params.map(([k, v]) => 
    `<div class="param"><span>${k}</span><span>${v}</span></div>`
  ).join('');
  document.getElementById('prompt').textContent = prompt;
}

function copyPrompt() {
  navigator.clipboard.writeText(prompt).then(() => alert('Playbook prompt copied!'));
}

function copyParams() {
  const obj = Object.fromEntries(params);
  navigator.clipboard.writeText(JSON.stringify(obj, null, 2)).then(() => alert('Parameters copied as JSON!'));
}

renderParams();