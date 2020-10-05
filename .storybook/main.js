module.exports = {
  stories: [
    // "global" stories first,
    '../src/stories/*.stories.js',
    // then the per-compontent stories
    '../src/**/*.stories.js'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    // '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register'
  ]
}
