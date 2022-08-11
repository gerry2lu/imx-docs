const { url } = require('../docusaurus.config');

module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Core SDK Swift',
      items: [
        'overview',
        'installation',
        'quickstart',
        'sdk-functions',
        'additional-info',
        'changelog',
        {
          type: 'link',
          label: 'Reference',
          href: `${url}/sdk-references/core-sdk-swift/0-1-0/documentation/immutablexcore`,
        },
      ],
    },
  ],
};