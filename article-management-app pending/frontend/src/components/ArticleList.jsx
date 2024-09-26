import React, { useEffect, useState } from 'react'
import axios from "axios"

function ArticleList() {
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        const fetchArticles = async()=>{
            try{
                const res = await axios.get("http://localhost:9999/api/showAllArticles")
                console.log(res);
                setArticles(res.data);
            }catch(err){
                console.error(err);
                
            }
        }
        fetchArticles();
    },[])
  return (
    <ul>
        {
            articles.map(val=>(
                <li key={val._id}>
                    <a href={`/singleArticle/${val._id}`}>{val.title}</a>
                </li>
            ))
        }
    </ul>
  )
}

export default ArticleList