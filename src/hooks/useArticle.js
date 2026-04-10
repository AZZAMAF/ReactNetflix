import { useEffect, useState } from "react"
import { getArticle } from "../Utils/getArticle"

function useArticle(){
     const [article, setArticle] = useState("")

      useEffect(()=>{
        getArticle(1).then(result => setArticle(result))
      }, [])

      return {article}
}

export default useArticle