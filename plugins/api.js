/* eslint-disable no-console */
// import * as api from '@/services/api'

export default (context, inject) => {
  let slug
  let article

  if (context.params.slug) {
    slug = context.params.slug
    article = require(`@/_jsonApi/posts`)[slug]
  } else {
    slug = null
    article = null
  }
  inject('slug', slug)
  inject('article', article)

  inject('getPost', slug => require(`@/_jsonApi/posts`)[slug])
  inject('getPosts', () => require(`@/_jsonApi/posts`))

  inject('get', (collection, slug) => {
    if (slug) return require(`@/_jsonApi/${collection}`)[slug]
    else return require(`@/_jsonApi/${collection}`)
  })
}
