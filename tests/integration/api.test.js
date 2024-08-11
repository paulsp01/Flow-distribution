const request = require("supertest");
const app = require("../../src/index"); // Assuming app is your Express instance

describe("GET /api/distribute", () => {
  it("should distribute users correctly", async () => {
    const res = await request(app).get("/api/distribute").expect(200);
    expect(res.body).toHaveProperty("astrologers");
  });
});
