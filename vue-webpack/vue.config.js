const credstash = require('nodecredstash')

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

function getKey (name) {
    return new Promise(function (resolve, reject) {
        credstash.getSecret({name: name})
          .then(key => {
              logger.debug('key acquired');
              resolve(key)
          })
          .catch(err =>{
              logger.debug('key not found');
              reject(err)
          })
    });
