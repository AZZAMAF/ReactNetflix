import { useEffect, useState } from 'react'
import { getArticle } from './Utils/getArticle'
import LimitArticle from './components/LimitArticle.jsx'
import WebTitle from './components/webTitle.jsx'
import Articles from './components/Articles.jsx'
import './App.css'


function App(){
  const [article, setArticle] = useState("")
  const [counterClick, setCounterClick] = useState(1)

  useEffect(()=>{
    getArticle(counterClick).then(result => setArticle
      (result))
  }, [counterClick])

  function NextPage(){
    setCounterClick(counterClick + 1)
  }
  function PreviousPage(){
    setCounterClick(counterClick - 1)
  }
  return (
    <main>
      <WebTitle title="Netflix" desc="ini desct"/>
      <Articles title={article.title} desc={article.body}/>
      {counterClick > 5 ? (<LimitArticle/>)  : 
      (<div>
      <button onClick={NextPage}> Next </button>
      <button onClick={PreviousPage}> Previous</button>
      </div>)
      }
      
    </main>
  )
}

export default App 