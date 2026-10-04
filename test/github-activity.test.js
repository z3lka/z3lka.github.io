const assert = require("node:assert/strict");
const test = require("node:test");
const { DateTime } = require("luxon");
const { createYearMonths } = require("../src/_data/githubActivity");

test("GitHub activity months run from January through the current month", () => {
  const now = DateTime.fromISO("2026-10-04T12:00:00", {
    zone: "Europe/Istanbul",
  });
  const months = createYearMonths(now, [
    { date: "2026-01-01", contributionCount: 2 },
    { date: "2026-10-04", contributionCount: 3 },
  ]);

  assert.equal(months.length, 10);
  assert.equal(months[0].monthLabel, "January 2026");
  assert.equal(months[0].total, 2);
  assert.equal(months[9].monthLabel, "October 2026");
  assert.equal(months[9].total, 3);
});
