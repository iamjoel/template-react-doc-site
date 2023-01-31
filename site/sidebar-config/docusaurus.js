const PREFIX = 'docusaurus'

const config = [
  {
    type: 'doc',
    label: 'Docusaurus 概览',
    id: `${PREFIX}/overview`,
  },
  {
    type: 'category',
    label: '功能',
    items: [
      {
        type: 'doc',
        label: 'MDX',
        id: `${PREFIX}/feature/mdx`
      },
    ]
  },
  {
    type: 'doc',
    label: '配置',
    id: `${PREFIX}/config/overview`,
  },
]

module.exports = config
