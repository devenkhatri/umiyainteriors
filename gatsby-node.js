const _ = require(`lodash`)
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // The “graphql” function allows us to run arbitrary
  // queries against the local Contentful graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  return graphql(
    `
      {
        allContentfulProduct(limit: 1000) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Create Product pages
      const productTemplate = path.resolve(`./src/templates/product.js`)
      // We want to create a detailed page for each
      // product node. We'll just use the Contentful id for the slug.
      _.each(result.data.allContentfulProduct.edges, edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: `/products/${edge.node.slug}/`,
          component: slash(productTemplate),
          context: {
            slug: edge.node.slug,
          },
        })
      })
    })
    .then(() => {
      graphql(
        `
          {
            allContentfulCategory(limit: 1000) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          throw result.errors
        }

        // Create Category pages
        const categoryTemplate = path.resolve(`./src/templates/category.js`)
        // We want to create a detailed page for each
        // category node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulCategory.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/categories/${edge.node.slug}/`,
            component: slash(categoryTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    })
    .then(() => {
      graphql(
        `
          {
            allContentfulProductCatalogue(limit: 1000) {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          throw result.errors
        }

        // Create Catalogue pages
        const catalogueTemplate = path.resolve(`./src/templates/catalogue.js`)
        // We want to create a detailed page for each
        // catalogue node. We'll just use the Contentful id for the slug.
        _.each(result.data.allContentfulProductCatalogue.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/catalogue/${edge.node.slug}/`,
            component: slash(catalogueTemplate),
            context: {
              slug: edge.node.slug,
            },
          })
        })
      })
    })
}
