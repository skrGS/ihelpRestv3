const express = require("express");
const { protect, authorize } = require("../middleware/protect");

const {
  getNotification,
  getNotifications,
  createNotification,
  deleteNotification,
  updateNotification,
} = require("../controller/notifications");

const router = express.Router();

//"/api/v1/Notification"
router
  .route("/")
  .get(getNotifications)
  .post(protect, authorize("admin", "operator"), createNotification);

router
  .route("/:id")
  .get(getNotification)
  .delete(protect, authorize("admin", "operator"), deleteNotification)
  .put(protect, authorize("admin", "operator"), updateNotification);

module.exports = router;
