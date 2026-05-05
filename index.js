const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/", async (req, res) => {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage"
      ]
    });

    const page = await browser.newPage();

    const url =
      "https://skyline.herold.at/project?dsrid=440&id=573576";

    await page.goto(url, {
      waitUntil: "networkidle2"
    });

    // IMPORTANT: wait for the element BEFORE scraping
    await page.waitForSelector('a[href*="id=2370"]', {
      timeout: 15000
    });

    // small stability buffer (helps SPA pages)
    await page.waitForTimeout(1000);

    const result = await page.$$eval('a[href*="id=2370"]', (els) =>
      els.map((el) => ({
        text: el.textContent.trim(),
        href: el.getAttribute("href"),
      }))
    );

    res.json(result);

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });

  } finally {
    if (browser) await browser.close();
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running"));
