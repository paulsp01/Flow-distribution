
const { astrologers, users } = require("../utils/data");
const FlowDistribution = require("../src/algorithms/flowDistribution");

test("should handle 3000 users and 500 astrologers efficiently", () => {
  // Create 500 astrologers, with half being top astrologers
  const astrologers = Array.from({ length: 500 }, (_, index) => ({
    id: index + 1,
    name: `Astrologer ${index + 1}`,
    isTop: index < 250, // First 250 are top astrologers
    assignedUsers: 0,
  }));

  // Create 3000 users
  const users = Array.from({ length: 3000 }, (_, index) => ({ id: index + 1 }));

  const flow = new FlowDistribution(astrologers);
  const result = flow.distributeUsers(users);

  const assignedUsers = result.map((a) => a.assignedUsers);
  const maxAssigned = Math.max(...assignedUsers);
  const minAssigned = Math.min(...assignedUsers);

  // Ensure the difference between max and min assigned users is minimal
  expect(maxAssigned - minAssigned).toBeLessThanOrEqual(1);
});
