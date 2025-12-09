import dotenv from "dotenv";

import cors from "cors";
import express from "express";
import Parser from "rss-parser";

let parser = new Parser({
  customFields: {
    item: [
      ["letterboxd:filmTitle", "filmtitle"],
      ,
      ["letterboxd:filmYear", "filmyear"],
      ["letterboxd:watchedDate", "watchdate"],
    ],
  },
});
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
        let movietitletrim = element.title.split(" - ");
        movie_list.push({
          watchdate: element.watchdate,
          title: element.filmtitle,
          filmyear: element.filmyear,
          own_rating: movietitletrim[1],
        });
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
