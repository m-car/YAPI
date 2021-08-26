const { Remarkable } = require("remarkable");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const db = require("../config/connection");
const { API } = require("../models");

const createEntryFromRowEl = (row) => {
  const tds = row.children();
  const entry = {};

  entry.auth = tds.eq(2).text();
  entry.cors = tds.eq(4).text();
  entry.description = tds.eq(1).text();
  entry.https = tds.eq(3).text();
  entry.title = tds.eq(0).text();
  entry.url = tds.eq(0).children(0).attr("href");
  entry.category = row.closest("table").prev().text();
  return entry;
};

const parseMarkdown = (str) => {
  const md = new Remarkable();
  const $ = cheerio.load(md.render(str));
  const rows = $("tbody tr");
  const entries = [];
  rows.each((i, el) => {
    entries.push(createEntryFromRowEl($(el)));
  });
  return entries;
};

const fetchApiCollection = async () => {
  const url =
    "https://raw.githubusercontent.com/public-apis/public-apis/master/README.md";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(response.status, response.statusText);
      return false;
    }
    // result is markdown for readme of the public-apis GitHub project
    const mdText = await response.text();
    return parseMarkdown(mdText);
  } catch (error) {
    console.log(error);
    return false;
  }
};

db.once("open", async () => {
  const apiData = await fetchApiCollection();
  await API.deleteMany({});
  await API.create(apiData);

  console.log("all done!");
  process.exit(0);
});
