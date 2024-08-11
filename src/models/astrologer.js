class Astrologer {
  constructor(id, name, isTop = false, assignedUsers = 0) {
    this.id = id;
    this.name = name;
    this.isTop = isTop;
    this.assignedUsers = assignedUsers;
  }
}

module.exports = Astrologer;
