module.exports = {
    chainWebpack: async config => {
        let testPhrase = '';
        switch (process.env.NODE_ENV) {
            case 'development':
                testPhrase = '"I can do this all day"';
                break;
            case 'production':
                testPhrase = JSON.stringify("Bazinga");
                break;
        }


        config.plugin('define')
            .tap(args => {
                args[0]['process.env'].TEST_PHRASE = testPhrase;
                return args
            })
    },
    runtimeCompiler: true,
    css: {
        // Enable CSS source maps.
        sourceMap: true
    }
};