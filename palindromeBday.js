var date = {
  day: 11,
  month: 2,
  year: 2020,
};

const isPalindrome = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log({ revStr }, { str });
  return revStr.toLowerCase() === str.toLowerCase();
};

const convertDateToStr = (date) => {
  let dateStr = {};
  for (key in date) {
    if (key === "day" || key === "month") {
      date[key] < 10
        ? (dateStr[key] = `0${date[key]}`)
        : (dateStr[key] = `${date[key]}`);
    } else {
      dateStr[key] = `${date[key]}`;
    }
  }
  return dateStr;
};

const convertDateToAllFormat = (dateStr) => {
  const ddmmyyyy = `${dateStr["day"]}${dateStr["month"]}${dateStr["year"]}`;
  const mmddyyyy = `${dateStr["month"]}${dateStr["day"]}${dateStr["year"]}`;
  const yyyymmdd = `${dateStr["year"]}${dateStr["month"]}${dateStr["day"]}`;
  const mmddyy = `${dateStr["month"]}${dateStr["day"]}${dateStr["year"]
    .split("")
    .slice(2, 4)
    .join("")}`;
  const ddmmyy = `${dateStr["day"]}${dateStr["month"]}${dateStr["year"]
    .split("")
    .slice(2, 4)
    .join("")}`;
  const yyddmm = `${dateStr["year"].split("").slice(2, 4).join("")}${
    dateStr["day"]
  }${dateStr["month"]}`;

  return [ddmmyyyy, mmddyyyy, yyyymmdd, mmddyy, ddmmyy, yyddmm];
};

const checkAllDateFormatPalindrome = (allDateFormats) => {
  let isPalindromeAllFormats = [];
  for (date of allDateFormats) {
    isPalindromeAllFormats.push(isPalindrome(date));
  }
  return isPalindromeAllFormats;
};

console.log(
  checkAllDateFormatPalindrome(convertDateToAllFormat(convertDateToStr(date)))
);
