const { DefinePlugin } = require("webpack");

let testPhrase = '';
switch (process.env.NODE_ENV) {
    case 'development':
        testPhrase = '"I can do this all day"';
        break;
    case 'production':
        testPhrase = JSON.stringify("Bazinga");
        break;
}

module.exports = {
    webpack: {
        plugins: [
            new DefinePlugin({
                "process.env.TEST_PHRASE": testPhrase
                })
        ]
    }
};