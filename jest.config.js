export default {
  roots: ["<rootDir>/src"],
  transform: {
    "\.(js|jsx)$": "@swc/jest"
  },
  testEnvironment: "jsdom"
};
