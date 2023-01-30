const PREFIX = 'docusaurus'

const config = [
  {
    type: 'doc',
    label: 'docusaurus',
    id: `${PREFIX}/nav`,
  },
  {
    type: 'category',
    label: '内容',
    items: [
      {
        type: 'doc',
        label: 'mdx',
        id: `${PREFIX}/content/mdx`
      },
    ]
  }
]

module.exports = config
