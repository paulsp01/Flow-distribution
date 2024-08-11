class FlowDistribution {
  constructor(astrologers) {
    this.astrologers = astrologers;
    this.topAstrologers = astrologers.filter((a) => a.isTop);
    this.regularAstrologers = astrologers.filter((a) => !a.isTop);
  }

  distributeUsers(users) {
    // Clear previous assignments
    this.astrologers.forEach((a) => (a.assignedUsers = 0));

    const totalUsers = users.length;
    const totalTopAstrologers = this.topAstrologers.length;
    const totalRegularAstrologers = this.regularAstrologers.length;

    // Handle cases where there are no astrologers to assign
    if (totalTopAstrologers === 0 && totalRegularAstrologers === 0) {
      throw new Error("No astrologers available for assignment.");
    }

    // Define a round-robin iterator for top and regular astrologers
    const roundRobin = (list) => {
      let index = 0;
      return () => {
        const item = list[index % list.length];
        index++;
        return item;
      };
    };

    const getTopAstrologer = roundRobin(this.topAstrologers);
    const getRegularAstrologer = roundRobin(this.regularAstrologers);

    for (let i = 0; i < totalUsers; i++) {
      if (totalTopAstrologers > 0 && i % 2 === 0) {
        // Distribute to top astrologer
        const topAstrologer = getTopAstrologer();
        topAstrologer.assignedUsers++;
      } else if (totalRegularAstrologers > 0) {
        // Distribute to regular astrologer
        const regularAstrologer = getRegularAstrologer();
        regularAstrologer.assignedUsers++;
      }
    }

    return this.astrologers;
  }

  toggleTopAstrologer(id) {
    const astrologer = this.astrologers.find((a) => a.id === id);
    if (astrologer) {
      astrologer.isTop = !astrologer.isTop;
      this.topAstrologers = this.astrologers.filter((a) => a.isTop);
      this.regularAstrologers = this.astrologers.filter((a) => !a.isTop);
    } else {
      throw new Error(`Astrologer with id ${id} not found.`);
    }
    return astrologer;
  }
}

module.exports = FlowDistribution;
