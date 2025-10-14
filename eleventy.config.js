const { DateTime } = require("luxon");
const stripHtml = require("striptags");

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("readTime", (text) => {
    if (!text) return 0;
    const plain = stripHtml(text).replace(/\s+/g, " ").trim();
    return Math.max(1, Math.ceil(plain.split(" ").length / 200));
  });

  eleventyConfig.addFilter("excerpt", (content, words = 50) => {
    if (!content) return "";
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
