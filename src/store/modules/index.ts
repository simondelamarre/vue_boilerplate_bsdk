/**
 * Automatically imports all the modules and exports as a single module object
 */
const requireModule = require.context('.', false, /\.module\.ts$/);
const modules: { [key: string]: any } = {};

requireModule.keys().forEach(filename => {
  const moduleName = filename
    .replace(/(\.\/|\.module\.ts)/g, '')
    .replace(/^\w/, c => c.toUpperCase())
  modules[moduleName] = requireModule(filename).default || requireModule(filename);
});

export default modules;