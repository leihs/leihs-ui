module.exports = {
  core: { builder: 'webpack5' },
  stories: [
    // "global" stories first,
    '../src/stories/*.stories.js',
    // then the per-compontent stories
    '../src/**/*.stories.js'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y'
  ],
  staticDirs: ['../static']
}
