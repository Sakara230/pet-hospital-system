const express = require("express");
const router = express.Router();

const {
  getAllInformation,
  getInformation,
  createInformation,
  updateInformation,
  deleteInformation,
} = require("../controllers/information");

router.route("/").get(getAllInformation).post(createInformation);
router
  .route("/:id")
  .get(getInformation)
  .patch(updateInformation)
  .delete(deleteInformation);

module.exports = router;
