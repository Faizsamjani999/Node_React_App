import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

function ArticleApp() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [articles, setArticles] = useState([]);
    const [singleArticle, setSingleArticle] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        try {
            const response = await axios.post('http://localhost:9999/api/articles', formData);
            const newArticle = response.data;
            setArticles((prevArticles) => [...prevArticles, newArticle]);
            setTitle('');
            setContent('');
        } catch (error) {
            console.error(error);
        }
    };

    const handleGetAllArticles = async () => {
        try {
            const response = await axios.get('http://localhost:9999/api/showAllArticles');
            const allArticles = response.data;
            setArticles(allArticles);
        } catch (error) {
            console.error(error);
        }
    };

    const handleGetSingleArticle = async (id) => {
        try {
            const response = await axios.get(`http://localhost:9999/api/singleArticle/${id}`);
            const singleArticle = response.data;
            setSingleArticle(singleArticle);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Article App</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <br />
                <label htmlFor="content">Content:</label>
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(data);
                    }}
                    config={{
                        ckfinder: {
                            uploadUrl: 'http://localhost:9999/api/upload', // your upload API endpoint
                        },
                    }}
                />
                <br />
                <br />
                <button type="submit">Create Article</button>
            </form>
            <button onClick={handleGetAllArticles}>Show All Articles</button>
            <ul>
                {articles.map((article) => (
                    <li key={article._id}>
                        <h2>{article.title}</h2>
                        <p>{article.content}</p>
                        {article.media && (
                            <img src={`http://localhost:9999/uploads/${article.media[0]}`} alt={article.title} />
                        )}
                        <button onClick={() => handleGetSingleArticle(article._id)}>
                            View Article
                        </button>
                    </li>
                ))}
            </ul>
            {singleArticle && (
                <div>
                    <h2>{singleArticle.title}</h2>
                    <p>{singleArticle.content}</p>
                    {singleArticle.media && (
                        <img src={`http://localhost:9999/uploads/${singleArticle.media[0]}`} alt={singleArticle.title} />
                    )}
                </div>
            )}
        </div>
    );
}

export default ArticleApp;
