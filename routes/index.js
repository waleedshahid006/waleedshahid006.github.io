var express = require("express");
var router = express.Router();
const request = require("request");

router.get("/", function (_req, res, _next) {
  let options = {
    method: "GET",
    url: "https://vote-usa.org/api/v1.asmx/electionQuery?accessKey=M@gicWord",
    headers: {},
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    // console.log("response: ", response.body);
    let data = JSON.parse(response.body)
    res.status(200).send({data});
  });
});

module.exports = router;
