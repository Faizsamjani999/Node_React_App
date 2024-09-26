import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

function SingleArticle() {
    const [article,setArticle] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        const fetchArticle = async()=>{
            try{
                const res = await axios.get(`http://localhost:9999/api/singleArticle/${id}`);
                setArticle(res.data);
            }catch(err)
            {
                console.error(err);
            }
        }
        fetchArticle()
    },[id])
  return (
    <div>
        {
            article ? (
                <>
                <h1>{article.title}</h1>
                <div dangerouslySetInnerHTML={{__html:article.content}} />
                </>
            ) : (
                <p>Loading...</p>
            )
        }
    </div>
  )
}

export default SingleArticle