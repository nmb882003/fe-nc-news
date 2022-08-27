const getArticle = (article_id) => {
  return fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}`)
}

const getSummaries = (path) => {
  return fetch(path)
}

const postComment = (article_id, newComment) => {
  return fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}/comments`, {
    method: 'POST', body: JSON.stringify({ username: "grumpy19", body: newComment }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
}

const patchArticleVotes = (count, article) => {
  return fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article.article_id}`, {
    method: 'PATCH', body: JSON.stringify({ inc_votes: count }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
}

export { getArticle, getSummaries, postComment, patchArticleVotes }