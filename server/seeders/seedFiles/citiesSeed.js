const axios = require("axios");
let firstCity;
var finished = false;
const fetchCities = async () => {
  try {
    let allCities = [];
    let nextUrl =
      "/api/3/action/datastore_search?resource_id=894ea7de-08d0-45ce-98f2-379977499618";
    let i = 0;
    const {
      data: { result },
    } = await axios.get(`https://data.gov.il${nextUrl}`);
    nextUrl = result._links["next"];
    console.log(nextUrl);
    result.records.forEach((current) => {
      // filter the records to the model
      const {
        Name,
        ShortDescription,
        FullDescription,
        Product_Url,
        Region,
        X,
        Y,
        Youtube,
      } = current;
      const newCity = {
        name: Name,
        short_description: ShortDescription,
        full_description: FullDescription,
        city_url: Product_Url,
        region: Region,
        lat: Y,
        long: X,
        youtube_link: Youtube,
      };
      allCities.push(newCity);
    });

    return allCities;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchCities;
