const express = require("express");

const app = express();

// BTC price endpoint
app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
    );

    const data = await response.json();

    const btcPrice = data.bpi.USD.rate_float;

    res.json({
      symbol: "BTC",
      price_usd: btcPrice,
      updated: data.time.updatedISO,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// optional: auto-refresh endpoint
app.get("/btc", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
    );

    const data = await response.json();

    res.json({
      symbol: "BTC",
      price_usd: data.bpi.USD.rate_float,
      updated: data.time.updatedISO,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("BTC server running"));
