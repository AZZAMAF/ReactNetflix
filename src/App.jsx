
import WebTitle from './components/webTitle.jsx'
import Articles from './components/Articles.jsx'
import './App.css'
import Layout from './components/Layout.jsx'
import useArticle from './hooks/useArticle.js'


function App(){
  // const [counterClick, setCounterClick] = useState(1)

  const { article } = useArticle()

  // function NextPage(){
  //   setCounterClick(counterClick + 1)
  // }
  // function PreviousPage(){
  //   setCounterClick(counterClick - 1)
  // }
  return (
    <Layout>
      <WebTitle title="Netflix" desc="ini desct"/>
      <Articles title={article.title} desc={article.body}/>
      {/* {counterClick > 5 ? (<LimitArticle/>)  : 
      (<div>
      <button onClick={NextPage}> Next </button>
      <button onClick={PreviousPage}> Previous</button>
      </div>)
      } */}
      
    </Layout>
  )
}

export default App 