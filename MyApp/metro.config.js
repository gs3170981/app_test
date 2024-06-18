/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const {
  getDefaultConfig,
  mergeConfig,
} = require('@react-native/metro-config');

/**
 * Metro配置
 * https://metrobundler.dev/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    // 不用变量，只用less
    babelTransformerPath: require.resolve("react-native-less-transformer"),
    // babelTransformerPath: require.resolve("./transformer.js"), // 这个支持变量
  },
  resolver: {
    sourceExts: [...sourceExts, "css", "less"]
  }
};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);
module.exports = mergeConfig(defaultConfig, config);

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };
