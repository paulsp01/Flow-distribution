const Astrologer = require("../models/astrologer");
const User = require("../models/user");

// Dummy data
const astrologers = [
  new Astrologer(1, "Astrologer 1"),
  new Astrologer(2, "Astrologer 2", true),
  new Astrologer(3, "Astrologer 3"),
  // Add more astrologers as needed
];

const users = [
  new User(1, "User 1"),
  new User(2, "User 2"),
  new User(3, "User 3"),
  // Add more users as needed
];

module.exports = { astrologers, users };
