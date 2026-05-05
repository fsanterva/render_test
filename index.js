const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    );

    if (!response.ok) {
      throw new Error("API response not OK");
    }

    const data = await response.json();

    res.json({
      symbol: "BTC",
      price_usd: data.bitcoin.usd,
      updated: new Date().toISOString(),
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("BTC server running"));
