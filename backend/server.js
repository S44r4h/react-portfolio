import dotenv from "dotenv";

import cors from "cors";
import express from "express";
import Parser from "rss-parser";

const parser = new Parser();
const movie_list = [];

dotenv.config();
process.env;

const letterbox_url = process.env.LETTEBOX_URL;
console.log(letterbox_url);
let app = express();
app.use(cors());

async function test(url) {
  try {
    let feed = await parser.parseURL(url);
    let movies = feed.items;

    movies.slice(0, 4).forEach((element) => {
      if (element.guid.includes("letterboxd-watch")) {
        movie_list.push({ title: element.title, date: element.isoDate });
      }
    });
  } catch (error) {
    console.error(error);
  }
}

test(letterbox_url); //ajaa tän?

/* Tähän joku virheel hallinta? */
app.get("/", (req, res) => {
  res.send(movie_list);
});

const server = app.listen("4000", () => {
  console.log("app is listening at port 4000");
});

export default server;
