const express = require("express");
const puppeteer = require("puppeteer");

const app = express();

app.get("/", async (req, res) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();

  await page.goto("https://skyline.herold.at/project?dsrid=440&id=573576", {
    waitUntil: "networkidle2",
  });

  const result = await page.$$eval('a[href*="id=2370"]', els =>
    els.map(el => ({
      text: el.textContent.trim(),
      href: el.getAttribute("href"),
    }))
  );

  await browser.close();

  res.json(result);
});

app.listen(10000, () => console.log("Server running"));
