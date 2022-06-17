const updateArticleVotes = (count, article) => {
    return fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article.article_id}`, { method: 'PATCH', body: JSON.stringify({ inc_votes: count}),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }})
}

export default updateArticleVotes;
