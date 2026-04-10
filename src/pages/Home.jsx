import '../App.css'
import Layout from '../components/Layout.jsx'
import useArticle from '../hooks/useArticle.js'
import Articles from '../components/Articles.jsx'
import { useAtom } from 'jotai'
import { languageAtom } from '../jotai/atoms.js'


function Home(){
  // const [counterClick, setCounterClick] = useState(1)

  const { article } = useArticle()
  const [language ] = useAtom(languageAtom)

  // function NextPage(){
  //   setCounterClick(counterClick + 1)
  // }
  // function PreviousPage(){
  //   setCounterClick(counterClick - 1)
  // }
  return (
    <Layout>
      
      <h1>{language == "en" ? "watch Netflix Free" : "Tonton Gratis Netflix"}</h1>
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

export default Home 