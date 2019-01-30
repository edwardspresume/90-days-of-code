const fs = require("fs-extra");
const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: true }); // Launch a browser object for us to surf through. Headless means no browser GUI
    const page = await browser.newPage(); // Create a new page for us to navigate to

    async function loadHomePageSections() {
      await page.goto("https://experts.shopify.com/"); // Go to a specified web site
      await page.waitForSelector(".section"); // Wait for the section elements to load.
      const sections = await page.$$(".section"); // $$ is document.querySelectorAll

      return sections;
    }

    const homepageSections = await loadHomePageSections();

    // Loop through each section of the home page
    for (let i = 0; i < homepageSections.length; i++) {
      const homepageSections = await loadHomePageSections();
      const section = homepageSections[i];

      const button = await section.$("a.marketing-button"); // Select the button within each section
      const buttonName = await page.evaluate(
        button => button.innerText,
        button
      );

      console.log("\n\n");
      console.log(buttonName);

      button.click();

      await page.waitForSelector("#ExpertsResults"); // Select the list of the inner pages
      const lis = await page.$$("li.expert-card"); // Select the list items of the inner pages

      // Loop through each LI of the inner pages
      for (li of lis) {
        const name = await li.$eval("h2", h2 => h2.innerText); // Select the names of each expect

        console.log("Name:", name);
      }
    }
    // await page.screenshot({ path: "test.png" });
    // await browser.close();
  } catch (err) {
    console.log("our error", err);
  }
})();
