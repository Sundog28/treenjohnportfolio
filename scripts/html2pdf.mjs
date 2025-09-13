import path from "node:path";
import puppeteer from "puppeteer";

const root = process.cwd();
const docs = [
  { html: "public/resume/resume_full.html", pdf: "public/resume/resume_full.pdf" },
  { html: "public/resume/resume_mini.html", pdf: "public/resume/resume_mini.pdf" },
];

const launchArgs = ["--no-sandbox", "--disable-setuid-sandbox"];
const browser = await puppeteer.launch({ headless: "new", args: launchArgs });

try {
  for (const { html, pdf } of docs) {
    const fileUrl = `file://${path.join(root, html)}`;
    const page = await browser.newPage();
    await page.goto(fileUrl, { waitUntil: "networkidle0" });
    await page.pdf({
      path: path.join(root, pdf),
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "10mm", right: "10mm" },
    });
    await page.close();
    console.log("✔ wrote", pdf);
  }
} finally {
  await browser.close();
}
