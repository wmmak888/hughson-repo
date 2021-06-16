const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)
  
  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = '/blog/${dateSegment}/${slug.current}/'

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}

//
// Create Projects pages dynamically
//
async function createProjectPostPages (graphql, actions) {
  const {createPage} = actions
  const resultPj = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)
  
  if (resultPj.errors) throw resultPj.errors

  const postEdgesPj = (resultPj.data.allSanityPost || {}).edges || []

  postEdgesPj
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = '/projects/${dateSegment}/${slug.current}/'

      createPage({
        path,
        component: require.resolve('./src/templates/projects-post.js'),
        context: {id}
      })
    })
}
//
// Create Page //
//

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
}

exports.createPages = async ({graphql, actions}) => {
  await createProjectPostPages(graphql, actions)
}







