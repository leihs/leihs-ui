import initStoryshots from '@storybook/addon-storyshots'

initStoryshots({
  suite: 'Storybook HTML Snapshots',
  storyKindRegex: /^((?!.*?Prototypes).)*$/
})
