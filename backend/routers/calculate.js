const express = require("express");
const mathjs = require("mathjs");
const router = express.Router();

router.post("/", (req, res, next) => {
  let result = req.body.result;
  result = mathjs.evaluate(result);
  result = mathjs.format(result, { precision: 9 });
  res.status(200).send(result);
});

module.exports = router;
