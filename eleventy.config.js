const { DateTime } = require("luxon");
const stripHtml = require("striptags");

module.exports = function (eleventyConfig) {
  // Copy `src/styles.css` to output
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  // Reading time: strip HTML, normalize whitespace, 200 wpm, minimum 1 minute
  eleventyConfig.addFilter("readTime", (text) => {
    if (!text) return 0;
    const plain = stripHtml(text).replace(/\s+/g, " ").trim();
    return Math.max(1, Math.ceil(plain.split(" ").length / 200));
  });

  eleventyConfig.addFilter("excerpt", (content, words = 50) => {
    if (!content) return "";
    // remove markup then trim white‑space
    const text = stripHtml(content).replace(/\s+/g, " ").trim();

    const wordArray = text.split(" ").slice(0, words);
    return wordArray.join(" ") + (wordArray.length >= words ? "…" : "");
  });

  eleventyConfig.addFilter("date", (dateObj, format = "dd-MM-yyyy") => {
    return DateTime.fromJSDate(new Date(dateObj), { zone: "utc" }).toFormat(
      format
    );
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};
