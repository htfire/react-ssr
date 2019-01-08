var path = require('path')
var config = require('../config')

exports.getStyleLoaders = (cssOptions, preProcessor, isServer) => {
    const loaders = [
        isServer ? require.resolve('isomorphic-style-loader') : require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                ],
            },
        },
    ];
    if (preProcessor) {
        loaders.push({
            loader: require.resolve(preProcessor)
        })
    }
    return loaders
}

exports.assetsPath = function (_path) {
    var assetsSubDirectory = process.env.NODE_ENV === 'development'
        ? config.dev.assetsSubDirectory
        : config.build.assetsSubDirectory
    return path.posix.join(assetsSubDirectory, _path)
}
