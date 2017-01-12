module.exports = function(config) {
    config.set({
        basePath: "",
        frameworks: ["mocha", "requirejs"],
        files: [
            {
                pattern: "node_modules/**/*.js",
                included: false
            },
            "tests/Translator.js"
        ],
        exclude: [],
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [],
        captureTimeout: 60000,
        singleRun: false
    });
};
