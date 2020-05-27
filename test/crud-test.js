const { db } = require("./db.json");
const app = require("./src/app/app.component.ts");
const request = require("supertest");
const express = require("express");

const app = express();

app.get("http://localhost:3001/veiculos", function (req, res) {
  res.status(200).json({ id: 1 });
});

describe("POST /veiculos", function () {
  it("responds create", function (done) {
    request(app)
      .post("/veiculos")
      .send({
        placa: "test",
        chassi: "test",
        renavam: "test",
        modelo: "test",
        marca: "test",
        ano: "2020",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("GET /veiculos", function () {
  it("responds read", function (done) {
    request(app)
      .get("/veiculos/")
      .send({
        id: 5,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("PUT /veiculos", function () {
  it("responds update", function (done) {
    request(app)
      .put("/veiculos")
      .send({
        id: 5,
        placa: "newTest",
        chassi: "newTest",
        renavam: "newTest",
        modelo: "newTest",
        marca: "newTest",
        ano: "2020",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe("DELETE /veiculos", function () {
  it("responds delete", function (done) {
    request(app)
      .delete("/veiculos")
      .send({
        id: 5,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
