const supertest = require("supertest");
const server = require("../index");
const db = require("../data/config");

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.seed.destroy();
});

describe("hobbits integration tests", () => {
    it("GET /", () => {
        const res = await supertest(server).get("/")

        expect(res.statusCode).toBe(200)
        expect(res.headers["content-type"]).toBe("application/json; charset=utf-8")
        expect(res.body.message).toBe("Welcome to our API")
    }
)})