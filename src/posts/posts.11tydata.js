module.exports = {
  eleventyComputed: {
    // Use front matter `date` if present; otherwise, fallback to file birth time
    date: (data) => {
      if (data.date) return data.date;
      try {
        const fs = require("fs");
        const stat = fs.statSync(data.page.inputPath);
        return stat.birthtime;
      } catch (e) {
        return data.page.date;
      }
    },
  },
};
