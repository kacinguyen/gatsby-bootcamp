// onCreateNode --> can attach individual data to node

const path = require('path')

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        // add slug to markdown nodes
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}