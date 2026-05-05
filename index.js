const express = require("express");
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

const app = express();

app.get("/", async (req, res) => {
  let browser;

  try {
    browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless
    });

    const page = await browser.newPage();

    await page.goto(
      "https://skyline.herold.at/project?dsrid=440&id=573576",
      { waitUntil: "networkidle2" }
    );

    const result = await page.$$eval('a[href*="id=2370"]', els =>
      els.map(el => ({
        text: el.textContent.trim(),
        href: el.getAttribute("href"),
      }))
    );

    res.json(result);

  } catch (err) {
    res.status(500).json({ error: err.message });

  } finally {
    if (browser) await browser.close();
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log("Server running"));
