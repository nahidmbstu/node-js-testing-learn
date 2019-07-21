const request = require("supertest");
const App = require("../index");

describe("GET /user", function() {
  it("responds with json", function(done) {
    request(App)
      .get("/user")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST /users", function() {
  it("responds with json", function(done) {
    request(App)
      .post("/addUser")
      .send({ name: "john" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
