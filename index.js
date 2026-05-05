const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        },
      }
    );

    // DEBUG: show real status if it fails
    if (!response.ok) {
      const text = await response.text();
      console.log("STATUS:", response.status);
      console.log("BODY:", text);

      throw new Error(`API failed with status ${response.status}`);
    }

    const data = await response.json();

    res.json({
      symbol: "BTC",
      price_usd: data.bitcoin.usd,
      updated: new Date().toISOString(),
    });

  } catch (err) {
    console.error("ERROR:", err.message);

    res.status(500).json({
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("BTC server running"));
