// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

// const consoleRemovePlugins = [];
// if (IS_PROD) {
//   consoleRemovePlugins.push('transform-remove-console');
// }

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // consoleRemovePlugins,
  env: {
    development: {
      plugins: ['dynamic-import-node']
    }
  }
};
