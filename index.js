const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
    );

    const data = await response.json();

    // ✅ safety check
    if (!data || !data.price) {
      throw new Error("Invalid API response: " + JSON.stringify(data));
    }

    res.json({
      symbol: "BTC",
      price_usd: Number(data.price), // safer than parseFloat
      updated: new Date().toISOString(),
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("BTC server running on port", PORT));
