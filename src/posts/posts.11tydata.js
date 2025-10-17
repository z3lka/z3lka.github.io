module.exports = {
  eleventyComputed: {
    date: (data) => {
      if (data.date) return data.date;

      const inputPath =
        data.page && data.page.inputPath ? data.page.inputPath : null;

      if (inputPath) {
        // Prefer the file's first Git commit (author) date as a stable published date
        try {
          const { execSync } = require("child_process");
          const firstCommitIso = execSync(
            `git log --diff-filter=A --follow --format=%aI -1 -- "${inputPath}"`,
            { encoding: "utf8" }
          ).trim();
          if (firstCommitIso) {
            const published = new Date(firstCommitIso);
            if (!isNaN(published)) return published;
          }
        } catch (_) {}

        // Fallback to filesystem birth time (creation) if available
        try {
          const fs = require("fs");
          const stat = fs.statSync(inputPath);
          if (stat && stat.birthtime) return stat.birthtime;
        } catch (_) {}
      }

      // Final fallback to Eleventy's own computed page date
      return data.page.date;
    },
  },
};
