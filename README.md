# Flow-distribution

Project Overview
This project is a backend service implemented in Node.js designed to distribute a daily flow of users (2000-3000) among a pool of astrologers (up to 500). The core feature is a flow distribution algorithm that ensures users are fairly allocated to astrologers while providing flexibility for top astrologers to receive more or fewer connections.

Features
Flow Distribution: Users are allocated to astrologers using a fair round-robin approach.
Top Astrologers: The algorithm allows certain astrologers to be marked as "top" and receive more connections.
Toggle Mechanism: Ability to toggle an astrologer’s top status through an API, adjusting their flow accordingly.
Efficiency: The algorithm is designed to handle large volumes of users and astrologers efficiently.
How It Works
Flow Distribution: Users are distributed among astrologers in a round-robin manner, with the ability to prioritize top astrologers.
API Endpoints:
GET /api/astrologers: Fetch the list of astrologers.
PATCH /api/astrologers/:id/toggle: Toggle an astrologer's top status.
GET /api/distribute: Distribute users to astrologers and return the allocation.
Usage
Run the Server: Start the Node.js server to enable the API.
API Interaction: Use the provided endpoints to interact with the system, toggle astrologer statuses, and distribute users.
Testing
The project includes test cases to validate the distribution algorithm. Run npm test to execute the tests and ensure the functionality works as expected.
Requirements
Node.js
Express
Jest (for testing)
Installation
Clone the repository.
Run npm install to install dependencies.
Start the server with npm start.
Conclusion
This project demonstrates a scalable approach to user allocation in a distributed system, with customizable flow distribution for prioritized entities.
Deployment Link:https://flow-distribution-vhr7.onrender.com
