const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(cors());

const getHoroscope = (timeframe, signNumber) => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-${timeframe}.aspx?sign=${signNumber}`,
      },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return reject({ type: "error", message: error.message });
        }

        const $ = cheerio.load(body);
        const paragraphs = $("p")
          .toArray()
          .map((element) => $(element).text());
        const comp = $("#src-horo-matchlove").find("p").text();

        let horoscope = {
          description: paragraphs[0],
          compatibility: comp,
        };
        resolve(horoscope);
      }
    );
  });
};

app.get("/", async (req, res) => {
  const timeframe = req.query.timeframe || "today";
  const signNumber = req.query.signNumber || "1";
  request(
    {
      url: `https://www.horoscope.com/us/horoscopes/general/horoscope-general-daily-${timeframe}.aspx?sign=${signNumber}`,
    },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: "error", message: err.message });
      }

      const $ = cheerio.load(body);
      const paragraphs = $("p")
        .toArray()
        .map((element) => $(element).text());
      const comp = $("#src-horo-matchlove").find("p").text();

      console.log("Paragraphs:", paragraphs);
      console.log("comp ", comp);
      let a = {
        description: paragraphs[0],
        compatibility: comp,
      };
      res.send(a);
    }
  );
});

const PORT = 4000 || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
// Export the Express API

module.exports = {
  app,
  getHoroscope,
};
