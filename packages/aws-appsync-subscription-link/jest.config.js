module.exports = {
    preset: 'ts-jest/presets/default-esm',
    extensionsToTreatAsEsm: ['.ts'],
    transform: {
        "^.+\\.tsx?$": ["ts-jest", {
            useESM: true
        }]
    },
    transformIgnorePatterns: [
        "node_modules/(?!(@apollo/client|graphql-tag|zen-observable-ts)/)"
    ],
    moduleNameMapper: {
        "^aws-appsync-auth-link$": "<rootDir>/../aws-appsync-auth-link/src/index.ts",
        "^aws-appsync-subscription-link$": "<rootDir>/src/index.ts"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    collectCoverageFrom: [
        "src/**/*",
        "!src/vendor/**"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    testEnvironment: "node"
};
