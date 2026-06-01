module.exports = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-svelte'),
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@awmottaz/prettier-plugin-void-html'),
  ],
  overrides: [
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
      },
    },
  ],
  bracketSameLine: false,
  singleAttributePerLine: false,
  printWidth: 300,
};
