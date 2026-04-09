function Articles(props){
  const title = props.title
  const desc = props.desc
  return(
    <article>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  )
}

export default Articles