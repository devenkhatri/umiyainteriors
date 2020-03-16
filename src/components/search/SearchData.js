import { useStaticQuery, graphql } from "gatsby"

export const getSearchData = () => {

    const data = useStaticQuery(
        graphql`
          query {
            allContentfulCategory {
              edges {
                node {
                  title {
                    title
                  }
                  slug
                }
              }
            }
            allContentfulProduct {
                edges {
                  node {
                    productName {
                      productName
                    }
                    slug
                  }
                }
              }
          }
        `
    )

    //populating searchdata in format of {title, slug, type} for all content types on which search should execute
    let searchData = [];

    (data.allContentfulCategory && data.allContentfulCategory.edges.map((item) => {
        let newDataItem = {
            title: item.node.title.title,
            slug: `/categories/${item.node.slug}`,
            type: 'Category'
        }
        searchData.push(newDataItem)
    }));

    (data.allContentfulProduct && data.allContentfulProduct.edges.map((item) => {
        let newDataItem = {
            title: item.node.productName.productName,
            slug: `/products/${item.node.slug}`,
            type: 'Product'
        }
        searchData.push(newDataItem)
    }))

    return searchData;

}