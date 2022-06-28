import '@nebula.js/stardust'
import '@nebula.js/sn-bar-chart'
const nebbie = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'nl-NL',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(window['@nebula.js/sn-bar-chart']),
    },
  ],
});

export default n;
