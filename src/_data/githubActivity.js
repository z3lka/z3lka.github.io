const fs = require("node:fs");
const path = require("node:path");
const { DateTime } = require("luxon");
const site = require("./site.json");

loadLocalEnv();

const ACTIVITY_TIME_ZONE =
  process.env.GITHUB_ACTIVITY_TIME_ZONE || "Europe/Istanbul";
const GITHUB_USERNAME =
  process.env.GITHUB_USERNAME || getGitHubUsername(site.github) || site.name;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

function loadLocalEnv() {
  const envPath = path.join(process.cwd(), ".env");

  if (!fs.existsSync(envPath)) {
    return;
  }

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const [rawKey, ...rawValueParts] = trimmed.split("=");
    const key = rawKey.trim();

    if (!key || process.env[key] !== undefined) {
      continue;
    }

    const rawValue = rawValueParts.join("=").trim();
    process.env[key] = rawValue.replace(/^['"]|['"]$/g, "");
  }
}

function getGitHubUsername(url) {
  if (!url) {
    return "";
  }

  try {
    const { hostname, pathname } = new URL(url);

    if (!hostname.endsWith("github.com")) {
      return "";
    }

    return pathname.split("/").filter(Boolean)[0] || "";
  } catch {
    return "";
  }
}

function getCurrentMonthRange() {
  const now = DateTime.now().setZone(ACTIVITY_TIME_ZONE);
  const fromDate = now.startOf("month");
  const nextMonth = fromDate.plus({ months: 1 });
  const toDate = now < nextMonth ? now : nextMonth;

  return {
    from: fromDate.toUTC().toISO({ suppressMilliseconds: true }),
    to: toDate.toUTC().toISO({ suppressMilliseconds: true }),
    fromDay: fromDate.toISODate(),
    toDay: nextMonth.toISODate(),
    monthLabel: fromDate.toFormat("LLLL yyyy"),
    leadingSpacers: getMondayFirstGridColumn(fromDate.weekday) - 1,
    monthDays: createMonthDays(fromDate, now),
  };
}

function createMonthDays(fromDate, now) {
  const days = [];

  for (let offset = 0; offset < fromDate.daysInMonth; offset += 1) {
    const date = fromDate.plus({ days: offset });

    days.push({
      date: date.toISODate(),
      contributionCount: 0,
      color: "#ebedf0",
      level: 0,
      isFuture: date.startOf("day") > now.startOf("day"),
    });
  }

  return days;
}

function getMondayFirstGridColumn(luxonWeekday) {
  return luxonWeekday;
}

const query = `
  query($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

module.exports = async function () {
  const { from, to, monthLabel, fromDay, toDay, leadingSpacers, monthDays } =
    getCurrentMonthRange();

  if (!GITHUB_USERNAME) {
    return {
      monthLabel,
      total: 0,
      leadingSpacers,
      days: monthDays,
      error: "Missing GitHub username",
    };
  }

  if (!GITHUB_TOKEN) {
    return {
      monthLabel,
      total: 0,
      leadingSpacers,
      days: monthDays,
      error: "Missing GITHUB_TOKEN",
    };
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          login: GITHUB_USERNAME,
          from,
          to,
        },
      }),
    });

    const json = await response.json();

    if (!response.ok || json.errors || !json.data?.user) {
      return {
        monthLabel,
        total: 0,
        leadingSpacers,
        days: monthDays,
        error: json.errors || "GitHub API error",
      };
    }

    const calendar =
      json.data.user.contributionsCollection.contributionCalendar;
    const contributionsByDate = new Map(
      calendar.weeks
        .flatMap((week) => week.contributionDays)
        .filter((day) => day.date >= fromDay && day.date < toDay)
        .map((day) => [day.date, day]),
    );

    const days = monthDays.map((day) => ({
      ...day,
      ...(contributionsByDate.get(day.date) || {}),
    }));
    const daysWithLevels = addContributionLevels(days);

    return {
      monthLabel,
      total: calendar.totalContributions,
      leadingSpacers,
      days: daysWithLevels,
    };
  } catch (error) {
    return {
      monthLabel,
      total: 0,
      leadingSpacers,
      days: monthDays,
      error: error.message,
    };
  }
};

function addContributionLevels(days) {
  const maxCount = Math.max(
    0,
    ...days.map((day) => day.contributionCount || 0),
  );

  return days.map((day) => ({
    ...day,
    level: getContributionLevel(day.contributionCount || 0, maxCount),
  }));
}

function getContributionLevel(count, maxCount) {
  if (count <= 0 || maxCount <= 0) {
    return 0;
  }

  const ratio = count / maxCount;

  if (ratio <= 0.25) {
    return 1;
  }

  if (ratio <= 0.5) {
    return 2;
  }

  if (ratio <= 0.75) {
    return 3;
  }

  return 4;
}
