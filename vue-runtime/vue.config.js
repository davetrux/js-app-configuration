module.exports = {
    chainWebpack: async config => {
        config.plugin('copy').tap(options => {
            options[0][0].ignore.push('config/*');
            return options
        })
    },
    runtimeCompiler: true,
    css: {
        // Enable CSS source maps.
        sourceMap: true
    }
};