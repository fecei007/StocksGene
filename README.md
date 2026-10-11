# NVDA Overnight Momentum

**Tokenized NVDA trades 24/7. Most gains happen while Wall Street sleeps.**

A structured GetAgent Playbook focused on the overnight edge in tokenized US stocks, built for Bitget AI Hackathon S2.

## Why This Exists

Traditional US stock traders only operate during market hours. Tokenized NVDA on Bitget continues to trade overnight and on weekends. Bitget’s own analysis showed that a significant portion of NVDA returns came from overnight moves rather than the regular session.



I built this because tokenized US stocks on Bitget trade 24/7, while traditional markets are closed overnight. Bitget’s own analysis showed that a large portion of NVDA’s returns came from overnight moves rather than regular trading hours. Most existing strategies ignore this window.
The core hypothesis is that a simple trend and momentum filter applied only during overnight and weekend sessions can capture part of that edge with controlled risk. The strategy uses EMA alignment and RSI as entry signals, an ATR-based stop loss, and partial take-profit levels. Risk is limited to 0.7% per trade with a maximum of one open position.



Target users are retail and intermediate traders who trade tokenized US stocks on Bitget but currently only look at regular market hours. These users typically have smaller capital, trade part-time, and miss overnight moves because they are not monitoring the market continuously.
Existing solutions either trade all the time without a session filter or focus only on crypto. They do not specifically target the overnight period for tokenized stocks. This Playbook solves that by staying inactive during US market hours and only activating when the overnight edge may exist.


Validation data and key metrics : 
Test period: Approximately 6 months of local simulation (observed).
Return: +7.5% (observed)
Win rate: 62% (observed)
Profit factor: 2.74 (observed)
Max drawdown: 1.2% (observed)
These figures come from earlier backtests of similar rules. Full overnight-filtered validation on GetAgent Studio is still in progress (targeted).
To prove usage, the Playbook prompt is publicly available on the demo site. Traders can copy it and run it in paper mode on GetAgent Studio. Activation will be measured by the number of paper runs and feedback collected after the hackathon (targeted).


Built:
Strategy rules and parameters
Demo website with copyable Playbook prompt
GitHub repository
Not built yet:
Full live paper trading results on GetAgent Studio
Automated overnight session detection
Problems hit:
Early basket strategies produced too few trades or negative results. Simplified to single-asset NVDA with clearer filters.
Next:
Run the strategy in paper mode on GetAgent Studio and collect results.
Tools used:
GetAgent Studio (Playbook creation and paper trading)
Bitget tokenized stock perpetuals (NVDAUSDT)



Agentic trading works best when the rules are clear and the agent has a defined job rather than open-ended freedom. For tokenized stocks, the 24/7 nature creates opportunities that traditional traders miss. The useful role of AI here is to consistently apply simple, well-defined rules during periods when humans are not watching, while keeping risk tightly controlled.

