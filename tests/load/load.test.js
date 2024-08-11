// Example using Artillery for load testing
const artillery = require("artillery");

artillery
  .runner("load-test-config.yml")
  .run()
  .then(() => {
    console.log("Load test completed");
  });
