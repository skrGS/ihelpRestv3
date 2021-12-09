const mongoose = require("mongoose");
const { transliterate, slugify } = require("transliteration");

const BookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Номын нэрийг оруулна уу"],
      unique: true,
      trim: true,
      maxlength: [250, "Номын нэрний урт дээд тал нь 250 тэмдэгт байх ёстой."],
    },
    photo: {
      type: String,
      default: "no-photo.jpg",
    },

    title1: {
      type: String,
      trim: true,
    },
    title2: {
      type: String,
      trim: true,
    },
    title3: {
      type: String,
      trim: true,
    },
    title4: {
      type: String,
      trim: true,
    },
    datetime: {
      type: String,
      trim: true,
    },
    serial: {
      type: String,
      trim: true,
    },
    bigContent: {
      type: String,
      trim: true,
    },
    sponser: {
      type: String,
      default: "no-photo.jpg",
    },
    sponser1: {
      type: String,
      default: "no-photo.jpg",
    },
    sponser2: {
      type: String,
      default: "no-photo.jpg",
    },
    aguulgaPhoto: {
      type: String,
      default: "no-photo.jpg",
    },
    aguulgaTitle1: {
      type: String,
      trim: true,
    },
    aguulgaTitle2: {
      type: String,
      trim: true,
    },
    aguulgaText1: {
      type: String,
      trim: true,
    },
    aguulgaHuman: {
      type: String,
      trim: true,
    },
    aguulgaPhoto1: {
      type: String,
      default: "no-photo.jpg",
    },
    aguulgaTitle3: {
      type: String,
      trim: true,
    },
    aguulgaTitle4: {
      type: String,
      trim: true,
    },
    aguulgaText2: {
      type: String,
      trim: true,
    },
    aguulgaPhoto2: {
      type: String,
      default: "no-photo.jpg",
    },
    aguulgaTitle5: {
      type: String,
      trim: true,
    },
    aguulgaTitle6: {
      type: String,
      trim: true,
    },
    aguulgaText3: {
      type: String,
      trim: true,
    },
    aguulgaHuman1: {
      type: String,
      trim: true,
    },
    aguulgaPhoto3: {
      type: String,
      default: "no-photo.jpg",
    },
    aguulgaTitle7: {
      type: String,
      trim: true,
    },
    aguulgaTitle8: {
      type: String,
      trim: true,
    },
    aguulgaText4: {
      type: String,
      trim: true,
    },
    aguulgaHuman2: {
      type: String,
      trim: true,
    },
    aguulgaPhoto4: {
      type: String,
      default: "no-photo.jpg",
    },
    aguulgaTitle9: {
      type: String,
      trim: true,
    },
    aguulgaTitle10: {
      type: String,
      trim: true,
    },
    aguulgaText5: {
      type: String,
      trim: true,
    },
    aguulgaHuman3: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Номын тайлбарыг оруулна уу"],
      trim: true,
      maxlength: [5000, "Номын нэрний урт дээд тал нь 20 тэмдэгт байх ёстой."],
    },
    createUser: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    updateUser: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

BookSchema.virtual("zohiogch").get(function () {
  // this.author
  if (!this.author) return "";

  let tokens = this.author.split(" ");
  if (tokens.length === 1) tokens = this.author.split(".");
  if (tokens.length === 2) return tokens[1];

  return tokens[0];
});

module.exports = mongoose.model("Book", BookSchema);
