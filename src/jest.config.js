module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "babel-jest", // Use Babel for JSX and TypeScript
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Include your setup file
    transformIgnorePatterns: ["node_modules/(?!.*\\.mjs$)"],
    transformIgnorePatterns: ["node_modules/(?!<module-name>)"],
 // Handle modern libraries using ESM
  };
  