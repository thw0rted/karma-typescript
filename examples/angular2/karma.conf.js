module.exports = function(config) {
    /** @type {import("karma").ConfigOptions} */
    const options = {

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "base.spec.ts" },
            { pattern: "src/app/**/*.+(ts|html)" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        karmaTypescriptConfig: {
            bundlerOptions: {
                entrypoints: /\.spec\.ts$/,
                transforms: [
                    require("karma-typescript-angular2-transform")
                ],
                sourceMap: true,
            },
            compilerOptions: {
                lib: ["ES2015", "DOM"]
            },
            reports:
            {
                "html-spa": "coverage"
            }
        },

        reporters: ["dots", "karma-typescript"],

        browsers: ["ChromeHeadless"],

        client: {
            // Don't erase the output after a run
            clearContext: false,
        },

        singleRun: true,

        autoWatch: true,
    };

    config.set(options);
};
