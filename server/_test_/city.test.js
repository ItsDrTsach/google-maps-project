const request = require("supertest");
const app = require("../app");
const { City } = require("../models");

const cityMock = [
  {
    name: "ashdod",
    short_description: "ShortDescription",
    full_description: "FullDescription",
    city_url: "Product_Url",
    region: "Region",
    lat: 34.22,
    long: 32.11,
    youtube_link: "Youtube",
  },
  {
    name: "ashdod",
    short_description: "ShortDescription",
    full_description: "FullDescription",
    city_url: "Product_Url",
    region: "Region",
    lat: 34.22,
    long: 32.11,
    youtube_link: "Youtube",
  },
  {
    name: "ashdod",
    short_description: "ShortDescription",
    full_description: "FullDescription",
    city_url: "Product_Url",
    region: "Region",
    lat: 34.22,
    long: 32.11,
    youtube_link: "Youtube",
  },
];
describe("", () => {
  beforeEach(async () => {
    await City.destroy({ truncate: true, force: true });
  });
  afterAll((done) => {
    done();
  });
  it("should be able to get all cities", async () => {
    await City.bulkCreate(cityMock);
    const { body } = await request(app).get("/api/v1/city");
    expect(body.length).toBe(3);
  });
});
