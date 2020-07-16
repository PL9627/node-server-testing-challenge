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
  it("GET /", async () => {
    const res = await supertest(server).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body.message).toBe("Welcome to our API");
  });

  it("GET /hobbits", async () => {
    const res = await supertest(server).get("/hobbits");

    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body).toHaveLength(4);
    expect(res.body[0].name).toBe("sam");
  });

  it("GET /hobbits/:id", async () => {
    const res = await supertest(server).get("/hobbits/2");

    expect(statusCode).toBe(200);
    expect(res.headers["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.body.id).toBe(2);
    expect(res.body.name).toBe("frodo");
  });
});
