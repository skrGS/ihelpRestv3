const Notification = require("../models/Notification");
const path = require("path");
const MyError = require("../utils/myError");
const asyncHandler = require("express-async-handler");
const paginate = require("../utils/paginate");
const User = require("../models/User");

// api/v1/works
exports.getNotifications = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const sort = req.query.sort;
  const select = req.query.select;

  ["select", "sort", "page", "limit"].forEach((el) => delete req.query[el]);

  const pagination = await paginate(page, limit, Notification);

  const notifications = await Notification.find(req.query, select)
    .populate({
      path: "category",

      select: "name ",
    })
    .sort(sort)
    .skip(pagination.start - 1)
    .limit(limit);

  const user = await User.findById(req.params.id);

  if (!user) {
    throw new MyError(req.params.id + " ID-тэй хэрэглэгч байхгүй байна.", 404);
  }

  // Нотиф
  if (user.isWatched == true) {
      // default data
      const beginCount = new User({
        notifCount : 0
      })
      beginCount.save()
  }
  else {
      user.notifCount = notifications.length;
      user.save()
  }





  res.status(200).json({
    success: true,
    count: notifications.length,
    data: notifications,
    pagination,
  });
});

exports.getUserNotifications = asyncHandler(async (req, res, next) => {
  req.query.createUser = req.userId;
  return this.getNotifications(req, res, next);
});

exports.getNotification = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    throw new MyError(req.params.id + " ID-тэй ажил байхгүй байна.", 404);
  }

  res.status(200).json({
    success: true,
    data: notification,
  });
});

exports.createNotification = asyncHandler(async (req, res, next) => {
  req.body.createUser = req.userId;

  const notification = await Notification.create(req.body);

  res.status(200).json({
    success: true,
    data: notification,
  });
});

exports.deleteNotification = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    throw new MyError(req.params.id + " ID-тэй ном байхгүй байна.", 404);
  }

  if (
    notification.createUser.toString() !== req.userId &&
    req.userRole !== "admin"
  ) {
    throw new MyError("Та зөвхөн өөрийнхөө номыг л засварлах эрхтэй", 403);
  }

  const user = await User.findById(req.userId);

  notification.remove();

  res.status(200).json({
    success: true,
    data: notification,
    whoDeleted: user.name,
  });
});

exports.updateNotification = asyncHandler(async (req, res, next) => {
  const notification = await Notification.findById(req.params.id);

  if (!notification) {
    throw new MyError(req.params.id + " ID-тэй ном байхгүйээээ.", 400);
  }

  if (
    notification.createUser.toString() !== req.userId &&
    req.userRole !== "admin"
  ) {
    throw new MyError("Та зөвхөн өөрийнхөө номыг л засварлах эрхтэй", 403);
  }

  req.body.updateUser = req.userId;

  for (let attr in req.body) {
    notification[attr] = req.body[attr];
  }

  notification.save();

  res.status(200).json({
    success: true,
    data: notification,
  });
});
