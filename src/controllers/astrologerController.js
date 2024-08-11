const FlowDistribution = require("../algorithms/flowDistribution");
const { astrologers, users } = require("../utils/data");

// Get the list of astrologers
exports.getAstrologers = (req, res) => {
  res.json(astrologers);
};

// Toggle the top status of an astrologer
exports.toggleTopAstrologer = (req, res) => {
  const { id } = req.params;
  const astrologer = astrologers.find(
    (astrologer) => astrologer.id === parseInt(id)
  );

  if (!astrologer) {
    return res.status(404).json({ message: "Astrologer not found" });
  }

  astrologer.isTop = !astrologer.isTop;
  res.json(astrologer);
};

// Distribute users among astrologers
exports.distributeFlow = (req, res) => {
  const flowDistribution = new FlowDistribution(astrologers);
  const distributedAstrologers = flowDistribution.distributeUsers(users);
  res.json(distributedAstrologers);
};
