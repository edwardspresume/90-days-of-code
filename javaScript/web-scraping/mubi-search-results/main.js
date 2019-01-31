console.clear();
const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: true }); // Launch a chrome browser through puppeteer

    const page = await browser.newPage(); // Set up a new page

    await page.goto("https://mubi.com/"); // Go to this site

    const searchInputSelector = ".search-form__input"; // Target the search input element

    await page.waitForSelector(searchInputSelector); // Wait for the search input to load

    await page.type(searchInputSelector, "Love"); // Search up the word love

    await page.keyboard.press("Enter");

    await page.waitForSelector("#search-results-nav li"); // Wait for the search result stats to load

    const categories = await page.$$("#search-results-nav li"); // Select all the li categories of the search result

    // Loop through all the categories
    for (category of categories) {
      // Get the label name of the category
      const label = await category.$eval(
        ".nav-label",
        label => label.innerText
      );

      const stat = await category.$eval(".nav-stat", stat => stat.innerText); // Get the number for the categories
    }

    const filmGrid = await page.$$(".film-grid li"); // Select all the li categories of the search result

    // Loop through all the films
    for (film of filmGrid) {
      // Assign the src of the img if there is an img element if not assign nothing
      const filmThumb = (await film.$("img"))
        ? await film.$eval(".film-thumb", img => img.src)
        : "";

      const filmTitle = await film.$eval("h3", title => title.innerText); // Get the title of the film

      // Get the director of the film
      const director = await film.$eval(
        `.director-link`,
        name => name.innerText
      );

      // Get the year that the film was released
      const year = await film.$eval(`.director-year`, year =>
        year.innerText.match(/\d+$/).join("")
      );

      console.log(filmTitle, filmThumb);
    }
  } catch (err) {
    console.log("My error:", err);
  }
})();
