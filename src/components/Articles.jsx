

function Articles(props){
  const title = props.title
  const desc = props.desc

  function showArticledetail(e){
    alert('detail article')
  }

  function saveArticle(event){
    event.preventDefault()
    event.stopPropagation()
    alert('save article')
  }
  return(
    <article onClick={showArticledetail}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <form>
        <button type="submit" onClick={saveArticle}> save ARticle</button>
      </form>
    </article>
  )
}

export default Articles