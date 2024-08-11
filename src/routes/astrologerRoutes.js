const express = require("express");
const {
  getAstrologers,
  toggleTopAstrologer,
  distributeFlow,
} = require("../controllers/astrologerController");

const router = express.Router();

router.get("/astrologers", getAstrologers);
router.patch("/astrologers/:id/toggle", toggleTopAstrologer);
router.post("/distribute", distributeFlow);

module.exports = router;
