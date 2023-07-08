## Astrology API

This API allows you to retrieve astrology information based on the provided query parameters.

### Endpoint

The base URL for this API is: `https://astro-tau.vercel.app/`

### Query Parameters

| Parameter | Required | Description                                                                                                                                                             |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timeframe | Yes      | Specifies the timeframe for which you want to retrieve astrology information. Possible values are: `yesterday`, `today`, `tomorrow`.                                    |
| sign      | Yes      | Specifies the zodiac sign for which you want to retrieve astrology information. See [Zodiac Sign Numbers](#zodiac-sign-numbers) for the list of available sign numbers. |

##### Zodiac Sign Numbers

The zodiac signs are represented by numbers using the following mapping:

```javascript
const signNumber = {
  aries: 1,
  taurus: 2,
  gemini: 3,
  cancer: 4,
  leo: 5,
  virgo: 6,
  libra: 7,
  scorpio: 8,
  sagittarius: 9,
  capricorn: 10,
  aquarius: 11,
  pisces: 12,
};
```

### Usage

To retrieve astrology information for today's date and the zodiac sign "Leo", you can make a GET request to the following URL:

`https://astro-tau.vercel.app/?signNumber=5&timeframe=today`

### Working Example

A live working example of the Astrology API is available at [https://horoscope-app-ten.vercel.app/](https://horoscope-app-ten.vercel.app/).

You can try out different combinations of timeframe and zodiac sign to retrieve astrology information in real-time.

Feel free to explore the example and see how the API works in action.

If you have any questions or need further assistance, please feel free to contact us.
