export default {
  // preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {isolatedModules: true}],
    '^.+\\.(cjs|js|jsx)$': ['babel-jest', { rootMode: 'upward' }],
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    //"\\.(css|less|sass|scss)$": "identity-obj-proxy",
    // "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  preset: 'ts-jest',
};