const puppeteer = require("puppeteer");
const fs = require("fs-extra");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: true }); // Launch a browser object for us to surf the web. Headless means no browser GUI
    const page = await browser.newPage(); // Create a new page for us to navigate to

    async function loadPagSections() {
      await page.goto("https://experts.shopify.com/"); // Go to a specified web site
      await page.waitForSelector(".section"); // Wait for the section elements to load.
      const sections = await page.$$(".section"); // $$ is document.querySelectorAll

      return sections;
    }

    const returnedSections = await loadPagSections();

    // // Loop through each section of the main page
    // for (let i = 0; i < returnedSections.length; i++) {
    //   // await page.goto("https://experts.shopify.com/"); // Go to a specified web site
    //   // await page.waitForSelector(".section"); // Wait for the section elements to load.

    //   // const sections = await page.$$(".section"); // $$ is document.querySelectorAll
    //   returnedSections;
    //   const section = returnedSections[i];

    //   const button = await section.$("a.marketing-button"); // Select the button within each section
    //   const buttonName = await page.evaluate(
    //     button => button.innerText,
    //     button
    //   );
    //   console.log("\n\n");
    //   console.log(buttonName);
    //   button.click();

    //   await page.waitForSelector("#ExpertsResults");
    //   const lis = await page.$$("li.expert-card");

    //   // Loop through each LI of the inner page
    //   for (li of lis) {
    //     const name = await li.$eval("h2", h2 => h2.innerText);

    //     console.log(name);
    //   }
    // }
    // // await page.screenshot({ path: "test.png" });
    // // await browser.close();
  } catch (err) {
    console.log("our error", err);
  }
})();
